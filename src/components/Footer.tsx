import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-secondary-foreground mb-2">
              <span className="text-primary">A</span>lex Chen
            </p>
            <p className="text-sm text-muted">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/10 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/10 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/10 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="p-3 rounded-full bg-card/10 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
