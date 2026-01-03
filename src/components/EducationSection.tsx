import { GraduationCap, Calendar } from "lucide-react";

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  description: string;
}

const educationData: Education[] = [
  {
    id: 1,
    institution: "University of California, Santa Cruz",
    degree: "Bachelor of Science (B.S.)",
    field: "Computer Science",
    duration: "08/2011 - 01/2015",
    description: "Comprehensive computer science education with focus on software engineering and algorithms. Built strong foundation in data structures, systems design, and modern development practices."
  }
];

const EducationSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Academic Background
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            My academic journey that forms the foundation of my technical expertise.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mt-6 rounded-full" />
        </div>

        {/* Education Layout - Similar to Experience */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 1;
            
            return (
              <div 
                key={edu.id}
                className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center"
              >
                {/* Left Card or Empty */}
                {isLeft ? (
                  <EducationCard education={edu} alignment="right" />
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
                  <EducationCard education={edu} alignment="left" />
                )}

                {/* Mobile View */}
                {isLeft ? null : (
                  <div className="lg:hidden col-span-full">
                    <EducationCard education={edu} alignment="left" />
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

interface EducationCardProps {
  education: Education;
  alignment: "left" | "right";
}

const EducationCard = ({ education, alignment }: EducationCardProps) => {
  return (
    <div 
      className={`bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-border/20 shadow-lg hover:shadow-xl hover:bg-card/20 transition-all duration-300 hover:-translate-y-1 ${
        alignment === "right" ? "lg:text-right" : "lg:text-left"
      }`}
    >
      <div className={`flex items-center gap-3 mb-4 ${alignment === "right" ? "lg:flex-row-reverse" : ""}`}>
        <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
          <GraduationCap className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-secondary-foreground">
            {education.degree}
          </h3>
          <p className="text-primary font-medium">{education.field}</p>
          <p className="text-muted">{education.institution}</p>
        </div>
      </div>

      <div className={`flex items-center gap-2 mb-4 text-muted ${alignment === "right" ? "lg:justify-end" : ""}`}>
        <Calendar className="w-4 h-4" />
        <span className="font-mono text-sm">{education.duration}</span>
      </div>

      <p className="text-muted leading-relaxed">{education.description}</p>
    </div>
  );
};

export default EducationSection;
