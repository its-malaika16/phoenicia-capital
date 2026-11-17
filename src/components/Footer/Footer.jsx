import { Link } from "react-router-dom";
import "./Footer.css";

function PhoneIcon() {
  return (
    <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="Phoenicia Capital Holdings">
            <img
              className="footer-ship"
              src="/assets/logo/phoenicia-ship.png?v=3"
              alt=""
              width="1788"
              height="1569"
              draggable="false"
            />
            <img
              className="footer-word"
              src="/assets/logo/phoenicia-word.png?v=4"
              alt=""
              width="3516"
              height="816"
              draggable="false"
            />
          </Link>

          <ul className="footer-details">
            <li>
              <PhoneIcon />
              <a href="tel:+971504294194">+971 50 429 4194</a>
            </li>
            <li>
              <MailIcon />
              <a href="mailto:support@phoeniciacapital.co.uk">
                support@phoeniciacapital.co.uk
              </a>
            </li>
            <li>
              <PinIcon />
              <span>Dubai, Business Bay - Blue Bay Tower</span>
            </li>
            <li>
              <ClockIcon />
              <span>Mon - Fri, 9:00 AM - 5:30 PM</span>
            </li>
          </ul>
        </div>

        <nav className="footer-explore" aria-label="Explore">
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/story">Our Story</Link>
          <Link to="/founder">Our Founder</Link>
        </nav>

        <div className="footer-contact">
          <h2>Contact</h2>
          <a href="mailto:support@phoeniciacapital.co.uk">
            support@phoeniciacapital.co.uk
          </a>
        </div>

        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <span aria-hidden="true">|</span>
          <a href="#cookies">Cookie Policy</a>
          <span aria-hidden="true">|</span>
          <a href="#terms">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}
