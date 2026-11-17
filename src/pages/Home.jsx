import Seo from "../components/Seo";
import Hero from "../components/HomePage/Hero";
import ProductsSection from "../components/HomePage/ProductsSection";
import PhilosophySection from "../components/HomePage/PhilosophySection";
import HomeNews from "../components/HomePage/HomeNews";
import CTASection from "../components/CTASection/CTASection";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Seo
        title="Phoenicia Capital Holdings | Education, Energy, Banking and Payroll"
        description="Phoenicia Capital is a privately held group that owns TeachWise, Petrovate, Cedar Capital Bank, and Cedar Payroll. Offices in Dubai, Beirut, and London."
        path="/"
      />
      <Hero />
      <ProductsSection />
      <PhilosophySection/>
      <HomeNews />
      <CTASection />
      <Footer />
    </>
  );
}

    
