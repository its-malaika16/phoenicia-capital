import "./Footer.css";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <h2>Phoenicia Capital Holdings</h2>
          <span className="footer-sub">ESTABLISHED EXCELLENCE</span>

          <p>
            A diversified holding company managing a portfolio of innovative and
            distinguished ventures across finance, technology, and enterprise
            solutions.
          </p>
        </div>

        {/* MIDDLE */}
        <div className="footer-links">
          <h4>EXPLORE</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/story">Our Story</Link>
          <Link to="/founder">Our Founder</Link>
        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h4>CONTACT</h4>
          <p>support@phoeniciacapital.co.uk</p>
          <Link to="/contact">Get in touch</Link>

          <p className="address">
            Blue Bay Tower <br />
            Business Bay, Dubai <br />
            United Arab Emirates
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>© 2026 Phoenicia Capital Holdings. All rights reserved.</span>

        <div className="footer-policy">
          <a href="#">Privacy</a>
          <span>·</span>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}