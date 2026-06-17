import "./VisionSection.css";

export default function VisionSection() {
  return (
    <section className="vision-section">

      <div className="vision-container">

        {/* Small label */}
        <span className="vision-small">
          <span className="line"></span>
          OUR VISION
          <span className="line"></span>
        </span>

        {/* Heading */}
        <h2>
          A holding company defined by the{" "}
          <span className="highlight">quality</span>{" "}
          of what it owns; not the speed
          <br />
          at which it grows.
        </h2>

        {/* Paragraph */}
        <p>
          We envision Phoenicia as a permanent home for exceptional companies
          in education, energy, financial infrastructure, and workforce services; each operated with autonomy, supported with capital, and aligned
          around a shared standard of craft.
        </p>

      </div>

    </section>
  );
}
