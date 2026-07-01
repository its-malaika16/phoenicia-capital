import "./Products.css";

const products = [
  {
    id: "01",
    category: "EDUCATION RECRUITMENT",
    title: "TeachWise",
    subtitle: "Technology for Schools",
    description:
      "TeachWise streamlines recruitment for schools with a purpose-built platform. The team delivers solutions for education, hospitality, and executive hiring.",
    features: [
      "Recruitment platform & mobile app",
      "Temporary & permanent placements",
      "Multi-sector reach",
      "Fast turnaround hiring",
    ],
    image: "/assets/images/teachwise.jpg",
    url: "https://teachwise.co.uk",
  },
  {
    id: "02",
    category: "ENERGY & TECHNOLOGY",
    title: "Petrovate",
    subtitle: "Smart Capital for Smarter Wells",
    description:
      "Petrovate invests in and deploys advanced well technologies paired with AI-driven optimization systems.",
    features: [
      "AI well optimization",
      "Energy investment solutions",
      "Production efficiency increase",
      "Global field deployment",
    ],
    image: "/assets/images/petrovate.jpg",
    url: "https://petrovate.co.uk",
  },
  {
    id: "03",
    category: "BANKING & FINTECH",
    title: "Cedar Capital Bank",
    subtitle: "Banking Redefined",
    description:
      "Cedar Capital Bank delivers modern financial infrastructure with global multi-currency capabilities.",
    features: [
      "Multi-currency wallets",
      "Global payments",
      "Secure banking",
      "Business solutions",
    ],
    image: "/assets/images/cedar-bank.jpg",
    url: "https://cedarcapitalbank.com",
  },
  {
    id: "04",
    category: "PAYROLL & HR",
    title: "Cedar Payroll",
    subtitle: "Payroll Made Simple",
    description:
      "Cedar Payroll simplifies workforce management with compliant and automated payroll systems.",
    features: [
      "Automated payroll",
      "Compliance tools",
      "Employee portal",
      "Real-time reporting",
    ],
    image: "/assets/images/cedar-payroll.jpg",
    url: "https://cedarpayroll.co.uk",
  },
];

export default function ProductsPageSection() {
  return (
    <section className="products-page">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`product-row ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          {/* IMAGE */}
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>

          {/* CONTENT */}
          <div className="productlist-content">
            <span className="product-top">
              {product.id} — {product.category}
            </span>

            <h2>{product.title}</h2>
            <span className="product-sub">{product.subtitle}</span>

            <p>{product.description}</p>

            <ul>
              {product.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            {/* ✅ FIXED BUTTON */}
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-btn"
            >
              VISIT {product.title.toUpperCase()} →
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}