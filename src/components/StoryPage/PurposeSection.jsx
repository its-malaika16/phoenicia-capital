import "./PurposeSection.css";

export default function PurposeSection() {
  return (
    <section className="purpose-section">
      <div className="purpose-grid">
        <div className="purpose-content">
          <span className="purpose-kicker">Our Purpose</span>
          <h2>
            <span className="is-navy">Building The</span>
            <br />
            <span className="is-gold">Institutions Of The</span>
            <br />
            <span className="is-navy">Next Century.</span>
          </h2>

          <p>
            Phoenicia Capital Holdings exists to create, acquire, and steward
            businesses that matter companies that improve how people learn,
            transact, get paid, and produce energy.
          </p>

          <p>
            Through <strong>TeachWise</strong>, we connect schools with the
            people who shape young minds. Through <strong>Petrovate</strong>, we
            apply intelligent technology to the wells that power industry.
            Through <strong>Cedar Capital Bank</strong>, we give modern banks
            and fintechs a single platform to move money globally. And through{" "}
            <strong>Cedar Payroll</strong>, we make sure employees across the UK
            are paid accurately and on time.
          </p>

          <p className="purpose-close">
            <strong>Four ventures, one conviction:</strong> the best businesses
            are built patiently, owned carefully, and held for generations.
          </p>
        </div>

        <div className="purpose-art" aria-hidden="true">
          <img
            src="/assets/images/purpose-target.png"
            alt=""
            width="740"
            height="731"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
