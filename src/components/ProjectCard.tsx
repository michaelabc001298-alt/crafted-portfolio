import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link 
      to={`/project/${project.id}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
        {/* Large Project Image */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Project Number */}
          <div className="absolute top-4 left-4 font-mono text-sm text-primary bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full border border-border/20">
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Hover Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-3 py-1 text-xs font-medium bg-muted/90 text-muted-foreground rounded-full">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.shortDescription}
          </p>
          
          <div className="mt-4 flex items-center text-primary font-medium">
            <span className="group-hover:mr-2 transition-all">View Project</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
