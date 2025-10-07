import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary/20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="font-orbitron font-bold text-sm text-background">AR</span>
            </div>
            <span className="font-orbitron font-bold text-foreground">Abdul Rehman</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>© 2024 Abdul Rehman. Crafted with</span>
            <Heart className="text-primary w-4 h-4 fill-current animate-pulse" />
            <span>& Innovation</span>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
