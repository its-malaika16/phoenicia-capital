import "./ValueSection.css";

/* ✅ Shield */
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

/* ✅ Diamond */
const DiamondIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M7 4h10l4 5-9 11L3 9l4-5z" />
    <path d="M7 4l5 16" />
    <path d="M17 4l-5 16" />
    <path d="M3 9h18" />
  </svg>
);

/* ✅ Sprout */
const SproutIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 20v-8" />
    <path d="M12 12c0-3-2-5-5-5 0 3 2 5 5 5z" />
    <path d="M12 12c0-3 2-5 5-5 0 3-2 5-5 5z" />
    <path d="M7 20h10" />
  </svg>
);

/* ✅ Compass */
const CompassIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-3 7-4-4 7-3z" />
  </svg>
);

const values = [
  {
    title: "Integrity",
    desc: "We operate with transparency and principled judgment across every venture — from banking to payroll to education.",
    icon: <ShieldIcon />
  },
  {
    title: "Craft",
    desc: "Whether building AI for energy wells or platforms for schools, we obsess over the details that compound over decades.",
    icon: <DiamondIcon />
  },
  {
    title: "Patience",
    desc: "Our capital is patient. We back companies that grow deliberately and reward stewardship over speculation.",
    icon: <SproutIcon />
  },
  {
    title: "Purpose",
    desc: "Every business we own must serve real people — teachers, employers, depositors, operators — with measurable utility.",
    icon: <CompassIcon />
  }
];

export default function ValuesSection() {
  return (
    <section className="values-section">

      <div className="values-header">
        <span className="values-small">
          <span className="line subheading"></span>
          OUR VALUES
          <span className="line"></span>
        </span>

        <h2>The principles behind every venture.</h2>
      </div>

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