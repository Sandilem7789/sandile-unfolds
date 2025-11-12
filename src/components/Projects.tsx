import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Furniverse",
      description: "An e-commerce platform for furniture sales, featuring product browsing, shopping cart functionality, and secure checkout. Built with modern web technologies for a seamless shopping experience.",
      githubUrl: "https://github.com/sandilemathenjwa/furniverse",
      liveUrl: "https://furniverse-demo.com"
    },
    {
      title: "GardenLink",
      description: "A community platform connecting gardeners and farmers with buyers. Features include marketplace listings, direct messaging, and resource sharing to promote sustainable agriculture.",
      githubUrl: "https://github.com/sandilemathenjwa/gardenlink",
      liveUrl: "https://gardenlink-demo.com"
    },
    {
      title: "Hustle Economy",
      description: "A digital marketplace designed for freelancers and gig workers. Includes job listings, skill-based matching, payment processing, and portfolio showcasing to empower the hustle economy.",
      githubUrl: "https://github.com/sandilemathenjwa/hustle-economy",
      liveUrl: "https://hustle-economy-demo.com"
    }
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

        {/* Responsive Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
