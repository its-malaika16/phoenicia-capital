import "./ContactHeader.css";

export default function ContactHeader() {
  return (
    <section className="contact-header">

      {/* Overlay */}
      <div className="contact-overlay"></div>

      {/* Content */}
      <div className="contact-content">
        <span className="contact-small">GET IN TOUCH</span>

        <h1>
          Let’s Build the Future <br />
          Together
        </h1>

        <p>
          We welcome thoughtful inquiries from partners, founders, operators,
          and press. Reach the holding company directly, or connect with one
          of our ventures.
        </p>
      </div>

    </section>
  );
}