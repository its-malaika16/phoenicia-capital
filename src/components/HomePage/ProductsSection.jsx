import { useNavigate } from "react-router-dom";
import "./ProductsSection.css";

const products = [
  {
    id: "01",
    category: "EDUCATION RECRUITMENT",
    title: "TeachWise",
    desc: "Technology for Schools",
    color: "#dd5f74",
    logo: "/assets/logo/Teachwise_logo.png",
    url: "https://teachwise.co.uk/"
  },
  {
    id: "02",
    category: "ENERGY & TECHNOLOGY",
    title: "Petrovate",
    desc: "Smart Capital for Smarter Wells",
    color: "#134b88",
    logo: "/assets/logo/petrovate.png",
    url: "https://petrovate.co.uk/"
  },
  {
    id: "03",
    category: "BANKING & FINTECH",
    title: "Cedar Capital Bank",
    desc: "Banking Redefined",
    color: "#0f1f1f",
    logo: "/assets/logo/cedar-bank.png",
    url: "https://cedarcapitalbank.com/"
  },
  {
    id: "04",
    category: "PAYROLL & HR",
    title: "Cedar Payroll",
    desc: "Payroll Made Simple — Accurate. Compliant. On Time.",
    color: "#d4a843",
    logo: "/assets/logo/cedar-bank.png",
    url: "https://cedarpayroll.co.uk/"
  }
];

export default function ProductsSection() {
  const navigate = useNavigate();

  return (
    <section className="products-section">

      <div className="products-header">
        <div>
          <span className="small-title">PORTFOLIO</span>
          <h2>Our Products</h2>
        </div>

        <button
          className="view-all"
          onClick={() => navigate("/products")}
        >
          VIEW ALL →
        </button>
      </div>

      <div className="products-grid">
        {products.map((item) => (

          <div
            key={item.id}
            className="product-card"
            style={{ "--hover-color": item.color }}
            onClick={() => window.open(item.url, "_blank")} 
          >
            <div className="card-content">

              {/* Logo + ID */}
              <div className="card-top">
                <div className="logo-box">
                  <img src={item.logo} alt="logo" className="card-logo" />
                </div>
                <span className="card-id">{item.id}</span>
              </div>

              <span className="card-category">{item.category}</span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <span
                className="arrow"
                onClick={(e) => {
                  e.stopPropagation(); 
                  window.open(item.url, "_blank");
                }}
              >
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}