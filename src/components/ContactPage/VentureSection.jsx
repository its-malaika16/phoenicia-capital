import "./VentureSection.css";

const ventures = [
  {
    category: "EDUCATION RECRUITMENT",
    title: "TeachWise",
    subtitle: "Technology for Schools",
    logo: "/assets/logo/Teachwise_logo.png",
    url: "https://teachwise.co.uk/"
  },
  {
    category: "ENERGY & TECHNOLOGY",
    title: "Petrovate",
    subtitle: "Smart Capital for Smarter Wells",
    logo: "/assets/logo/petrovate.png",
    url: "https://petrovate.co.uk/"
  },
  {
    category: "BANKING & FINTECH",
    title: "Cedar Capital Bank",
    subtitle: "Banking Redefined",
    logo: "/assets/logo/cedar-bank.png",
    url: "https://cedarcapitalbank.com/"
  },
  {
    category: "PAYROLL & HR",
    title: "Cedar Payroll",
    subtitle: "Payroll Made Simple — Accurate. Compliant. On Time.",
    logo: "/assets/logo/cedar-bank.png",
    url: "https://cedarpayroll.co.uk/"
  }
];

export default function VenturesSection() {
  return (
    <section className="ventures-section">

      <div className="ventures-header">
        <span className="line"> </span>
        <span>OUR VENTURES</span>
        <span className="line"> </span>
        <h2>Prefer to reach a venture directly?</h2>
      </div>

      <div className="ventures-grid">
        {ventures.map((item, index) => (
          <div
            key={index}
            className="venture-card"
            onClick={() => window.open(item.url, "_blank")} /* ✅ click anywhere */
          >

            <div className="venture-logo">
              <img src={item.logo} alt={item.title} />
            </div>

            <span className="venture-category">{item.category}</span>

            <h3>{item.title}</h3>

            <p>{item.subtitle}</p>

            {/* ✅ button link (also works) */}
            <span
              className="visit-link"
              onClick={(e) => {
                e.stopPropagation(); // ✅ prevent double trigger
                window.open(item.url, "_blank");
              }}
            >
              VISIT SITE ↗
            </span>

          </div>
        ))}
      </div>

    </section>
  );
}