import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Futuristic background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="animate-fade-in-up">
          {/* Subtitle */}
          <p className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">
            Automation Engineer | Designer | Innovator
          </p>

          {/* Main Headline */}
          <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-6 glow-text leading-tight">
            Engineering the Future
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              of Design & Automation
            </span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Abdul Rehman — Transforming complex systems into elegant solutions through cutting-edge automation and innovative design
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-background font-semibold px-8 py-6 text-lg rounded-xl hover:shadow-glow-strong transition-all duration-300 hover:scale-105"
          >
            Explore My Work
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown className="text-primary w-8 h-8" />
        </div>
      </div>

      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
