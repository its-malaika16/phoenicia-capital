import Seo from "../components/Seo";
import ContactHeader from "../components/ContactPage/ContactHeader";
import ContactForm from "../components/ContactPage/ContactFormSection";
import VentureContact from "../components/ContactPage/VentureSection";
import Footer from "../components/Footer/Footer";
import OfficeLocation from "../components/ContactPage/OfficeLocation";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Phoenicia Capital Holdings"
        description="Contact Phoenicia Capital in Dubai, Beirut, or London. Email support@phoeniciacapital.co.uk or call +971 50 429 4194."
        path="/contact"
      />
      <ContactHeader />
      <ContactForm />
      <VentureContact />
      <OfficeLocation />
      <Footer />

      {/* Contact form section next */}
    </>
  );
}