import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20" />
      
      {/* Particle Animation */}
      <ParticleBackground />

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
                Darren
                <span className="block text-primary">Flores</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto lg:mx-0 rounded-full" />
              <p className="text-xl text-muted font-medium">
                Senior Full Stack Engineer
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a 
                href="https://github.com/JobStar-success" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/10 backdrop-blur-sm border border-border/20 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/darren-flores-897067293" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/10 backdrop-blur-sm border border-border/20 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:DarrenFlores275@hotmail.com"
                className="p-3 rounded-full bg-card/10 backdrop-blur-sm border border-border/20 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Introduction Section - 2/3 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card/10 backdrop-blur-md rounded-2xl p-8 border border-border/20 shadow-xl">
              <p className="text-lg text-muted leading-relaxed mb-6">
                Senior Full Stack Developer with 10+ years of experience building high-performance 
                web and mobile applications in healthcare, finance, travel, and restaurant industries. 
                Experienced in frontend and backend development, AI integration, cloud architectures, 
                and mobile solutions.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Proven ability to lead teams, optimize complex systems, and deliver measurable impact 
                on performance and scalability. I specialize in React.js, Next.js, Angular, .NET Core, 
                Python, and cloud platforms like Azure and AWS.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                Based in Los Angeles County, California, I'm passionate about mentoring engineers, 
                building AI-powered solutions, and creating seamless user experiences that serve 
                thousands of users.
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
              <a 
                href="/Darren-Flores-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-card/10 backdrop-blur-sm border-border/20 text-secondary-foreground hover:bg-card/20"
                >
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-8 h-8 text-muted" />
      </div>
    </section>
  );
};

export default Hero;
