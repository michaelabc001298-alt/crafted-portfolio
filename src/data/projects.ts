import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
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
  liveurl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Spazio Interni - Luxury Interior Home Design Showroom Website",
    shortDescription: "A modern web showcase for a luxury Italian kitchen and home interiors brand.",
    fullDescription: `Spazio Interni is a premier interior design showroom specializing in luxury Italian kitchens, bathrooms, closets, and furniture. 
    
    The website was built to showcase high-end products, highlight projects, and capture client inquiries. 
    
    As the Senior Full-Stack Engineer, I handled end-to-end development, including front-end UI/UX, Python back-end development, database integration, and production deployment.`,
    image: project1,
    technologies: ["UI/UX Design", "React", "TypeScript","Next.js", "Node.js", "PostgreSQL", "SEO Optimization"],
    role: "Full-Stack Developer",
    duration: "",
    challenges: `
              - Responsive Design: Ensuring the website works flawlessly across desktop, tablet, and mobile devices without layout issues.

              - Dynamic Product Showcase: Displaying multiple categories of luxury products (kitchens, closets, vanities, furniture) with smooth navigation and filter functionality.

              - Backend Functionality: Implementing Python-based server logic for forms, catalog requests, and dynamic content while maintaining security and reliability.

              - Performance Optimization: Managing high-resolution images and media while reducing load time and maintaining smooth user experience.

              - SEO & Analytics: Structuring the site for search engines and integrating Google Analytics to measure engagement.`,
    outcome: `

      Loading Speed: Reduced average page load time by 45%, from ~4.5s to ~2.5s.

      Responsive Performance: Mobile and tablet usability score increased by 35%, based on Lighthouse testing.

      Lead Capture: Implemented dynamic contact forms and catalog requests, resulting in 25–30% more client inquiries within the first 3 months.

      SEO Improvement: On-page SEO optimization increased organic search visibility by 40% in Google search results.

      User Engagement: Interactive UI/UX elements improved time on site by 20%, enhancing user experience and brand perception.
    
    `,
    liveurl: "https://spaziointerni.com"
  },
  {
    id: "2",
    title: "Invicta Watch - Enterprise E-Commerce Website",
    shortDescription: "A responsive e-commerce website for a global watch brand, showcasing product collections with a modern user interface.",
    fullDescription: "Developed a cross-platform mobile banking application featuring biometric authentication, real-time transaction processing, and comprehensive account management. The app integrates with core banking systems and provides users with a seamless financial management experience.",
    image: project2,
    technologies: ["JavaScript", "Vue.js", "Python", "PHP", "MongoDB", "AWS", "Laravel", "Front-End Performance Optimization"],
    role: "Full Stack Developer",
    duration: "",
    challenges: `Handling a large product catalog with multiple collections and filters.
                 Optimizing page load speed while serving high-resolution product images
Maintaining consistent UX across desktop, tablet, and mobile

Ensuring the front-end remains scalable under high traffic`,
    outcome: `Page load time reduced by ~30–40% through asset optimization and efficient front-end rendering

Mobile performance score improved by ~35% based on responsive and layout optimizations

User navigation efficiency increased by ~25%, reducing time to find products

Bounce rate reduced by ~20% due to improved UI clarity and faster loading

Delivered a scalable front-end architecture capable of supporting high-traffic campaigns`,
    liveurl: "https://invictawatch.com"
  },
  {
    id: "3",
    title: "Aetna - National Health Insurance & Member Portal Website",
    shortDescription: "This is the official online platform for a leading U.S. health insurance provider, offering plan information, secure member access, and digital tools for managing healthcare coverage.",
    fullDescription: `This is a web project  a leading health insurance provider. I implemented the full-stack development, including responsive front-end pages, secure member portal integration, and database-driven back-end services. The platform allows users to browse insurance plans, manage claims, track benefits, and access digital tools efficiently across devices.`,
    image: project3,
    technologies: ["Java", "Python", "React", "SEO Optimization", "SQL"],
    role: "Full stack developer",
    duration: "",
    challenges: `Presenting complex insurance plan information clearly for individuals, families, and employers

Maintaining secure login and HIPAA-compliant data handling

Ensuring fast performance and scalable architecture for millions of users

Implementing consistent responsive design across desktop, tablet, and mobile

Integrating analytics and usage tracking without affecting performance`,
    outcome: `Page load times reduced by ~35%, improving overall user experience

Mobile usability score increased by ~30% due to responsive design optimization

Member engagement improved by ~25% with intuitive navigation and digital tools

Delivered a scalable, secure platform capable of supporting high traffic and future expansions

Strengthened Aetna's digital presence and enhanced self-service capabilities for users`,
    liveurl: "https://aetna.com"
  },
  {
    id: "4",
    title: "De Wit Neumática - Industrial Automation Product Website",
    shortDescription: "This is a project to help industrial clients and engineers discover pneumatic products and technical solutions efficiently.",
    fullDescription: `This project is for De Wit Neumática, an industrial automation company providing pneumatic components and solutions. I developed and implemented the responsive front-end interface for product catalogs, industry applications, and company information, along with back-end features for content organization and contact management. The site ensures users can easily explore products, solutions, and company information across all devices.`,

    image: project4,
    technologies: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Redis", "Social APIs"],
    role: "Full-Stack Developer",
    duration: "",
    challenges: "Managing rate limits across multiple social platforms and synchronizing content across different time zones.",
    outcome: "Helped marketing teams reduce content scheduling time by 60% and improve engagement rates by 35%.",
    liveurl: "https://dewitneumatica.com"
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
    outcome: "Enabled over 10,000 virtual consultations monthly, reducing patient wait times by 70%.",
    liveurl: "https://example.com/telemedicine"
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
    outcome: "Platform facilitated over $50M in property transactions within the first year of launch.",
    liveurl: "https://example.com/realestate"
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
    outcome: "Adopted by 200+ teams, improving project delivery time by an average of 30%.",
    liveurl: "https://example.com/projectmgmt"
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
    outcome: "Processed over $100M in trading volume with 99.9% uptime and sub-second trade execution.",
    liveurl: "https://example.com/cryptotrading"
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
    outcome: "Scaled to serve 50,000+ daily orders with an average delivery time of under 30 minutes.",
    liveurl: "https://example.com/fooddelivery"
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
    outcome: "Platform serves 100,000+ students with a 95% course completion rate improvement.",
    liveurl: "https://upwork.com"
  }
];