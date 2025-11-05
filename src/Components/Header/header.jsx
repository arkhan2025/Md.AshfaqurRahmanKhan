import React, { useState } from "react";
import logo from "../../assets/AR-removebg-preview.png";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "about") {
      window.scrollTo({ top: 850, behavior: "smooth" }); 
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={() => scrollToSection("home")}
        style={{ cursor: "pointer" }}
      />

      <div
        className="top"
        onClick={() => scrollToSection("home")}
        style={{ cursor: "pointer" }}
      >
        <h1>Md Ashfaqur Rahman Khan</h1>
        <p>Empowering through Technology & Social Good 🌍</p>
      </div>

      <nav className="desktop-nav">
        <button className="h" onClick={() => scrollToSection("home")}>Home</button>
        <button className="r" onClick={() => scrollToSection("about")}>About</button>
        <button className="s" onClick={() => scrollToSection("skills")}>Skills</button>
        <button className="p" onClick={() => scrollToSection("projects")}>Projects</button>
        <button className="c" onClick={() => scrollToSection("contact")}>Contact</button>
      </nav>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <button className="h" onClick={() => scrollToSection("home")}>Home</button>
        <button className="r" onClick={() => scrollToSection("about")}>About</button>
        <button className="s" onClick={() => scrollToSection("skills")}>Skills</button>
        <button className="p" onClick={() => scrollToSection("projects")}>Projects</button>
        <button className="c" onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
    </header>
  );
};

export default Header;
