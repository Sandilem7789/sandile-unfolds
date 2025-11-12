import { MessageSquare } from "lucide-react";

const AgentSection = () => {
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
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Curious about my professional journey, technical skills, or the projects I've built? 
            You can speak directly with my AI agent to learn more. Simply click the call icon below, 
            accept the terms, and start a conversation.
          </p>
        </div>

        {/* AI Agent Widget Container */}
        <div className="backdrop-blur-sm bg-card/80 rounded-2xl shadow-strong p-4 sm:p-6 md:p-8 border border-border">
          <div id="agent-widget" className="min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
            {/* ElevenLabs widget will be injected here via script */}
            <div className="text-center text-muted-foreground">
              <MessageSquare className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-primary/50" />
              <p className="text-sm sm:text-base">Agent widget will load here</p>
              <p className="text-xs sm:text-sm mt-2">Click the microphone icon to start talking</p>
            </div>
          </div>
        </div>

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
