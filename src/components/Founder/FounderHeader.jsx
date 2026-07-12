import "./FounderHeader.css";

export default function FounderHeader() {
  return (
    <section className="founder-header">

      <div className="top-line"></div>

      <div className="founder-container">

        {/* LEFT IMAGE */}
        <div className="founder-image">
          <img src="/assets/images/Ali_Sir.jpeg" alt="Founder" />

          <div className="name-card">
            <h3>Ali A Hammoud</h3>
            <span>FOUNDER AND CEO</span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="founder-content">

          <div className="label-row">
            <span className="line"></span>
            <span className="label subheading">LEADERSHIP</span>
          </div>

          <h1>
            Our <span className="highlight yellow-text">Founder</span>
          </h1>

          <p className="subtitle">
            Founder and CEO of Phoenicia Capital Holdings
          </p>

          <div className="quote">
            <span className="quote-mark">“</span>

            <p>
              We do not build for the next quarter, but for the next
              century. Our capital is patient, our vision is enduring,
              and our commitment to craft is absolute.
            </p>
          </div>

          <div className="bottom-line"></div>

          <span className="author subheading">
            — Founder
          </span>

        </div>

      </div>
    </section>
  );
}