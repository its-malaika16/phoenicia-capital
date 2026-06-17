import "./ValueSection.css";

const values = [
  {
    title: "Integrity",
    desc: "We operate with transparency and principled judgment across every venture — from banking to payroll to education.",
    icon: "🛡️"
  },
  {
    title: "Craft",
    desc: "Whether building AI for energy wells or platforms for schools, we obsess over the details that compound over decades.",
    icon: "💎"
  },
  {
    title: "Patience",
    desc: "Our capital is patient. We back companies that grow deliberately and reward stewardship over speculation.",
    icon: "🌱"
  },
  {
    title: "Purpose",
    desc: "Every business we own must serve real people — teachers, employers, depositors, operators — with measurable utility.",
    icon: "🧭"
  }
];

export default function ValuesSection() {
  return (
    <section className="values-section">

      {/* Heading */}
      <div className="values-header">
        <span className="values-small">
          <span className="line"></span>
          OUR VALUES
          <span className="line"></span>
        </span>

        <h2>The principles behind every venture.</h2>
      </div>

      {/* Cards */}
      <div className="values-grid">
        {values.map((item, i) => (
          <div key={i} className="value-card">

            <div className="value-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}
