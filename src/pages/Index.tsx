import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AgentSection from "@/components/AgentSection";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AgentSection />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
