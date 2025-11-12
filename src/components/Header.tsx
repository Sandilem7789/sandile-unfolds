import { Linkedin, Youtube } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-overlay/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#projects" 
            className="text-sm sm:text-base font-semibold text-white/90 hover:text-accent transition-colors"
          >
            my work
          </a>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-sm sm:text-base font-semibold text-white/90">sandile</span>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/sandile-mathenjwa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-accent hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/@sandilemathenjwa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-accent hover:scale-110 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
