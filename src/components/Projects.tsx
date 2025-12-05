import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Furniverse",
      description:
        "An e-commerce platform for furniture sales, featuring product browsing, shopping cart functionality, and secure checkout. Built with modern web technologies for a seamless shopping experience.",
      githubUrl: "https://github.com/Sandilem7789/furniverse-soul-cyber",
      liveUrl: "https://furniverse-soul-cyber.onrender.com",
      image: "/images/furniverse-preview.png", // replace with actual image path
    },
     {
      title: "GardenLink",
      description:
        "GardenLink was developed during the #FNBAppOfTheYear Hackathon as a climate resilience solution. It is a soulful, mobile-first platform that connects local vendors with nearby gardens to source fresh produce. Designed with intentional UX and scalable architecture, it empowers rural commerce through proximity-based ordering and immersive design.",
      githubUrl: "https://github.com/Sandilem7789/FNBAOTYHackathon",
      liveUrl: "",
      image: "/images/gardenlink-preview.png", // replace with actual image path
    },
    {
      title: "sandile-unfolds",
      description:
        "A portfolio website with an embedded AI agent and automation integrations. Showcases web projects, collects visitor analytics via n8n workflows, and includes a recruiter-focused chatbot. Future plans expand into a SaaS for graduate networking.",
      githubUrl: "https://github.com/Sandilem7789/sandile-unfolds",
      liveUrl: "https://mathenjwasandile.netlify.app", // replace with your live portfolio URL
      image: "/images/sandile-unfolds-preview.png", // replace with actual screenshot of your portfolio
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of the platforms and applications I've built, showcasing full stack development
            and user-centered design.
          </p>
        </div>

        {/* Responsive Grid - Mobile First with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`animate-fade-in-up stagger-${index + 1}`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
