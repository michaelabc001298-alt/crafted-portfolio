import heroBg from "@/assets/hero-bg.jpg";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12 items-center min-h-[70vh]">
          {/* Name Section - 1/3 */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider uppercase animate-fade-in">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-foreground leading-tight">
                Alex
                <span className="block text-primary">Chen</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto lg:mx-0 rounded-full" />
              <p className="text-xl text-muted font-medium">
                Full-Stack Developer
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/10 backdrop-blur-sm border border-border/20 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/10 backdrop-blur-sm border border-border/20 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:alex@example.com"
                className="p-3 rounded-full bg-card/10 backdrop-blur-sm border border-border/20 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Introduction Section - 2/3 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card/10 backdrop-blur-md rounded-2xl p-8 border border-border/20 shadow-xl">
              <h2 className="text-2xl font-semibold text-secondary-foreground mb-4">
                Crafting Digital Experiences
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                I'm a passionate full-stack developer with 8+ years of experience building 
                scalable web applications and leading development teams. I specialize in 
                React, TypeScript, and Node.js, creating solutions that combine elegant 
                design with robust functionality.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-6">
                My journey in software development has taken me through startups and 
                enterprise environments, where I've had the privilege of working on 
                projects that impact millions of users. I believe in writing clean, 
                maintainable code and staying current with emerging technologies.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, 
                mentoring aspiring developers, or exploring the latest in AI and machine 
                learning. I'm always open to discussing new opportunities and collaborations.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToProjects}
                className="group"
                size="lg"
              >
                View My Work
                <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-card/10 backdrop-blur-sm border-border/20 text-secondary-foreground hover:bg-card/20"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted" />
      </div>
    </section>
  );
};

export default Hero;
