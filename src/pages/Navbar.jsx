import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // hamburger icon

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "nav-item active" : "nav-item";
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/E_lan-01-removebg-preview.png"
            alt="Energen Logo"
            style={{
              height: "100px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* 👇 Hamburger (visible only on mobile/tablet) */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: "none",
            background: "transparent",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <FaBars style={{ fontSize: "22px", color: "#000000ff" }} />
          <span>Menu</span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className={isActive("/")}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className={isActive("/about")}>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className={isActive("/treatments")}>
              <Link to="/treatments" className="nav-link">
                Treatments
              </Link>
            </li>
            <li className={isActive("/specialists")}>
              <Link to="/specialists" className="nav-link">
                Specialists
              </Link>
            </li>
            <li className={isActive("/pricing")}>
              <Link to="/pricing" className="nav-link">
                Pricing
              </Link>
            </li>
            <li className={isActive("/blog")}>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className={isActive("/contact")}>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
