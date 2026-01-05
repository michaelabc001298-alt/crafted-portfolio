import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, ExternalLink, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const currentIndex = projects.findIndex(p => p.id === id);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [id]);

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

  // Format text with proper line breaks - splits by newlines and "- " for bullet points
  const formatDescription = (text: string) => {
    // First split by double newlines for paragraphs
    const lines = text.split(/\n+/).filter(line => line.trim().length > 0);
    return lines;
  };

  // Format challenges/outcomes with bullet point support
  const formatWithBullets = (text: string) => {
    const lines = text.split(/\n+/).filter(line => line.trim().length > 0);
    return lines.map(line => {
      const isBullet = line.trim().startsWith('-') || line.trim().startsWith('•');
      return { text: line.trim(), isBullet };
    });
  };

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Hero Image Section - Full width with modern background */}
      <div className="relative pt-16">
        <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Modern gradient background with geometric patterns */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/10" />
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
          </div>
          
          {/* Image container with modern frame */}
          <div className="relative z-10 container mx-auto px-6 py-12">
            <div className="relative max-w-5xl mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-chart-2/20 blur-2xl scale-105 rounded-3xl" />
              
              {/* Image frame */}
              <div className="relative bg-card/50 backdrop-blur-sm p-3 rounded-2xl border border-border/50 shadow-2xl">
                <div className="overflow-hidden rounded-xl bg-muted/30">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full max-h-[550px] object-contain transition-all duration-700 ${
                      imageLoaded 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95'
                    }`}
                  />
                </div>
              </div>
            </div>
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

        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border shadow-xl">
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

          {/* Description - Multi-line */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-card-foreground mb-3">
              Project Overview
            </h2>
            <div className="space-y-4">
              {formatDescription(project.fullDescription).map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Challenges - Multi-line with bullet support */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-card-foreground mb-3">
              Key Challenges
            </h2>
            <div className="space-y-3">
              {formatWithBullets(project.challenges).map((item, index) => (
                <p 
                  key={index} 
                  className={`text-muted-foreground leading-relaxed ${item.isBullet ? 'pl-4' : ''}`}
                >
                  {item.text}
                </p>
              ))}
            </div>
          </div>

          {/* Outcome - Multi-line with bullet support */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-card-foreground mb-3">
              Results & Impact
            </h2>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="space-y-3">
                {formatWithBullets(project.outcome).map((item, index) => (
                  <p 
                    key={index} 
                    className={`text-foreground leading-relaxed ${item.isBullet ? 'pl-4' : ''}`}
                  >
                    {item.text}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Button asChild className="gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </a>
            </Button>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Link 
            to={`/project/${prevProject.id}`}
            className="group flex items-center gap-4 p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
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
            className="group flex items-center gap-4 p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
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
                <div className="bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
