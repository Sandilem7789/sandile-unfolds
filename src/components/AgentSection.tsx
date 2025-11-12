import { MessageSquare, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { set } from "date-fns";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": {
        "agent-id": string;
        position?: string;
      };
    }
  }
}

const AgentSection = () => {
  const [showAgent, setShowAgent] = useState(false);

  const handleStartConversation = () => {
    setShowAgent(true);
    console.log("Starting conversation with AI agent");
  };

  const handleCloseAgent = () => {
    setShowAgent(false);
    console.log("Closing conversation with AI agent");
  };

  return (
    <section id="agent" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-secondary/30">
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
            Curious about my professional journey, technical skills, or the projects I've built? 
            Click the button below to speak with my AI agent. The conversation widget will appear at the top of your screen.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={handleStartConversation}
            size="lg"
            className="gap-2 px-8 py-6 text-base sm:text-lg font-semibold rounded-full shadow-strong hover:scale-105 transition-transform"
          >
            <Phone className="w-5 h-5" />
            Talk to My AI Agent
          </Button>
        </div>

        {/* Render the widget only when toggled on */}
        {showAgent && (
          <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
            {/* ElevenLabs widget element; pointer-events on container off, but allow interactions on widget */}
            <div className="pointer-events-auto flex justify-center">
              <elevenlabs-convai
              agent-id={import.meta.env.VITE_ELEVENLABS_AGENT_ID}
              position="top"
              />
              <button
              onClick={handleCloseAgent}
              className="ml-2 mt-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full hover:bg-black"
              >
              <span className="inline-flex items-center gap-1">
                <X className="w-3 h-3" /> Close
              </span>
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            The AI agent is designed to answer questions about my background, expertise in full stack development, 
            and the platforms I've created.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;
