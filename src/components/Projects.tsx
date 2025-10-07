import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Smart Industrial Controller",
      description: "Advanced PLC-based automation system for manufacturing with real-time monitoring and predictive maintenance capabilities",
      tags: ["Automation", "PLC", "IoT", "SCADA"],
      gradient: "from-primary to-secondary"
    },
    {
      title: "FPGA Signal Processor",
      description: "High-performance digital signal processing system using Verilog for real-time audio and sensor data analysis",
      tags: ["FPGA", "Verilog", "DSP", "Embedded"],
      gradient: "from-secondary to-primary"
    },
    {
      title: "Autonomous Robot Platform",
      description: "Multi-sensor robotic system with AI-powered navigation, obstacle avoidance, and task automation",
      tags: ["Robotics", "AI Systems", "Computer Vision"],
      gradient: "from-primary to-secondary"
    },
    {
      title: "IoT Energy Monitor",
      description: "Smart energy monitoring system with cloud integration, providing real-time analytics and consumption optimization",
      tags: ["IoT", "Cloud", "Analytics", "Embedded"],
      gradient: "from-secondary to-primary"
    },
    {
      title: "Custom PCB Design Suite",
      description: "Multi-layer PCB designs for industrial applications including motor controllers and sensor arrays",
      tags: ["PCB Design", "Circuit Design", "Hardware"],
      gradient: "from-primary to-secondary"
    },
    {
      title: "Trading Algorithm System",
      description: "MQL5-based automated trading system with advanced risk management and market analysis algorithms",
      tags: ["MQL5", "Algorithms", "Finance", "Automation"],
      gradient: "from-secondary to-primary"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 glow-text">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Innovative solutions that push the boundaries of automation and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden animate-scale-in hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `linear-gradient(45deg, transparent 25%, hsl(var(--background)) 25%, hsl(var(--background)) 50%, transparent 50%, transparent 75%, hsl(var(--background)) 75%, hsl(var(--background)))`,
                  backgroundSize: '20px 20px'
                }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border-4 border-background/30 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-background font-orbitron font-black text-3xl">
                      {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background">
                    <Github size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background">
                    <ExternalLink size={20} />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-orbitron font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary hover:text-background transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
