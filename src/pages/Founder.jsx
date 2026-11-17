import Seo from "../components/Seo";
import FounderHeader from "../components/Founder/FounderHeader";
import FounderBio from "../components/Founder/FounderBio";
import CTASection from "../components/CTASection/CTASection";
import Footer from "../components/Footer/Footer";

export default function Founder() {
  return (
    <>
      <Seo
        title="Ali A Hammoud, Founder | Phoenicia Capital Holdings"
        description="Ali A Hammoud is the founder and CEO of Phoenicia Capital Holdings, the group behind TeachWise, Petrovate, Cedar Capital Bank, and Cedar Payroll."
        path="/founder"
      />
      <FounderHeader />
      <FounderBio />  
      <CTASection />
      <Footer />
    </>
  );
}