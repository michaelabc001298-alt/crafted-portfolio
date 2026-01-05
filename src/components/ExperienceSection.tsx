import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Nominal",
    role: "Senior Full Stack Engineer",
    duration: "05/2022 - Present",
    description: "Building AI-powered healthcare and finance dashboards that serve 10,000+ users. Driving 25% efficiency gains through full-stack solutions with React, .NET, and Python.",
    achievements: []
  },
  {
    id: 2,
    company: "Truckstop.com",
    role: "Senior Backend Engineer",
    duration: "01/2018 - 03/2022",
    description: "Architected scalable APIs and microservices supporting 50,000+ daily users. Reduced infrastructure costs by $5K/month through Azure cloud optimization.",
    achievements: []
  },
  {
    id: 3,
    company: "Newport Beach",
    role: "Full Stack Engineer",
    duration: "03/2015 - 12/2017",
    description: "Developed real-time trading platform features with .NET Core and React. Built WebSocket-based data streams handling high-volume financial transactions.",
    achievements: []
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* 3D Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chart-2/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chart-3/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-xl rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-32 left-16 w-24 h-24 border border-chart-2/20 rounded-full animate-bounce" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-primary/5 rounded-lg rotate-12 animate-pulse" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), 
                           linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/40 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-chart-2/40 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-chart-3/40 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Career Journey
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional path through the tech industry, building products 
            that make a difference.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mt-6 rounded-full" />
        </div>

        {/* Zigzag/Jacques Layout */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div 
                key={exp.id}
                className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center"
              >
                {/* Left Card or Empty */}
                {isLeft ? (
                  <ExperienceCard experience={exp} alignment="right" />
                ) : (
                  <div className="hidden lg:block" />
                )}

                {/* Center Divider */}
                <div className="hidden lg:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30" />
                  <div className="w-0.5 h-full min-h-[200px] bg-gradient-to-b from-primary via-primary/30 to-primary/10" />
                </div>

                {/* Right Card or Empty */}
                {isLeft ? (
                  <div className="hidden lg:block" />
                ) : (
                  <ExperienceCard experience={exp} alignment="left" />
                )}

                {/* Mobile View */}
                {isLeft ? null : (
                  <div className="lg:hidden col-span-full">
                    <ExperienceCard experience={exp} alignment="left" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: Experience;
  alignment: "left" | "right";
}

const ExperienceCard = ({ experience, alignment }: ExperienceCardProps) => {
  return (
    <div 
      className={`bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-xl hover:bg-card transition-all duration-300 hover:-translate-y-1 ${
        alignment === "right" ? "lg:text-right" : "lg:text-left"
      }`}
    >
      <div className={`flex items-center gap-3 mb-4 ${alignment === "right" ? "lg:flex-row-reverse" : ""}`}>
        <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
          <Briefcase className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            {experience.role}
          </h3>
          <p className="text-primary font-medium">{experience.company}</p>
        </div>
      </div>

      <div className={`flex items-center gap-2 mb-4 text-muted-foreground ${alignment === "right" ? "lg:justify-end" : ""}`}>
        <Calendar className="w-4 h-4" />
        <span className="font-mono text-sm">{experience.duration}</span>
      </div>

      <p className="text-foreground leading-relaxed">{experience.description}</p>
    </div>
  );
};

export default ExperienceSection;
