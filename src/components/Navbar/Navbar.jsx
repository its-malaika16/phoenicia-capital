import { useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ important
import "./Navbar.css";
import phoenicialogo from "/assets/logo/phoeniciaLogo.png";
import { COLORS } from "../../constants/colors.js";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* ✅ Logo Section */}
        <div className="navbar-logo">
          <img
            src={phoenicialogo}
            alt="Phoenicia Capital"
            className="logo"
          />
          <div className="website-name">
            <span style={{ color: COLORS.appname, fontSize: "1.2em" }}>
              Phoenicia Capital
            </span>
            <span style={{ color: COLORS.secondary }}>
              Holdings
            </span>
          </div>
        </div>

        {/* ✅ Navigation Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/story" className="nav-link">
              Our Story
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/founder" className="nav-link">
              Founder
            </NavLink>
          </li>

          <li>
            <NavLink to="/blogs" className="nav-link">
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>

        </ul>

        {/* ✅ Mobile Menu Toggle */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>
    </nav>
  );
}

export default Navbar;