import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  githubLink?: string;
  liveLink?: string;
}

export const ProjectCard = ({ title, description, techStack, githubLink, liveLink }: ProjectCardProps) => {
  return (
    <Card className="bg-gradient-card border-border card-hover group">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Tech Stack:</h4>
            <p className="text-sm text-muted-foreground">{techStack}</p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="btn-ghost flex items-center gap-2"
              disabled={!githubLink}
              onClick={() => githubLink && window.open(githubLink, '_blank')}
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="btn-ghost flex items-center gap-2"
              disabled={!liveLink}
              onClick={() => liveLink && window.open(liveLink, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};