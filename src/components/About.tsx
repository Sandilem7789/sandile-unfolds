import { Code2, Presentation, Video } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building robust web applications with modern frameworks and technologies"
    },
    {
      icon: Presentation,
      title: "Digital Facilitation",
      description: "Empowering communities through technology education and digital literacy"
    },
    {
      icon: Video,
      title: "Content Creation",
      description: "Sharing knowledge and insights through engaging educational content"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-foreground mb-4 leading-relaxed">
              I'm a passionate full stack developer based in KwaZulu-Natal, South Africa, dedicated to 
              creating innovative digital solutions that make a difference. With expertise spanning both 
              frontend and backend development, I build scalable applications that solve real-world problems.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I'm committed to digital empowerment through facilitation and content creation, 
              helping others discover the transformative power of technology.
            </p>
          </div>
        </div>

        {/* Skills Grid with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={skill.title}
                className={`bg-card rounded-xl p-6 sm:p-8 shadow-soft hover:shadow-strong transition-all duration-300 border border-border hover:border-primary/30 text-center group animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
