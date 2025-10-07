import { Card } from "@/components/ui/card";
import { Download, Award, Code, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const milestones = [
    { year: "Self-Practice & Projects", title: "AutoCAD 3D Modeling", icon: Award },
    { year: "Practical Projects Based", title: "Arduino & Embedded Systems", icon: Code },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 glow-text">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="animate-scale-in">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl animate-glow-pulse"></div>
              <div className="absolute inset-2 bg-muted rounded-2xl flex items-center justify-center">
                <div className="text-8xl font-orbitron font-black text-primary">AR</div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="font-orbitron font-bold text-3xl text-foreground">
              Precision Meets <span className="text-primary">Innovation</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am a passionate Automation Engineer and Designer specializing in creating cutting-edge solutions 
              that bridge the gap between complex industrial systems and elegant user experiences.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With expertise in embedded systems, circuit design, robotics, and IoT, I transform intricate 
              technical challenges into streamlined, efficient, and beautiful automation systems that drive 
              innovation and productivity.
            </p>

            {/* CV Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-gradient-to-r from-primary to-secondary text-background font-semibold px-6 py-6 rounded-xl transition-all duration-300 hover:shadow-glow-strong hover:scale-105 group"
              >
                <Download className="mr-2 group-hover:animate-bounce" size={20} />
                Download CV
              </Button>
              <Button 
                className="bg-card hover:bg-muted border-2 border-primary/30 text-foreground font-semibold px-6 py-6 rounded-xl transition-all duration-300 hover:border-primary hover:shadow-glow group"
              >
                Preview CV
              </Button>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="font-orbitron font-bold text-2xl text-center mb-12">
            Certifications & <span className="text-primary">Training</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Icon className="text-background" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground mb-1">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm">{milestone.year}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
