import React from "react";
import logo from "../../assets/AR-removebg-preview.png";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "../Common/Icons.jsx";
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-top-border"></div>

      <div className="footer-container">
        {/* Upper Footer: Brand & Navigation */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo-row" onClick={scrollToTop} role="button" tabIndex={0}>
              <img src={logo} alt="AR Logo" className="footer-logo" />
              <div className="footer-brand-text">
                <span className="footer-brand-name">Md Ashfaqur Rahman Khan</span>
                <span className="footer-brand-sub">Full Stack Software Engineer</span>
              </div>
            </div>
            <p className="footer-tagline">
              Building scalable web applications, modern architectures, and empowering communities through engineering and social impact.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links">
              <button onClick={() => scrollToSection("home")}>Home</button>
              <button onClick={() => scrollToSection("about")}>About</button>
              <button onClick={() => scrollToSection("skills")}>Skills</button>
              <button onClick={() => scrollToSection("projects")}>Projects</button>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </div>
          </div>

          <div className="footer-connect-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-social-icons">
              <a
                href="https://github.com/arkhan2025"
                target="_blank"
                rel="noopener noreferrer"
                className="f-social-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ar-khan-6a5187242"
                target="_blank"
                rel="noopener noreferrer"
                className="f-social-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com/ashfaqur.rahman.khan.zayed"
                target="_blank"
                rel="noopener noreferrer"
                className="f-social-btn"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="mailto:ashfaqur.rahman.khan.zayed@gmail.com"
                className="f-social-btn"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Lower Footer: Copyright & Back to Top */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} Md Ashfaqur Rahman Khan. All rights reserved.
          </p>

          <p className="built-with">
            Engineered with <Heart size={14} className="heart-icon" /> using React & Modern CSS
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
