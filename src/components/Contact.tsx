import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:contact@abdulrehman.dev", color: "from-primary to-secondary" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "from-secondary to-primary" },
    { icon: Github, label: "GitHub", href: "#", color: "from-primary to-secondary" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 glow-text">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's create something amazing together
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-2 border-primary/20 animate-scale-in hover:border-primary/40 transition-all duration-300 glow-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-primary/30 focus:border-primary transition-colors duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-primary/30 focus:border-primary transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-primary/30 focus:border-primary transition-colors duration-300 min-h-[150px]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-background font-semibold py-6 rounded-xl hover:shadow-glow-strong transition-all duration-300 hover:scale-105 group"
              >
                <Send className="mr-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Social Links */}
          <div className="space-y-8 animate-slide-in-right flex flex-col justify-center">
            <div>
              <h3 className="font-orbitron font-bold text-2xl mb-6 text-foreground">
                Connect With <span className="text-primary">Me</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="block group"
                  >
                    <Card className="p-4 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="text-background" size={24} />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {social.label}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {social.href.replace('mailto:', '')}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
