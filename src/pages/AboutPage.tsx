import Header from "@/components/Header";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sa-green/10 to-background">
      <Header />
      <div className="pt-16">
        <About />
      </div>
    </div>
  );
};

export default AboutPage;
