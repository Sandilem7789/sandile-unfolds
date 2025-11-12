import backgroundImage from "@/assets/background.png";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('agent')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Mountain landscape background" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-overlay/70 via-overlay/50 to-overlay/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center flex-1 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
          Sandile Mathenjwa
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Full Stack Developer • Digital Facilitator • Content Creator
        </p>
        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto mb-8 sm:mb-12">
          Building digital solutions and creating content from KwaZulu-Natal, South Africa
        </p>
        
        <a 
          href="#agent" 
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-strong"
        >
          Talk to My AI Agent
        </a>
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
