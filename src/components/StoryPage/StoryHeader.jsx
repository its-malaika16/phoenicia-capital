import "./StoryHeader.css";

export default function StoryHeader() {
  return (
    <section className="story-header">
      <div className="story-grid">
        <div className="story-copy">
          <span className="story-kicker">Our Story</span>
          <h1>
            <span className="story-line">
              <span className="is-navy">Creating </span>
              <span className="is-gold">Businesses</span>
            </span>
            <br />
            <span className="is-navy">That</span>
            <br />
            <span className="is-gold">Shape Tomorrow</span>
          </h1>
          <p>
            Phoenicia Capital Holdings owns and operates a focused portfolio of
            ventures across education, energy, banking, and payroll united by a
            single philosophy of patient, principled ownership.
          </p>
        </div>
        <div className="story-art" aria-hidden="true">
          <img
            src="/assets/images/story-mountain.png?v=2"
            alt=""
            width="1120"
            height="743"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
