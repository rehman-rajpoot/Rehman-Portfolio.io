import { Card } from "@/components/ui/card";
import { Cpu, Zap, Code2, CircuitBoard, Bot, Wrench } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Cpu,
      title: "Industrial Automation",
      description: "PLC programming, SCADA systems, and industrial control solutions",
      level: 95,
      color: "from-primary to-secondary"
    },
    {
      icon: CircuitBoard,
      title: "Embedded Systems",
      description: "Microcontroller programming, real-time systems, and firmware development",
      level: 90,
      color: "from-secondary to-primary"
    },
    {
      icon: Code2,
      title: "Verilog & VHDL",
      description: "FPGA design, digital logic, and hardware description languages",
      level: 85,
      color: "from-primary to-secondary"
    },
    {
      icon: Zap,
      title: "Circuit Design",
      description: "PCB design, simulation, and electrical engineering solutions",
      level: 88,
      color: "from-secondary to-primary"
    },
    {
      icon: Bot,
      title: "Robotics & IoT",
      description: "Autonomous systems, sensor integration, and connected devices",
      level: 92,
      color: "from-primary to-secondary"
    },
    {
      icon: Wrench,
      title: "Engineering Design",
      description: "CAD modeling, system architecture, and innovative problem-solving",
      level: 87,
      color: "from-secondary to-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 glow-text">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Mastering the intersection of hardware, software, and innovative design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow group animate-scale-in overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="text-background" size={28} />
                    </div>
                    <span className="font-orbitron font-bold text-2xl text-primary">{skill.level}%</span>
                  </div>

                  {/* Content */}
                  <h3 className="font-orbitron font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="relative h-2 bg-background rounded-full overflow-hidden">
                    <div 
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        boxShadow: '0 0 10px hsl(var(--primary) / 0.5)'
                      }}
                    ></div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
