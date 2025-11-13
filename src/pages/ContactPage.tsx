import Header from "@/components/Header";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sa-mist/30 to-background">
      <Header />
      <div className="pt-16">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
