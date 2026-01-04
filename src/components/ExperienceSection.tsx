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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
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
