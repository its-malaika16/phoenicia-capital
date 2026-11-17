import { useEffect, useRef, useState } from "react";
import "./ProductsSection.css";

const products = [
  {
    id: "teachwise",
    category: "Education Recruitment",
    title: "TeachWise",
    desc: "Technology for schools.",
    logo: "/assets/logo/portfolio-teachwise.png?v=1",
    website: "https://teachwise.co.uk",
    brochure: "/assets/brouchure/TeachWiseBrochure.pdf",
  },
  {
    id: "petrovate",
    category: "Energy & Technology",
    title: "Petrovate",
    desc: "Smart capital for smarter wells.",
    logo: "/assets/logo/portfolio-petrovate.png?v=1",
    website: "https://petrovate.co.uk",
    brochure: "/assets/brouchure/PetrovateBrochure.pdf",
  },
  {
    id: "cedar-bank",
    category: "Banking & Fintech",
    title: "Cedar Capital Bank",
    desc: "Banking redefined.",
    logo: "/assets/logo/portfolio-cedar-bank.png?v=6",
    website: "https://cedarcapitalbank.com",
    brochure: "/assets/brouchure/CedarCapitalBank.pdf",
  },
  {
    id: "cedar-payroll",
    category: "Payroll & HR",
    title: "Cedar Payroll",
    desc: "Payroll made simple.",
    logo: "/assets/logo/portfolio-cedar-payroll.png?v=1",
    website: "https://cedarpayroll.co.uk",
    brochure: "/assets/brouchure/CedarPayrollBrochure.pdf",
  },
];

export default function ProductsSection() {
  const sectionRef = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    let done = false;
    const reveal = () => {
      if (done) return;
      const rect = node.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * 0.86 && rect.bottom > 80;
      if (!visible) return;
      done = true;
      setShown(true);
      window.removeEventListener("scroll", reveal);
    };

    reveal();
    window.addEventListener("scroll", reveal, { passive: true });
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const downloadBrochure = (brochure) => {
    const link = document.createElement("a");
    link.href = brochure;
    link.download = brochure.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className={shown ? "portfolio is-in" : "portfolio"}
      ref={sectionRef}
      aria-labelledby="portfolio-heading"
    >
      <div className="portfolio-inner">
        <div className="portfolio-intro">
          <div className="portfolio-copy">
            <span className="portfolio-kicker">Our Portfolio</span>
            <h2 className="portfolio-title" id="portfolio-heading">
              <span className="portfolio-line">
                <span className="is-navy">Innovative </span>
                <span className="is-gold">Solutions.</span>
              </span>
              <span className="portfolio-line">
                <span className="is-navy">Diverse </span>
                <span className="is-gold">Industries.</span>
              </span>
              <span className="portfolio-line">
                <span className="is-navy">One Vision for</span>
              </span>
              <span className="portfolio-line">
                <span className="is-gold">Growth.</span>
              </span>
            </h2>
          </div>

          <div className="portfolio-art" aria-hidden="true">
            <img
              className="portfolio-cards-img"
              src="/assets/images/portfolio-cards.png?v=4"
              alt=""
              width="1135"
              height="852"
              draggable="false"
            />
          </div>
        </div>

        <div className="portfolio-grid">
          {products.map((item) => (
            <article className="portfolio-card" key={item.id}>
              <div className="portfolio-card-in">
                <div className="portfolio-logo">
                  <img src={item.logo} alt="" />
                </div>
                <span className="portfolio-category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="portfolio-actions">
                  <button
                    type="button"
                    className="portfolio-btn"
                    onClick={() => downloadBrochure(item.brochure)}
                  >
                    Brochure
                  </button>
                  <button
                    type="button"
                    className="portfolio-btn"
                    onClick={() =>
                      window.open(item.website, "_blank", "noopener,noreferrer")
                    }
                  >
                    Website
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
