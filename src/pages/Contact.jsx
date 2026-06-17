import ContactHeader from "../components/ContactPage/ContactHeader";
import ContactForm from "../components/ContactPage/ContactFormSection";
import VentureContact from "../components/ContactPage/VentureSection";
import Footer from "../components/Footer/Footer";
import OfficeLocation from "../components/ContactPage/OfficeLocation";

export default function Contact() {
  return (
    <>
      <ContactHeader />
      <ContactForm />
      <VentureContact />
      <OfficeLocation />
      <Footer />

      {/* Contact form section next */}
    </>
  );
}