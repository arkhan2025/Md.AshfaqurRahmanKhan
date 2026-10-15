import React, { useState, useEffect } from "react";
import logo from "../../assets/AR-removebg-preview.png";
import { Menu, X, Send, Sparkles } from "lucide-react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div
          className="brand"
          onClick={() => scrollToSection("home")}
          role="button"
          tabIndex={0}
        >
          <div className="logo-wrapper">
            <img src={logo} alt="AR Logo" className="logo" />
            <div className="logo-glow"></div>
          </div>
          <div className="brand-text">
            <h1 className="brand-name">
              <span>Md Ashfaqur</span> Rahman Khan
            </h1>
            <p className="brand-tagline">
              <Sparkles size={13} className="sparkle-icon" />
              Full Stack Software Engineer
            </p>
          </div>
        </div>

        <nav className="desktop-nav" aria-label="Main Navigation">
          <button
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
          <button
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button
            className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="nav-cta"
            onClick={() => scrollToSection("contact")}
          >
            <span>Let's Talk</span>
            <Send size={15} />
          </button>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">
          <button
            className={`mobile-nav-link ${activeSection === "home" ? "active" : ""}`}
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
          <button
            className={`mobile-nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className={`mobile-nav-link ${activeSection === "skills" ? "active" : ""}`}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button
            className={`mobile-nav-link ${activeSection === "projects" ? "active" : ""}`}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="mobile-nav-cta"
            onClick={() => scrollToSection("contact")}
          >
            <span>Contact Me</span>
            <Send size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
