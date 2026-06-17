import "./ProductHeader.css";

export default function ProductHeader() {
  return (
    <section className="product-header">

      {/* Overlay */}
      <div className="product-overlay"></div>

      {/* Content */}
      <div className="product-content">
        <span className="product-small">PORTFOLIO</span>

        <h1>Our Products</h1>

        <p>
          Four ventures spanning education, energy, banking, and payroll —
          each chosen for its enduring potential and alignment with our values.
        </p>
      </div>

    </section>
  );
}