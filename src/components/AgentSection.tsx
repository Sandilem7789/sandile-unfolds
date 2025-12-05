import { MessageSquare, Phone, X, Mic, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ChatMessage {
  sender: "user" | "agent";
  text: string;
}

const AgentSection = () => {
  const [showAgent, setShowAgent] = useState(false);
  const [iconLoaded, setIconLoaded] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

  const handleStartConversation = () => {
    setShowAgent(true);
    console.log("Starting conversation with AI agent");
  };

  const handleCloseAgent = () => {
    setShowAgent(false);
    console.log("Closing conversation with AI agent");
  };

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

  const handleSend = async () => {
    if (userQuery.trim() === "") return;

    setMessages((prev) => [...prev, { sender: "user", text: userQuery }]);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatInput: userQuery,
          sessionId: "agent-section-session",
        }),
      });

      const data = await response.json();
      console.log("Agent raw response:", data);

      setMessages((prev) => [
        ...prev,
        { sender: "agent", text: data?.text ?? JSON.stringify(data) },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "agent", text: "Error contacting agent." },
      ]);
    }

    setUserQuery("");
  };

  return (
    <section
      id="agent"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">AI Agent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ask Me Anything
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Curious about my professional journey, technical skills, or the
            projects I've built? Click the button below to speak or text with my AI
            agent. The conversation widget will appear here.
          </p>

          {/* CTA Button */}
          {!showAgent && (
            <Button
              onClick={handleStartConversation}
              size="lg"
              className="gap-2 px-8 py-6 text-base sm:text-lg font-semibold rounded-full shadow-strong hover:scale-105 transition-transform animate-pulse-soft"
            >
              <Phone className="w-5 h-5" /> Talk to My AI Agent
            </Button>
          )}
        </div>

        {/* Render the chat UI when toggled on */}
        {showAgent && (
          <div className="relative bg-white/5 backdrop-blur-md rounded-xl p-4 max-w-md mx-auto">
            {/* Close button */}
            <button
              onClick={handleCloseAgent}
              className="absolute top-2 right-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full hover:bg-black"
            >
              <span className="inline-flex items-center gap-1">
                <X className="w-3 h-3" /> Close
              </span>
            </button>

            {/* Chat bubbles */}
            <div className="flex flex-col gap-2 max-h-64 overflow-y-auto mb-3 pr-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-2 rounded-xl text-sm text-white max-w-[80%] ${
                    msg.sender === "user"
                      ? "self-end bg-white/20"
                      : "self-start bg-white/10"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Chat input */}
            <div className="flex items-center bg-white/10 rounded-full h-12 px-4">
              <input
                type="text"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder="Type your question..."
                className="bg-transparent text-white flex-grow outline-none placeholder-white/70 h-full"
              />
              <button
                onClick={startListening}
                className="ml-2 text-white hover:text-accent transition-colors h-full flex items-center"
                aria-label="Voice input"
              >
                <Mic className="w-5 h-5" />
              </button>
              <button
                onClick={handleSend}
                className="ml-2 text-white hover:text-accent transition-colors h-full flex items-center"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground mb-4">
            The AI agent is designed to answer questions about my background,
            expertise in full stack development, and the platforms I've created.
          </p>

          {/* AI Agent Icon with fade-in */}
          <div className="flex items-center justify-center">
            <img
              src="/ai-agent-icon.png"
              alt="AI Agent"
              onLoad={() => setIconLoaded(true)}
              className={`w-64 h-64 opacity-70 transition-opacity duration-1000 ${
                iconLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;
