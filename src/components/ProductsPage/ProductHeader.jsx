import "./ProductHeader.css";

export default function ProductHeader() {
  return (
    <section className="product-header">
      <div className="product-grid">
        <div className="product-copy">
          <span className="product-kicker">Our Portfolio</span>
          <h1>
            <span className="product-line">
              <span className="is-navy">Diverse </span>
              <span className="is-gold">industries.</span>
            </span>
            <br />
            <span className="product-line">
              <span className="is-navy">Shared </span>
              <span className="is-gold">vision.</span>
            </span>
            <br />
            <span className="product-line">
              <span className="is-navy">Lasting </span>
              <span className="is-gold">impact.</span>
            </span>
          </h1>
          <p>
            Four ventures spanning education, energy, banking, and payroll
            each chosen for its enduring potential and alignment with our
            values.
          </p>
        </div>
        <div className="product-art" aria-hidden="true">
          <span className="product-blob product-blob-navy"></span>
          <span className="product-blob product-blob-gold"></span>
          <img
            src="/assets/images/products-laptop.png?v=3"
            alt=""
            width="1908"
            height="1198"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
