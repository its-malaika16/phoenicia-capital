import "./ContactHeader.css";

export default function ContactHeader() {
  return (
    <section className="contact-header">
      <div className="contact-inner">
        <div className="contact-copy">
          <span className="contact-kicker">Get in Touch</span>
          <h1>
            <span className="contact-line">
              <span className="is-navy">Let’s </span>
              <span className="is-gold">Build the</span>
            </span>
            <br />
            <span className="is-navy">Future</span>
            <br />
            <span className="is-gold">Together.</span>
          </h1>
          <p>
            We welcome thoughtful inquiries from partners, founders, operators,
            and press. Reach the holding company directly, or connect with one
            of our ventures.
          </p>
        </div>
      </div>

      <div className="contact-rings" aria-hidden="true">
        <span className="contact-ring contact-ring-sand"></span>
        <span className="contact-ring contact-ring-gold"></span>
        <span className="contact-ring contact-ring-navy"></span>
      </div>
    </section>
  );
}
