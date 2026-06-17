import { useNavigate } from "react-router-dom";
import "./CTASection.css";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-container">

        {/* LEFT SIDE */}
        <div className="cta-text">
          <h2>Have a question?</h2>
          <p>
            Our team is here to help. Reach out for partnerships, media inquiries,
            or general questions.
          </p>
        </div>

        {/* RIGHT SIDE BUTTON */}
        <button
          className="cta-button"
          onClick={() => navigate("/contact")}
        >
          CONTACT US →
        </button>

      </div>
    </section>
  );
}