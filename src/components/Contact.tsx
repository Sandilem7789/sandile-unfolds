import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Reach out via email or WhatsApp.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-strong transition-all hover:scale-105"
          >
            <a href="mailto:sandile@example.com" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="text-base sm:text-lg">Email Me</span>
            </a>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-soft hover:shadow-strong transition-all hover:scale-105"
          >
            <a 
              href="https://wa.me/27638364185" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-base sm:text-lg">WhatsApp</span>
            </a>
          </Button>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm sm:text-base text-muted-foreground">
            © {new Date().getFullYear()} Sandile Mathenjwa. Built with passion in KwaZulu-Natal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
