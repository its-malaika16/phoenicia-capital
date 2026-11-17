import "./BlogHero.css";

export default function NewsHero() {
  return (
    <section className="news-hero">
      <div className="news-hero-inner">
        <div className="news-hero-copy">
          <span className="news-label">Newsroom</span>
          <h1>
            <span className="news-line">
              <span className="is-navy">Latest From</span>
            </span>
            <br />
            <span className="news-line">
              <span className="is-navy">Our </span>
              <span className="is-gold">Companies.</span>
            </span>
          </h1>
          <p>
            Product launches, milestones, and updates from across the
            Phoenicia Capital Holdings portfolio.
          </p>
        </div>
      </div>

      <div className="news-rings" aria-hidden="true">
        <span className="news-ring news-ring-navy"></span>
        <span className="news-ring news-ring-gold"></span>
        <span className="news-ring news-ring-core"></span>
      </div>
    </section>
  );
}
