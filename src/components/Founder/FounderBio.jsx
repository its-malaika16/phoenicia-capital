import "./FounderBio.css";

export default function FounderBio() {
  return (
    <section className="founder-bio">

      <div className="bio-grid">

        {/* LEFT IMAGE */}
        <div className="bio-image">
          <img src="/assets/images/Ali.jpg" alt="Founder" />

          <div className="bio-name">
            <h3>Ali A Hammoud</h3>
            <span className="subheading">FOUNDER & CEO</span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bio-content">
          <h2 className="bio-quote">
            "We build for the long horizon patient with capital, generous with craft."
          </h2>

          <p>
            Ali A Hammoud is the Founder and CEO of Phoenicia Capital Holdings,
            a privately held company that owns and operates a focused portfolio
            of businesses spanning education recruitment, energy technology,
            banking infrastructure, and payroll services.
          </p>

          <p>
            His philosophy is straightforward: identify industries where trust,
            technology, and operational excellence compound over time then build
            or back the companies best positioned to lead them.
          </p>

          <p>
            Under his leadership, Phoenicia has assembled four distinct ventures:
            <strong> TeachWise</strong>, a recruitment platform purpose-built for
            schools and specialist sectors; <strong>Petrovate</strong>, a U.S.–Middle
            East energy and AI well-optimization company;{" "}
            <strong>Cedar Capital Bank</strong>, a pre-integrated digital banking
            platform serving banks and fintechs; and{" "}
            <strong>Cedar Payroll</strong>, an HMRC-compliant payroll service in the UK.
          </p>

          <p>
            Across every venture, Ali insists on the same standard — clear products,
            principled operators, and a long-term ownership horizon. Phoenicia is
            not built to flip companies; it is built to steward them.
          </p>

          {/* Bottom quote */}
          <div className="bio-footer">
            "Quality compounds. Reputation compounds. Patience compounds.
            Everything else is noise."
          </div>
        </div>

      </div>

    </section>
  );
}