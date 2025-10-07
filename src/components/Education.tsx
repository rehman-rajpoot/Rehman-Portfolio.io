import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      type: "current",
      title: "BS Electrical Engineering",
      specialization: "Computer Specialization",
      organization: "FAST National University of Computer & Emerging Sciences (NUCES)",
      location: "CFD Campus",
      period: "2022 - Present",
      description: "Pursuing undergraduate degree with focus on electrical engineering and computer systems integration"
    },
    {
      type: "previous",
      title: "Intermediate in Computer Science (ICS)",
      organization: "Nusrat Jahan Boys Inter College",
      location: "Chenab Nagar",
      period: "2020 - 2022",
      description: "Completed intermediate education with Grade A, building foundation in computer science and mathematics"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 glow-text">
            Educational <span className="text-primary">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {education.map((edu, index) => {
              const isCurrent = edu.type === "current";
              const Icon = isCurrent ? GraduationCap : BookOpen;
              const isLeft = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Icon Circle */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow-strong">
                      <Icon className="text-background" size={28} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                      <div className={`mb-3 inline-block px-3 py-1 rounded-full text-xs font-semibold ${isCurrent ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                        {edu.period}
                      </div>
                      <h3 className="font-orbitron font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {edu.title}
                      </h3>
                      {edu.specialization && (
                        <p className="text-accent font-medium text-sm mb-2">
                          {edu.specialization}
                        </p>
                      )}
                      <h4 className="text-accent font-semibold mb-1">
                        {edu.organization}
                      </h4>
                      <p className="text-muted-foreground text-xs mb-3">
                        {edu.location}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
