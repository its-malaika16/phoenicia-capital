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
      "Temporary & permanent placement",
      "Multi-sector reach",
      "Fast turnaround hiring",
    ],
    image: "/assets/images/teachwise-card.png?v=2",
    url: "https://teachwise.co.uk",
  },
  {
    id: "02",
    category: "ENERGY & TECHNOLOGY",
    title: "Petrovate",
    subtitle: "Smart capital for smarter wells",
    description:
      "Petrovate invests in and deploys advanced well technologies paired with AI-driven optimization systems.",
    features: [
      "AI well optimization",
      "Energy investment solutions",
      "Production efficiency increase",
      "Global field deployment",
    ],
    image: "/assets/images/petrovate-card.png?v=3",
    url: "https://petrovate.co.uk",
  },
  {
    id: "03",
    category: "BANKING & FINTECH",
    title: "Cedar Capital Bank",
    subtitle: "Banking redefined",
    description:
      "Cedar Capital Bank delivers modern financial infrastructure with global multi-currency capabilities.",
    features: [
      "Multi-currency wallet",
      "Global payments",
      "Secure banking",
      "Business solutions",
    ],
    image: "/assets/images/cedar-bank-card.png?v=1",
    url: "https://cedarcapitalbank.com",
  },
  {
    id: "04",
    category: "PAYROLL & HR",
    title: "Cedar Payroll",
    subtitle: "Payroll made simple",
    description:
      "Cedar Payroll simplifies workforce management with compliant and automated payroll systems.",
    features: [
      "Automated payroll",
      "Compliance tools",
      "Employee portal",
      "Real-time reporting",
    ],
    image: "/assets/images/cedar-payroll-card.png?v=1",
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
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="productlist-content">
            <span className="product-top">
              {product.id} — {product.category}
            </span>

            <h2>{product.title}</h2>
            <span className="product-sub">{product.subtitle}</span>

            <p>{product.description}</p>

            <ul>
              {product.features.map((f, i) => (
                <li key={i}>
                  <span className="product-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}