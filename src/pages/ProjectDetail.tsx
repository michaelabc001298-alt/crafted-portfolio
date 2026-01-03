import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const currentIndex = projects.findIndex(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Get previous and next projects for navigation
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  // Get other projects excluding current, previous, and next
  const otherProjects = projects.filter(p => 
    p.id !== project.id && p.id !== prevProject.id && p.id !== nextProject.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Image - Full width with animation */}
      <div className="relative pt-16">
        <div className="w-full bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-6 py-8">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full max-h-[600px] object-contain rounded-xl shadow-2xl animate-fade-in"
              style={{ animationDuration: '0.6s' }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <Link 
          to="/#projects"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>

        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-card-foreground mb-4">
              {project.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{project.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{project.duration}</span>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-card-foreground mb-3">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-card-foreground mb-3">
              Project Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.fullDescription}
            </p>
          </div>

          {/* Challenges */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-card-foreground mb-3">
              Key Challenges
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.challenges}
            </p>
          </div>

          {/* Outcome */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-card-foreground mb-3">
              Results & Impact
            </h2>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-foreground leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Button className="gap-2">
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </Button>
            <Button variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              View Source Code
            </Button>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Link 
            to={`/project/${prevProject.id}`}
            className="group flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6 text-primary group-hover:-translate-x-1 transition-transform" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">Previous Project</p>
              <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {prevProject.title}
              </h3>
            </div>
            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
              <img 
                src={prevProject.image} 
                alt={prevProject.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          <Link 
            to={`/project/${nextProject.id}`}
            className="group flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
              <img 
                src={nextProject.image} 
                alt={nextProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-right">
              <p className="text-sm text-muted-foreground mb-1">Next Project</p>
              <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {nextProject.title}
              </h3>
            </div>
            <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Other Projects */}
        <div className="mt-16 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Explore More Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((p) => (
              <Link 
                key={p.id}
                to={`/project/${p.id}`}
                className="group block"
              >
                <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {p.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
