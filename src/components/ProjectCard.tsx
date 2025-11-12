import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, image, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <div className="group bg-card rounded-xl shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden border border-border hover:border-primary/30">
      {/* Project Image */}
      {image && (
        <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={`${title} preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-overlay/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      )}
      
      {/* Project Info */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 line-clamp-3">
          {description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 min-w-[120px]"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button
              size="sm"
              asChild
              className="flex-1 min-w-[120px] bg-primary hover:bg-primary/90"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Site
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
