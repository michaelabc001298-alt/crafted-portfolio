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
    company: "TechCorp Global",
    role: "Senior Full-Stack Developer",
    duration: "2022 - Present",
    description: "Leading development of enterprise-scale applications serving millions of users worldwide.",
    achievements: [
      "Architected microservices infrastructure reducing latency by 60%",
      "Mentored team of 8 junior developers",
      "Implemented CI/CD pipelines improving deployment frequency by 400%"
    ]
  },
  {
    id: 2,
    company: "StartupVenture Inc",
    role: "Full-Stack Developer",
    duration: "2019 - 2022",
    description: "Core member of founding engineering team building fintech solutions from ground up.",
    achievements: [
      "Built real-time trading platform handling $50M+ daily volume",
      "Designed database schema supporting 10M+ transactions",
      "Led integration with major banking APIs"
    ]
  },
  {
    id: 3,
    company: "Digital Agency Pro",
    role: "Frontend Developer",
    duration: "2017 - 2019",
    description: "Developed responsive web applications for diverse client portfolio across industries.",
    achievements: [
      "Delivered 20+ client projects on time and budget",
      "Introduced React adoption, improving development speed by 50%",
      "Created reusable component library used across all projects"
    ]
  },
  {
    id: 4,
    company: "CodeStart Labs",
    role: "Junior Developer",
    duration: "2016 - 2017",
    description: "Started career building web applications and learning industry best practices.",
    achievements: [
      "Contributed to 5 successful product launches",
      "Mastered JavaScript, React, and Node.js ecosystem",
      "Received 'Rising Star' recognition for exceptional performance"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Career Journey
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
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
      className={`bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-border/20 shadow-lg hover:shadow-xl hover:bg-card/20 transition-all duration-300 hover:-translate-y-1 ${
        alignment === "right" ? "lg:text-right" : "lg:text-left"
      }`}
    >
      <div className={`flex items-center gap-3 mb-4 ${alignment === "right" ? "lg:flex-row-reverse" : ""}`}>
        <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
          <Briefcase className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-secondary-foreground">
            {experience.role}
          </h3>
          <p className="text-primary font-medium">{experience.company}</p>
        </div>
      </div>

      <div className={`flex items-center gap-2 mb-4 text-muted ${alignment === "right" ? "lg:justify-end" : ""}`}>
        <Calendar className="w-4 h-4" />
        <span className="font-mono text-sm">{experience.duration}</span>
      </div>

      <p className="text-muted mb-4">{experience.description}</p>

      <ul className={`space-y-2 ${alignment === "right" ? "lg:text-right" : ""}`}>
        {experience.achievements.map((achievement, i) => (
          <li 
            key={i}
            className={`flex items-start gap-2 text-sm text-secondary-foreground ${alignment === "right" ? "lg:flex-row-reverse" : ""}`}
          >
            <span className="text-primary mt-1.5 shrink-0">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;
