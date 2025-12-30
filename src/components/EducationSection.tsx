import { GraduationCap, Award, BookOpen } from "lucide-react";

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  description: string;
  achievements: string[];
  type: "degree" | "certification" | "course";
}

const educationData: Education[] = [
  {
    id: 1,
    institution: "Stanford University",
    degree: "Master of Science",
    field: "Computer Science",
    duration: "2014 - 2016",
    description: "Specialized in artificial intelligence and machine learning, with focus on neural networks and natural language processing.",
    achievements: [
      "Graduated with Distinction (GPA: 3.9/4.0)",
      "Published research paper on ML optimization",
      "Teaching Assistant for Algorithms course"
    ],
    type: "degree"
  },
  {
    id: 2,
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science",
    field: "Computer Science & Mathematics",
    duration: "2010 - 2014",
    description: "Double major combining strong theoretical foundations in computer science with advanced mathematics.",
    achievements: [
      "Dean's List all semesters",
      "Led student hackathon organization",
      "Undergraduate research in cryptography"
    ],
    type: "degree"
  },
  {
    id: 3,
    institution: "AWS",
    degree: "Solutions Architect Professional",
    field: "Cloud Architecture",
    duration: "2023",
    description: "Advanced certification demonstrating expertise in designing distributed systems on AWS.",
    achievements: [
      "Scored in top 5% of candidates",
      "Validated expertise in AWS services",
      "Specialization in serverless architectures"
    ],
    type: "certification"
  },
  {
    id: 4,
    institution: "Google",
    degree: "Professional Cloud Developer",
    field: "Cloud Development",
    duration: "2022",
    description: "Comprehensive certification covering Google Cloud Platform development and deployment.",
    achievements: [
      "Full-stack cloud development expertise",
      "Container orchestration with GKE",
      "CI/CD pipeline implementation"
    ],
    type: "certification"
  }
];

const EducationSection = () => {
  const getIcon = (type: Education["type"]) => {
    switch (type) {
      case "degree":
        return <GraduationCap className="w-6 h-6" />;
      case "certification":
        return <Award className="w-6 h-6" />;
      case "course":
        return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Academic Background
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-card-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional certifications that form the 
            foundation of my technical expertise.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mt-6 rounded-full" />
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu) => (
            <div 
              key={edu.id}
              className="bg-background rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg shrink-0 ${
                  edu.type === "degree" 
                    ? "bg-primary/10 text-primary" 
                    : "bg-chart-2/10 text-chart-2"
                }`}>
                  {getIcon(edu.type)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium">{edu.field}</p>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
              </div>

              {/* Duration */}
              <div className="inline-block px-3 py-1 bg-muted/30 rounded-full mb-4">
                <span className="font-mono text-sm text-muted-foreground">
                  {edu.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4">{edu.description}</p>

              {/* Achievements */}
              <ul className="space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <li 
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
