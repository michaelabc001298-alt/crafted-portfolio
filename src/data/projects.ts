import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";
import project9 from "@/assets/project-9.jpg";
import project10 from "@/assets/project-10.jpg";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  role: string;
  duration: string;
  challenges: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Analytics Platform",
    shortDescription: "A comprehensive dashboard for tracking sales, inventory, and customer behavior analytics.",
    fullDescription: `This project represents one of the most comprehensive analytics solutions I've built in my career. The platform was designed to handle the complex needs of a rapidly growing e-commerce business that was struggling to make sense of their massive data volumes.

The core of the system is a real-time data processing pipeline that ingests millions of events daily from various sources including web traffic, mobile apps, point-of-sale systems, and third-party marketplaces. We implemented a sophisticated ETL process that cleanses, transforms, and aggregates this data into actionable insights.

On the frontend, I led the development of an intuitive dashboard interface using React and TypeScript. The dashboard features over 50 interactive visualizations built with D3.js, including custom charts for funnel analysis, cohort retention, and geographic heat maps. Users can create custom reports by dragging and dropping metrics and dimensions, with results rendered in real-time.

The backend architecture was designed for horizontal scalability, utilizing Node.js microservices orchestrated through Kubernetes. We implemented intelligent caching strategies with Redis that reduced average query times by 85%. The PostgreSQL database was optimized with carefully designed indexes, materialized views, and partitioning strategies to handle the ever-growing data volume.

One of the most impactful features was the anomaly detection system that uses statistical models to identify unusual patterns in sales, inventory, or customer behavior. This proactive alerting has helped the client prevent stockouts and identify fraud attempts before they became major issues.`,
    image: project1,
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "D3.js", "Redis"],
    role: "Lead Full-Stack Developer",
    duration: "8 months",
    challenges: `The primary challenge was optimizing database queries for large datasets while maintaining sub-second response times for the dashboard.

We faced significant hurdles in implementing real-time data streaming without causing performance degradation during peak traffic hours. The initial architecture couldn't handle the concurrent load of data ingestion and reporting queries.

Another major challenge was designing a flexible schema that could accommodate the client's evolving business requirements without requiring major refactoring. We solved this through a combination of JSON columns for dynamic attributes and a robust migration strategy.

Memory management for the D3.js visualizations required careful optimization to prevent browser crashes when rendering charts with hundreds of thousands of data points. We implemented virtual scrolling and progressive loading techniques to address this.`,
    outcome: `The platform exceeded all initial success metrics and transformed how the client operates their business.

Increased operational efficiency by 40% through automated reporting and real-time alerts, eliminating the need for manual data compilation that previously took a dedicated analyst team several days each week.

Reduced report generation time from hours to seconds, enabling leadership to make data-driven decisions in real-time rather than relying on weekly or monthly summaries.

The anomaly detection system identified a fraud pattern that was costing the business over $50,000 monthly, paying for the entire project within the first quarter.

Customer retention improved by 15% after the client used cohort analysis insights to optimize their email marketing campaigns and loyalty programs.`
  },
  {
    id: "2",
    title: "Mobile Banking Application",
    shortDescription: "Secure mobile banking solution with biometric authentication and real-time transactions.",
    fullDescription: "Developed a cross-platform mobile banking application featuring biometric authentication, real-time transaction processing, and comprehensive account management. The app integrates with core banking systems and provides users with a seamless financial management experience.",
    image: project2,
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "AWS", "Plaid API"],
    role: "Senior Mobile Developer",
    duration: "12 months",
    challenges: "Implementing bank-grade security protocols while maintaining an intuitive user experience and ensuring PCI DSS compliance.",
    outcome: "Achieved 4.8-star rating on app stores with over 500,000 downloads in the first quarter."
  },
  {
    id: "3",
    title: "AI-Powered Analytics Dashboard",
    shortDescription: "Machine learning platform for predictive analytics and business intelligence.",
    fullDescription: "Created an intelligent analytics platform that leverages machine learning algorithms to provide predictive insights. Features include neural network visualizations, automated anomaly detection, and customizable KPI tracking with natural language query capabilities.",
    image: project3,
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Docker"],
    role: "ML Engineer & Frontend Developer",
    duration: "10 months",
    challenges: "Training models on diverse datasets while maintaining prediction accuracy and building intuitive visualizations for complex ML outputs.",
    outcome: "Enabled clients to predict market trends with 85% accuracy, leading to a 25% increase in revenue."
  },
  {
    id: "4",
    title: "Social Media Management Suite",
    shortDescription: "All-in-one platform for content scheduling, analytics, and social media automation.",
    fullDescription: "Designed and built a comprehensive social media management platform featuring content calendar, automated scheduling, cross-platform analytics, and AI-powered content suggestions. Integrated with major social networks and provided team collaboration features.",
    image: project4,
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "Social APIs"],
    role: "Full-Stack Developer",
    duration: "6 months",
    challenges: "Managing rate limits across multiple social platforms and synchronizing content across different time zones.",
    outcome: "Helped marketing teams reduce content scheduling time by 60% and improve engagement rates by 35%."
  },
  {
    id: "5",
    title: "Telemedicine Platform",
    shortDescription: "HIPAA-compliant healthcare application with video consultations and patient management.",
    fullDescription: "Built a comprehensive telemedicine solution enabling secure video consultations between patients and healthcare providers. Features include appointment scheduling, electronic health records integration, prescription management, and secure messaging with end-to-end encryption.",
    image: project5,
    technologies: ["React", "Node.js", "WebRTC", "PostgreSQL", "AWS", "Twilio"],
    role: "Lead Backend Developer",
    duration: "14 months",
    challenges: "Ensuring HIPAA compliance while maintaining system performance and implementing reliable video streaming across varying network conditions.",
    outcome: "Enabled over 10,000 virtual consultations monthly, reducing patient wait times by 70%."
  },
  {
    id: "6",
    title: "Real Estate Marketplace",
    shortDescription: "Property listing platform with interactive maps, virtual tours, and mortgage calculator.",
    fullDescription: "Developed a modern real estate platform featuring advanced property search with map integration, 3D virtual tours, mortgage calculators, and agent matching. Implemented recommendation algorithms to match buyers with suitable properties based on preferences and behavior.",
    image: project6,
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Mapbox", "Three.js"],
    role: "Full-Stack Developer",
    duration: "9 months",
    challenges: "Implementing smooth 3D virtual tours and optimizing map performance with thousands of property markers.",
    outcome: "Platform facilitated over $50M in property transactions within the first year of launch."
  },
  {
    id: "7",
    title: "Project Management Tool",
    shortDescription: "Collaborative workspace with Kanban boards, time tracking, and team management.",
    fullDescription: "Created an intuitive project management application featuring customizable Kanban boards, Gantt charts, time tracking, resource allocation, and team collaboration tools. Integrated with popular development tools and provided real-time updates across all connected clients.",
    image: project7,
    technologies: ["Vue.js", "TypeScript", "Node.js", "PostgreSQL", "Socket.io", "Docker"],
    role: "Senior Frontend Developer",
    duration: "7 months",
    challenges: "Building real-time collaborative features with conflict resolution and ensuring smooth drag-and-drop interactions.",
    outcome: "Adopted by 200+ teams, improving project delivery time by an average of 30%."
  },
  {
    id: "8",
    title: "Cryptocurrency Trading Platform",
    shortDescription: "Real-time crypto trading dashboard with portfolio tracking and market analysis.",
    fullDescription: "Built a professional-grade cryptocurrency trading platform featuring real-time price charts, portfolio management, automated trading bots, and comprehensive market analysis tools. Implemented WebSocket connections for live price feeds and order book updates.",
    image: project8,
    technologies: ["React", "TypeScript", "Python", "Redis", "PostgreSQL", "WebSocket"],
    role: "Full-Stack Developer",
    duration: "11 months",
    challenges: "Handling high-frequency real-time data updates and ensuring trade execution reliability during market volatility.",
    outcome: "Processed over $100M in trading volume with 99.9% uptime and sub-second trade execution."
  },
  {
    id: "9",
    title: "Food Delivery Application",
    shortDescription: "On-demand food ordering platform with real-time tracking and restaurant management.",
    fullDescription: "Developed a comprehensive food delivery ecosystem including customer-facing ordering app, restaurant management dashboard, and driver dispatch system. Features include real-time order tracking, smart delivery routing, and integrated payment processing.",
    image: project9,
    technologies: ["React Native", "Node.js", "MongoDB", "Redis", "Google Maps API", "Stripe"],
    role: "Mobile Development Lead",
    duration: "10 months",
    challenges: "Optimizing delivery routes in real-time and maintaining order synchronization across multiple apps.",
    outcome: "Scaled to serve 50,000+ daily orders with an average delivery time of under 30 minutes."
  },
  {
    id: "10",
    title: "Learning Management System",
    shortDescription: "Educational platform with course creation, progress tracking, and interactive assessments.",
    fullDescription: "Created a comprehensive LMS platform for educational institutions and corporate training. Features include course builder with multimedia support, interactive quizzes, progress tracking, certification generation, and analytics dashboard for instructors.",
    image: project10,
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS S3", "WebRTC"],
    role: "Full-Stack Developer",
    duration: "8 months",
    challenges: "Building an accessible platform that supports diverse content types and ensuring smooth video streaming for remote learners.",
    outcome: "Platform serves 100,000+ students with a 95% course completion rate improvement."
  }
];
