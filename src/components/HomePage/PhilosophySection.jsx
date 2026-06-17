import { useNavigate } from "react-router-dom";
import "./PhilosophySection.css";

export default function PhilosophySection() {
    const navigate = useNavigate();

    return (
        <section className="philosophy-section">
            <div className="philosophy-grid">
                <div className="philosophy-header">
                    <div>
                        <span className="small-title">Our PHILOSOPHY</span>
                        <h2> One group. Four industries. Built to last.</h2>
                    </div>
                </div>

                <div className="philosophy-content">
                    <p>
                        Phoenicia Capital Holdings is a diversified group operating across finance, education, energy, and business services — home to Cedar Capital Bank, TeachWise, Petrovate, and Cedar Payroll.
                        We build and steward companies designed to outlast cycles: trusted brands, disciplined operations, and forward-thinking solutions that create long-term value for the clients and communities we serve.
                    </p>

                    <span className="small-title" onClick={() => navigate("/about")}>
                        READ OUR STORY →
                    </span>
                </div>
            </div>
        </section>
    );
}