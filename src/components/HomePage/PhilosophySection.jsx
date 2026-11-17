import { useNavigate } from "react-router-dom";
import "./PhilosophySection.css";

export default function PhilosophySection() {
  const navigate = useNavigate();

  return (
    <section className="philosophy-section">
      <div className="philosophy-grid">
        <div className="philosophy-copy">
          <span className="philosophy-kicker">Our Philosophy</span>
          <h2>
            One group. Four industries.
            <br />
            Built to last.
          </h2>
          <p>
            Phoenicia Capital Holdings is a diversified group operating across
            finance, education, energy, and business services home to Cedar
            Capital Bank, TeachWise, Petrovate, and Cedar Payroll. We build and
            steward companies designed to outlast cycles: trusted brands,
            disciplined operations, and forward-thinking solutions that create
            long-term value for the clients and communities we serve.
          </p>
          <button
            type="button"
            className="philosophy-link"
            onClick={() => navigate("/story")}
          >
            Read our story &gt;
          </button>
        </div>

        <div className="philosophy-art" aria-hidden="true">
          <img
            src="/assets/images/philosophy-icons.png"
            alt=""
            width="948"
            height="902"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
