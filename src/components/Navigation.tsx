import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="text-primary">A</span>C
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("education")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Education
            </button>
            <a 
              href="mailto:alex@example.com"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("experience")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("skills")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("education")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Education
              </button>
              <a 
                href="mailto:alex@example.com"
                className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
