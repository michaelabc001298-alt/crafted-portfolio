import { Code2, Database, Layout, Server, Cloud, Smartphone, Brain, Wrench } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "Angular", level: 90 },
      { name: "Vue.js / Nuxt.js", level: 85 },
      { name: "Svelte", level: 80 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    name: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: ".NET / .NET Core (C#)", level: 95 },
      { name: "Python / Django / Flask", level: 92 },
      { name: "Node.js", level: 90 },
      { name: "PHP / Laravel", level: 88 },
      { name: "RESTful APIs", level: 95 },
      { name: "GraphQL", level: 85 },
      { name: "OpenAPI", level: 88 },
    ]
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "SQL Server", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "SQL", level: 95 },
      { name: "JSON", level: 90 },
    ]
  },
  {
    name: "DevOps & Cloud",
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { name: "Microsoft Azure", level: 92 },
      { name: "AWS", level: 88 },
      { name: "Azure ML", level: 82 },
      { name: "AWS SageMaker", level: 80 },
      { name: "Docker", level: 90 },
      { name: "CI/CD Pipelines", level: 92 },
      { name: "Git", level: 95 },
    ]
  },
  {
    name: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    skills: [
      { name: "Android (Kotlin, Java)", level: 88 },
      { name: "Jetpack Compose", level: 85 },
      { name: "React Native", level: 90 },
      { name: "iOS (Swift)", level: 82 },
      { name: "Flutter", level: 80 },
    ]
  },
  {
    name: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 82 },
      { name: "OpenCV", level: 80 },
      { name: "Chatbots", level: 88 },
    ]
  },
  {
    name: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "C#", level: 95 },
      { name: "Python", level: 92 },
      { name: "Java", level: 88 },
      { name: "C++", level: 75 },
      { name: "PHP", level: 85 },
    ]
  },
  {
    name: "Tools & Architecture",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "Microservices", level: 92 },
      { name: "GIS / Map Applications", level: 85 },
      { name: "UI/UX Design", level: 82 },
      { name: "Agile/Scrum", level: 90 },
      { name: "Mentoring & Leadership", level: 92 },
    ]
  },
];

const AnimatedSkillBar = ({ level }: { level: number }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 100);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Technical Expertise
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical toolkit, honed through years 
            of building production applications.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mt-6 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.name}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-5 border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        <AnimatedCounter target={skill.level} duration={1500} />
                      </span>
                    </div>
                    <AnimatedSkillBar level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
