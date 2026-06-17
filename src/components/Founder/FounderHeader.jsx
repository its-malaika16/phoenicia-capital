import "./FounderHeader.css";

export default function FounderHeader() {
  return (
    <section className="founder-header">

      {/* Top decorative line */}
      <div className="top-line"></div>

      <div className="founder-container">

        {/* LEFT SIDE */}
        <div className="founder-left">

          <div className="label-row">
            <span className="line"></span>
            <span className="label">LEADERSHIP</span>
          </div>

          <h1>
            Our <span className="highlight">Founder</span>
          </h1>

          <p className="subtitle">
            Founder and CEO of Phoenicia Capital Holdings
          </p>

          {/* Quote */}
          <div className="quote">
            <span className="quote-mark">“</span>

            <p>
              We do not build for the next quarter, but for the next
              century. Our capital is patient, our vision is enduring,
              and our commitment to craft is absolute.
            </p>
          </div>

          {/* Bottom line */}
          <div className="bottom-line"></div>

          <span className="author">— Founder</span>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="founder-right">
          <img src="/assets/images/Ali.jpg" alt="Founder" />

          <div className="name-card">
            <h3>Ali A Hammoud</h3>
            <span>FOUNDER AND CEO</span>
          </div>
        </div>

      </div>

    </section>
  );
}