import Header from "@/components/Header";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sa-gold/10 to-background">
      <Header />
      <div className="pt-16">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
