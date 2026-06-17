import "./PurposeSection.css";

export default function PurposeSection() {
  return (
    <section className="purpose-section">

      <div className="purpose-grid">

        {/* LEFT CONTENT */}
        <div className="purpose-content">
          <span className="purpose-small">OUR PURPOSE</span>

          <h2>
            Building the <br />
            institutions of the next <br />
            century.
          </h2>

          <p>
            Phoenicia Capital Holdings exists to create, acquire, and steward
            businesses that matter — companies that improve how people learn,
            transact, get paid, and produce energy.
          </p>

          <p>
            Through <strong>TeachWise</strong>, we connect schools with the
            people who shape young minds. Through <strong>Petrovate</strong>, we
            apply intelligent technology to the wells that power industry.
            Through <strong>Cedar Capital Bank</strong>, we give modern banks
            and fintechs a single platform to move money globally. And through
            <strong> Cedar Payroll</strong>, we make sure employees across the
            UK are paid accurately and on time.
          </p>

          <p>
            Four ventures, one conviction: the best businesses are built
            patiently, owned carefully, and held for generations.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="purpose-image">
          <img src="/assets/images/global-network.jpg" alt="Purpose" />
        </div>

      </div>

    </section>
  );
}
``