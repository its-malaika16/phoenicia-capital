import "./ValueSection.css";

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3.2l7 3v5.2c0 4.6-3.2 7.8-7 9.4-3.8-1.6-7-4.8-7-9.4V6.2l7-3z" />
    <path d="M9 12.1l2 2 4-4" />
  </svg>
);

const DiamondIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 4.5h10l4 5.2-9 10.3L3 9.7l4-5.2z" />
    <path d="M3 9.7h18" />
    <path d="M8.2 9.7L12 4.5l3.8 5.2" />
    <path d="M8.2 9.7L12 20" />
    <path d="M15.8 9.7L12 20" />
  </svg>
);

const SproutIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 20.5V11" />
    <path d="M12 12.2C12 8.6 9.6 6.2 6 6.2c0 3.6 2.4 6 6 6z" />
    <path d="M12 12.2c0-3.6 2.4-6 6-6 0 3.6-2.4 6-6 6z" />
  </svg>
);

const TargetIcon = () => (
  <img
    src="/assets/icons/purpose-objective.png?v=2"
    alt=""
    width="49"
    height="49"
    draggable="false"
  />
);

const values = [
  {
    title: "Integrity",
    desc: "We operate with transparency and principled judgment across every venture from banking to payroll to education.",
    icon: <ShieldIcon />,
  },
  {
    title: "Craft",
    desc: "Whether building AI for energy wells or platforms for schools, we obsess over the details that compound over decades.",
    icon: <DiamondIcon />,
  },
  {
    title: "Patience",
    desc: "Our capital is patient. We back companies that grow deliberately and reward stewardship over speculation.",
    icon: <SproutIcon />,
  },
  {
    title: "Purpose",
    desc: "Every business we own must serve real people; teachers, employers, depositors, operators with measurable utility.",
    icon: <TargetIcon />,
  },
];

export default function ValuesSection() {
  return (
    <section className="values-section">
      <div className="values-inner">
        <header className="values-header">
          <span className="values-kicker">Our Value</span>
          <h2>The principles behind every venture.</h2>
        </header>

        <div className="values-grid">
          {values.map((item) => (
            <article key={item.title} className="value-card">
              <div className="value-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
