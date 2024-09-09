import Hero from "../home_component/HeroSection";
import Features from "../home_component/FeatureCards";
import Services from "../home_component/ServiceSectino";
import News from "../home_component/NewsSection";
import Footer from "../home_component/FooterSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <News />
      <Footer />
    </div>
  );
}
