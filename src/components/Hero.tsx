import { useState, useEffect, useRef } from "react";
import backgroundImage from "@/assets/background.png";
import { ChevronDown, Mic, Send } from "lucide-react";

type Sender = "user" | "agent" | "system";

interface ChatMessage {
  id: string;
  sender: Sender;
  text: string;
  typing?: boolean; // for agent typing animation on that specific bubble
}

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [chatActive, setChatActive] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToNext = () => {
    window.location.href = "/projects";
  };

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Voice input using Web Speech API
  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setUserQuery(transcript);
    };
    recognition.start();
  };

  // Webhook URL from .env
  const webhookUrl: string | undefined = import.meta.env.VITE_N8N_WEBHOOK_URL;

  // Utility to create unique IDs
  const uid = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  const handleSend = async () => {
    if (!webhookUrl) {
      console.error("Missing VITE_N8N_WEBHOOK_URL");
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          sender: "system",
          text: "Agent webhook URL is not configured.",
        },
      ]);
      return;
    }
    if (userQuery.trim() === "" || isSending) return;

    // Add user message bubble and clear input immediately
    const userMsg: ChatMessage = { id: uid(), sender: "user", text: userQuery };
    setMessages((prev) => [...prev, userMsg]);
    setUserQuery("");
    setIsSending(true);

    // Add loading indicator (three dots bubble with system sender)
    const loadingId = uid();
    setMessages((prev) => [...prev, { id: loadingId, sender: "system", text: "" }]);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatInput: userMsg.text,
          sessionId: "hero-session-1",
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Webhook error (${response.status}): ${text}`);
      }

      const data = await response.json();
      const agentMessage =
        typeof data === "object" && data.output
          ? data.output
          : data.text ?? JSON.stringify(data);

      // Remove loading indicator by ID
      setMessages((prev) => prev.filter((m) => m.id !== loadingId));

      // Add agent bubble in typing mode with unique ID
      const agentId = uid();
      setMessages((prev) => [...prev, { id: agentId, sender: "agent", text: "", typing: true }]);

      // Simulate typing effect by updating that bubble by ID
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setMessages((prev) => {
          const idx = prev.findIndex((m) => m.id === agentId);
          if (idx === -1) return prev; // bubble removed or not found
          const updated = [...prev];
          updated[idx] = {
            ...updated[idx],
            text: agentMessage.slice(0, i),
            typing: i < agentMessage.length,
          };
          return updated;
        });
        if (i >= agentMessage.length) {
          clearInterval(interval);
        }
      }, 35); // typing speed (ms per character)
    } catch (error: any) {
      console.error("Error sending message:", error);
      // Remove loading bubble and add an error agent bubble
      setMessages((prev) => [
        ...prev.filter((m) => m.id !== loadingId),
        { id: uid(), sender: "agent", text: "Error contacting agent." },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Mountain landscape background"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          poster={backgroundImage}
          onCanPlayThrough={() => setVideoLoaded(true)}
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-overlay/70 via-overlay/50 to-overlay/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 flex-1 flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in text-center">
          Sandile Mathenjwa
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl text-center">
          Full Stack Developer • Digital Facilitator • Content Creator
        </p>
        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mb-8 sm:mb-12 text-center">
          Building digital solutions and creating content from KwaZulu-Natal, South Africa
        </p>

        {!chatActive ? (
          <button
            onClick={() => setChatActive(true)}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-strong animate-pulse-soft"
          >
            Talk to My AI Agent
          </button>
        ) : (
          <div className="flex flex-col w-full max-w-md gap-3">
            {/* Chat bubbles */}
            <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-2">
              {messages.map((msg) => {
                // Loading dots bubble
                if (msg.sender === "system" && msg.text === "") {
                  return (
                    <div
                      key={msg.id}
                      className="self-start bg-white/10 px-3 py-2 rounded-xl text-sm text-white"
                    >
                      <span className="flex gap-1">
                        <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce delay-150"></span>
                        <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce delay-300"></span>
                      </span>
                    </div>
                  );
                }

                const isUser = msg.sender === "user";
                const bubbleClasses = isUser
                  ? "self-end bg-white/20"
                  : "self-start bg-white/10";

                return (
                  <div
                    key={msg.id}
                    className={`px-3 py-2 rounded-xl text-sm text-white max-w-[80%] animate-fade-in ${bubbleClasses}`}
                  >
                    {/* Show caret for typing agent bubble */}
                    {msg.typing ? (
                      <span>
                        {msg.text}
                        <span className="inline-block w-2 h-4 align-middle bg-white/80 ml-1 animate-pulse opacity-70" />
                      </span>
                    ) : (
                      msg.text
                    )}
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full h-12 px-4">
              <input
                type="text"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder="Ask about Sandile’s work..."
                className="bg-transparent text-white flex-grow outline-none placeholder-white/70 h-full"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
              />
              <button
                onClick={startListening}
                className="ml-2 text-white hover:text-accent transition-colors h-full flex items-center disabled:opacity-50"
                aria-label="Voice input"
                disabled={isSending}
              >
                <Mic className="w-5 h-5" />
              </button>
              <button
                onClick={handleSend}
                className="ml-2 text-white hover:text-accent transition-colors h-full flex items-center disabled:opacity-50"
                aria-label="Send message"
                disabled={isSending}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="relative z-10 mb-8 text-white/80 hover:text-white transition-colors animate-bounce cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10" />
      </button>
    </section>
  );
};

export default Hero;
