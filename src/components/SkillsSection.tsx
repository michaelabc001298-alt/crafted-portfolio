import { Code2, Database, Layout, Server, GitBranch, Cloud, Smartphone, Shield, Brain, Wrench } from "lucide-react";

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
      { name: "React / React Native", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "Vue.js / Nuxt", level: 78 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 / CSS3 / SASS", level: 95 },
      { name: "Redux / Zustand", level: 88 },
      { name: "Framer Motion", level: 82 },
    ]
  },
  {
    name: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Node.js / Express", level: 92 },
      { name: "Python / Django / FastAPI", level: 85 },
      { name: "Java / Spring Boot", level: 75 },
      { name: "GraphQL / Apollo", level: 85 },
      { name: "REST API Design", level: 95 },
      { name: "Microservices", level: 82 },
      { name: "WebSocket / Socket.io", level: 85 },
      { name: "gRPC", level: 70 },
    ]
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "Redis", level: 85 },
      { name: "MySQL / MariaDB", level: 85 },
      { name: "Prisma / Drizzle", level: 88 },
      { name: "Elasticsearch", level: 75 },
      { name: "Firebase / Supabase", level: 85 },
      { name: "DynamoDB", level: 72 },
    ]
  },
  {
    name: "DevOps & Cloud",
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { name: "Docker / Docker Compose", level: 90 },
      { name: "AWS (EC2, S3, Lambda)", level: 85 },
      { name: "CI/CD (GitHub Actions)", level: 92 },
      { name: "Kubernetes", level: 75 },
      { name: "Terraform / Pulumi", level: 70 },
      { name: "Vercel / Netlify", level: 92 },
      { name: "Nginx / Apache", level: 82 },
      { name: "Linux / Bash", level: 88 },
    ]
  },
  {
    name: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    skills: [
      { name: "React Native", level: 88 },
      { name: "Expo", level: 85 },
      { name: "Flutter / Dart", level: 65 },
      { name: "iOS (Swift basics)", level: 55 },
      { name: "Android (Kotlin basics)", level: 55 },
      { name: "PWA Development", level: 90 },
    ]
  },
  {
    name: "Testing & QA",
    icon: <Shield className="w-6 h-6" />,
    skills: [
      { name: "Jest / Vitest", level: 90 },
      { name: "React Testing Library", level: 88 },
      { name: "Cypress / Playwright", level: 85 },
      { name: "Unit Testing", level: 92 },
      { name: "Integration Testing", level: 85 },
      { name: "E2E Testing", level: 82 },
    ]
  },
  {
    name: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "JavaScript / ES6+", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 90 },
      { name: "Java", level: 75 },
      { name: "Go", level: 65 },
      { name: "Rust", level: 55 },
      { name: "C / C++", level: 60 },
    ]
  },
  {
    name: "AI & Data",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      { name: "OpenAI / GPT APIs", level: 88 },
      { name: "LangChain", level: 75 },
      { name: "TensorFlow / PyTorch", level: 60 },
      { name: "Data Analysis (Pandas)", level: 72 },
      { name: "Machine Learning basics", level: 65 },
      { name: "RAG Applications", level: 78 },
    ]
  },
  {
    name: "Tools & Workflow",
    icon: <GitBranch className="w-6 h-6" />,
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Figma / Design Tools", level: 78 },
      { name: "Jira / Linear", level: 88 },
      { name: "Notion / Confluence", level: 85 },
      { name: "Postman / Insomnia", level: 90 },
    ]
  },
  {
    name: "Architecture",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "System Design", level: 85 },
      { name: "Design Patterns", level: 88 },
      { name: "Clean Architecture", level: 85 },
      { name: "Domain-Driven Design", level: 75 },
      { name: "Event-Driven Architecture", level: 78 },
      { name: "API Gateway Patterns", level: 82 },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.name}
              className="bg-card rounded-xl p-5 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
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
                      <span className="text-xs font-mono text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
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
