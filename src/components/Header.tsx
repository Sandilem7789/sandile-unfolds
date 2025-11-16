import { Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Custom TikTok Icon (inline SVG)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 276 276"
    fill="currentColor"
    className={className}
  >
    <path d="M168 0h32c0 44 36 80 80 80v32c-31 0-61-10-84-28v92c0 44-36 80-80 80s-80-36-80-80 36-80 80-80h16v32h-16c-26 0-48 22-48 48s22 48 48 48 48-22 48-48V0z"/>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/30 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center gap-6">
              <a 
                href="/" 
                className="text-base font-semibold text-foreground hover:text-accent transition-colors"
              >
                home
              </a>
              <a 
                href="/projects" 
                className="text-base font-semibold text-foreground hover:text-accent transition-colors"
              >
                projects
              </a>
              <a 
                href="/about" 
                className="text-base font-semibold text-foreground hover:text-accent transition-colors"
              >
                about
              </a>
              <a 
                href="/contact" 
                className="text-base font-semibold text-foreground hover:text-accent transition-colors"
              >
                contact
              </a>
            </nav>
          )}

          {/* Mobile Burger Menu */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
          
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-sm sm:text-base font-semibold text-foreground">sandile</span>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/sandile-mathenjwa-869140144/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@mesh_audio_popeyesout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
                aria-label="TikTok Profile"
              >
                <TikTokIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobile && isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/30 shadow-strong animate-fade-in">
            <div className="flex flex-col px-4 py-4 gap-3">
              <a 
                href="/" 
                className="text-base font-semibold text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                home
              </a>
              <a 
                href="/projects" 
                className="text-base font-semibold text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                projects
              </a>
              <a 
                href="/about" 
                className="text-base font-semibold text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                about
              </a>
              <a 
                href="/contact" 
                className="text-base font-semibold text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
