import { Card } from "@/components/ui/card";
import { Download, Award, Code, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const milestones = [
    { year: "2024", title: "Senior Automation Engineer", icon: Award },
    { year: "2022", title: "Advanced System Design", icon: Code },
    { year: "2020", title: "Innovation & Research", icon: Lightbulb },
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

            {/* Download CV Button */}
            <Button 
              className="bg-card hover:bg-muted border-2 border-primary/30 text-foreground font-semibold px-6 py-6 rounded-xl transition-all duration-300 hover:border-primary hover:shadow-glow group"
            >
              <Download className="mr-2 group-hover:animate-bounce" size={20} />
              Download CV
            </Button>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mt-20">
          <h3 className="font-orbitron font-bold text-2xl text-center mb-12">
            Career <span className="text-primary">Journey</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-background" size={28} />
                    </div>
                    <div className="text-primary font-orbitron font-bold text-2xl">{milestone.year}</div>
                    <h4 className="font-semibold text-lg text-foreground">{milestone.title}</h4>
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
