import { useNavigate } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-frame">
      <div className="hero-copy">
        <h1 className="hero-title">
          <span className="hero-line">Building Stronger</span>
          <span className="hero-line">Futures</span>
          <span className="hero-line hero-accent">Across Industries</span>
        </h1>

        <span className="hero-rule" aria-hidden="true" />

        <p className="hero-text">
          Phoenicia Capital Holdings is a diversified global group driving
          innovation in finance, education, energy, and business services
          through trusted brands and forward-thinking solutions.
        </p>

        <div className="hero-actions">
          <button
            className="hero-btn hero-btn-primary"
            onClick={() => navigate("/contact")}
          >
            Get Started
          </button>
          <button
            className="hero-btn hero-btn-ghost"
            onClick={() => navigate("/story")}
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <img
          className="hero-logo"
          src="/assets/logo/phoenicia-word.png?v=4"
          alt="Phoenicia Capital Holdings"
          width="3516"
          height="816"
          draggable="false"
        />

        <div className="hero-art">
          <img
            className="hero-globe"
            src="/assets/images/hero-globe.png?v=3"
            alt="Globe with a rising bar chart"
            width="2236"
            height="1688"
            draggable="false"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
