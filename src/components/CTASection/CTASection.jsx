import { Link } from "react-router-dom";
import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-text">
          <h2>Have a question?</h2>
          <p>
            Our team is here to help. Reach out for partnerships, media
            inquiries, or general questions.
          </p>
        </div>

        <Link to="/contact" className="cta-button">
          Contact
        </Link>
      </div>
    </section>
  );
}
