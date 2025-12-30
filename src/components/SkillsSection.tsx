import { Code2, Database, Layout, Server, GitBranch, Cloud } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
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
      { name: "React", level: 95, category: "Frontend" },
      { name: "TypeScript", level: 90, category: "Frontend" },
      { name: "Next.js", level: 88, category: "Frontend" },
      { name: "Tailwind CSS", level: 92, category: "Frontend" },
      { name: "Vue.js", level: 75, category: "Frontend" },
    ]
  },
  {
    name: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Node.js", level: 90, category: "Backend" },
      { name: "Python", level: 82, category: "Backend" },
      { name: "Express", level: 88, category: "Backend" },
      { name: "FastAPI", level: 78, category: "Backend" },
      { name: "GraphQL", level: 80, category: "Backend" },
    ]
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "PostgreSQL", level: 88, category: "Database" },
      { name: "MongoDB", level: 85, category: "Database" },
      { name: "Redis", level: 80, category: "Database" },
      { name: "Prisma", level: 85, category: "Database" },
      { name: "MySQL", level: 78, category: "Database" },
    ]
  },
  {
    name: "DevOps",
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { name: "Docker", level: 85, category: "DevOps" },
      { name: "AWS", level: 82, category: "DevOps" },
      { name: "CI/CD", level: 88, category: "DevOps" },
      { name: "Kubernetes", level: 70, category: "DevOps" },
      { name: "Terraform", level: 65, category: "DevOps" },
    ]
  },
  {
    name: "Tools",
    icon: <GitBranch className="w-6 h-6" />,
    skills: [
      { name: "Git", level: 95, category: "Tools" },
      { name: "VS Code", level: 92, category: "Tools" },
      { name: "Figma", level: 75, category: "Tools" },
      { name: "Jira", level: 85, category: "Tools" },
      { name: "Linux", level: 80, category: "Tools" },
    ]
  },
  {
    name: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "JavaScript", level: 95, category: "Languages" },
      { name: "TypeScript", level: 92, category: "Languages" },
      { name: "Python", level: 82, category: "Languages" },
      { name: "SQL", level: 88, category: "Languages" },
      { name: "Rust", level: 55, category: "Languages" },
    ]
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 bg-background">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.name}
              className="bg-card rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm font-mono text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
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
