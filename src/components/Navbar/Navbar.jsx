import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/story", label: "Our Story" },
  { to: "/products", label: "Products" },
  { to: "/founder", label: "Founder" },
  { to: "/blogs", label: "Blogs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 1180) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" aria-label="Phoenicia Capital Holdings" end>
          <img
            className="logo-ship"
            src="/assets/logo/phoenicia-ship.png?v=2"
            alt=""
            width="596"
            height="523"
            draggable="false"
          />
          <img
            className="logo-word"
            src="/assets/logo/phoenicia-word.png?v=2"
            alt=""
            width="1172"
            height="272"
            draggable="false"
          />
        </NavLink>

        <button
          type="button"
          className={open ? "menu-toggle open" : "menu-toggle"}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={open ? "nav-links open" : "nav-links"}
          aria-label="Primary"
        >
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className="nav-link"
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-contact nav-contact-mobile">
            Contact
          </NavLink>
        </nav>

        <NavLink to="/contact" className="nav-contact nav-contact-desktop">
          Contact
        </NavLink>
      </div>
    </header>
  );
}
