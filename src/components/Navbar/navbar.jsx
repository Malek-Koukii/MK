import React, { useState, useEffect } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = ({ toggleTheme, theme }) => {
  const [menu, setMenu] = useState("home");

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "portfolio", "contact"];
      let current = "hero";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= window.innerHeight / 3) {
            current = section;
          }
        }
      }

      setMenu(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg p-2">
      <div className="container">
        <AnchorLink href="#hero">
          <img src={logo} alt="Logo" className="logo" />
        </AnchorLink>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5 align-items-center">
            <li className={`nav-item ${menu === "hero" ? "active" : ""}`}>
              <AnchorLink href="#hero" className="nav-link">
                Home
              </AnchorLink>
            </li>
            <li className={`nav-item ${menu === "about" ? "active" : ""}`}>
              <AnchorLink offset={90} href="#about" className="nav-link">
                About
              </AnchorLink>
            </li>
            <li className={`nav-item ${menu === "portfolio" ? "active" : ""}`}>
              <AnchorLink offset={90} href="#portfolio" className="nav-link">
                Portfolio
              </AnchorLink>
            </li>
            <li className={`nav-item ${menu === "contact" ? "active" : ""}`}>
              <AnchorLink offset={90} href="#contact" className="nav-link">
                Contact
              </AnchorLink>
            </li>
            {/* 🌙 Bouton thème */}
            <li>
              <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === "light" ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                      stroke="#1a0e32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="#d1c0f1"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                      stroke="#d1c0f1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>

        <div className="btns-menu">
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === "light" ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                  stroke="#1a0e32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="#d1c0f1"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  stroke="#d1c0f1"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
          <button className="menu-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              onClick={() => setShowMenu(!showMenu)}
            >
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <div className={`nav-item ${menu === "hero" ? "active" : ""}`}>
            <AnchorLink
              href="#hero"
              className="nav-link-menu"
              onClick={() => setShowMenu(false)}
            >
              Home
            </AnchorLink>
          </div>
          <div className={`nav-item ${menu === "about" ? "active" : ""}`}>
            <AnchorLink
              offset={90}
              href="#about"
              className="nav-link-menu"
              onClick={() => setShowMenu(false)}
            >
              About
            </AnchorLink>
          </div>
          <div className={`nav-item ${menu === "portfolio" ? "active" : ""}`}>
            <AnchorLink
              offset={90}
              href="#portfolio"
              className="nav-link-menu"
              onClick={() => setShowMenu(false)}
            >
              Portfolio
            </AnchorLink>
          </div>
          <div className={`nav-item ${menu === "contact" ? "active" : ""}`}>
            <AnchorLink
              offset={90}
              href="#contact"
              className="nav-link-menu"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </AnchorLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
