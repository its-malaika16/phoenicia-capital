import Seo from "../components/Seo";
import StoryHeader from "../components/StoryPage/StoryHeader";
import PurposeSection from "../components/StoryPage/PurposeSection";
import VisionSection from "../components/StoryPage/VisionSection";
import CTASection from "../components/CTASection/CTASection";
import Footer from "../components/Footer/Footer";
import ValueSection from "../components/StoryPage/ValueSection";


export default function Story() {
  return (
    <>
      <Seo
        title="Our Story | Phoenicia Capital Holdings"
        description="The story of Phoenicia Capital Holdings, a holding company built to own and operate TeachWise, Petrovate, Cedar Capital Bank, and Cedar Payroll for the long term."
        path="/story"
      />
      <StoryHeader />
      <PurposeSection />
      <VisionSection />
      <ValueSection />
      <CTASection />
      <Footer />
      {/* Rest of story content */}
    </>
  );
}