import StoryHeader from "../components/StoryPage/StoryHeader";
import PurposeSection from "../components/StoryPage/PurposeSection";
import VisionSection from "../components/StoryPage/VisionSection";
import CTASection from "../components/CTASection/CTASection";
import Footer from "../components/Footer/Footer";
import ValueSection from "../components/StoryPage/ValueSection";


export default function Story() {
  return (
    <>
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