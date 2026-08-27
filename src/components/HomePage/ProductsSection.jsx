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
    website: "https://teachwise.co.uk",
    brochure: "/assets/brouchure/TeachWiseBrochure.pdf",
  },
  {
    id: "02",
    category: "ENERGY & TECHNOLOGY",
    title: "Petrovate",
    desc: "Smart Capital for Smarter Wells",
    color: "#134b88",
    logo: "/assets/logo/petrovate.png",
    website: "https://petrovate.co.uk",
    brochure: "/assets/brouchure/PetrovateBrochure.pdf",
  },
  {
    id: "03",
    category: "BANKING & FINTECH",
    title: "Cedar Capital Bank",
    desc: "Banking Redefined",
    color: "#17375e",
    logo: "/assets/logo/cedarbanklogo.ico",
    website: "https://cedarcapitalbank.com",
    brochure: "/assets/brouchure/CedarCapitalBank.pdf",
  },
  {
    id: "04",
    category: "PAYROLL & HR",
    title: "Cedar Payroll",
    desc: "Payroll Made Simple. Accurate. Compliant. On Time.",
    color: "#d32027",
    logo: "/assets/logo/cedarpayroll.svg",
    website: "https://cedarpayroll.co.uk",
    brochure: "/assets/brouchure/CedarPayrollBrochure.pdf",
  },
];

export default function ProductsSection() {
  const navigate = useNavigate();

  const downloadBrochure = (brochure) => {
    const link = document.createElement("a");
    link.href = brochure;
    link.download = brochure.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="products-section">
      <div className="products-header">
        <div>
          <span className="small-title">PORTFOLIO</span>
          <h2>Our Products</h2>
        </div>

        <button
          className="view-all-products"
          onClick={() => navigate("/products")}
        >
          
        </button>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <div
            key={item.id}
            className="product-card"
            style={{ "--hover-color": item.color }}
          >
            <div className="card-content">
              <div className="card-top">
                <div className="logo-box">
                  <img
                    src={item.logo}
                    altame="card-id"
                    className = 'card-logo'
                    />
                </div>
              </div>

              <span className="card-category">
                {item.category}
              </span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <div className="card-actions">
                <button
                  className="action-btn brochure-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    downloadBrochure(item.brochure);
                  }}
                >
                  Brochure
                </button>

                <button
                  className="action-btn website-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(item.website, "_blank");
                  }}
                >
                  Website
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}