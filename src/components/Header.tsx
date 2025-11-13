import { Linkedin, Youtube } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <nav className="flex items-center gap-4 sm:gap-6">
            <a 
              href="/" 
              className="text-sm sm:text-base font-semibold text-foreground hover:text-accent transition-colors"
            >
              home
            </a>
            <a 
              href="/projects" 
              className="text-sm sm:text-base font-semibold text-foreground hover:text-accent transition-colors"
            >
              projects
            </a>
            <a 
              href="/about" 
              className="text-sm sm:text-base font-semibold text-foreground hover:text-accent transition-colors"
            >
              about
            </a>
            <a 
              href="/contact" 
              className="text-sm sm:text-base font-semibold text-foreground hover:text-accent transition-colors"
            >
              contact
            </a>
          </nav>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-sm sm:text-base font-semibold text-foreground">sandile</span>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/sandile-mathenjwa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://youtube.com/@sandilemathenjwa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
