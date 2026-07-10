import "./StoryHeader.css";

export default function StoryHeader() {
  return (
    <section className="story-header">

      {/* Overlay */}
      <div className="story-overlay"></div>

      {/* Content */}
      <div className="story-content">
        <span className="story-small subheading">OUR STORY</span>

        <h1>
          Creating Businesses That <br />
          Shape Tomorrow
        </h1>

        <p>
          Phoenicia Capital Holdings owns and operates a focused portfolio of
          ventures across education, energy, banking, and payroll united by a
          single philosophy of patient, principled ownership.
        </p>
      </div>

    </section>
  );
}