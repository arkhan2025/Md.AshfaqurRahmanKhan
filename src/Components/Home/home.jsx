import React, { useState } from "react";
import profilePhoto from "../../assets/Ar khan.png";
import {
  Download,
  Eye,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Copy,
  ExternalLink,
  Code2
} from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "../Common/Icons.jsx";
import "./home.css";

const Home = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>

        <div className="hero-container">
          {/* Left Column: Intro & Info */}
          <div className="hero-content">
            <div className="badge-available">
              <span className="badge-dot"></span>
              Available for Opportunities & Collaborations
            </div>

            <div className="hero-greeting">
              <span className="script-hello">Hello,</span>
              <span className="sub-hello">I'm</span>
            </div>

            <h1 className="hero-name">
              Md Ashfaqur <span className="highlight-text">Rahman Khan</span>
            </h1>

            <div className="role-tagline-box">
              <Code2 size={18} className="role-icon" />
              <p className="hero-tagline">
                Web Developer <span className="divider">|</span> Full Stack Developer{" "}
                <span className="divider">|</span> Software Engineer
              </p>
            </div>

            <p className="hero-mission">
              "Empowering through Technology & Social Good 🌍"
            </p>

            {/* Quick Contact & Info Grid */}
            <div className="hero-contact-card glass-card">
              <div className="contact-item">
                <MapPin size={17} className="contact-icon text-cyan" />
                <span>Kawlar, Uttara, Dhaka - 1229</span>
              </div>

              <div
                className="contact-item clickable"
                onClick={() => handleCopy("+8801727671870", "phone")}
                title="Click to copy phone number"
              >
                <Phone size={17} className="contact-icon text-violet" />
                <a href="tel:+8801727671870" onClick={(e) => e.stopPropagation()}>
                  +880 1727671870
                </a>
                <span className="copy-hint">
                  {copiedItem === "phone" ? <CheckCircle2 size={14} className="copied" /> : <Copy size={13} />}
                </span>
              </div>

              <div
                className="contact-item clickable"
                onClick={() => handleCopy("ashfaqur.rahman.khan.zayed@gmail.com", "email")}
                title="Click to copy email address"
              >
                <Mail size={17} className="contact-icon text-pink" />
                <a
                  href="mailto:ashfaqur.rahman.khan.zayed@gmail.com"
                  onClick={(e) => e.stopPropagation()}
                >
                  ashfaqur.rahman.khan.zayed@gmail.com
                </a>
                <span className="copy-hint">
                  {copiedItem === "email" ? <CheckCircle2 size={14} className="copied" /> : <Copy size={13} />}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <span className="social-label">Connect:</span>
              <a
                href="https://github.com/arkhan2025"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ar-khan-6a5187242"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.facebook.com/ashfaqur.rahman.khan.zayed"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn facebook"
                aria-label="Facebook Profile"
              >
                <FacebookIcon size={18} />
                <span>Facebook</span>
              </a>
            </div>

            {/* CTA Action Buttons */}
            <div className="hero-actions">
              <a
                href="/Md. Ashfaqur Rahman Khan.pdf"
                download="Md_Ashfaqur_Rahman_Khan_Resume.pdf"
                className="btn-primary"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              <a
                href="/Md. Ashfaqur Rahman Khan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Eye size={18} />
                <span>View CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Showcase */}
          <div className="hero-visual">
            <div className="photo-card-wrapper">
              <div className="photo-ambient-glow"></div>
              <div className="photo-frame">
                <img
                  src={profilePhoto}
                  alt="Md Ashfaqur Rahman Khan"
                  className="profile-img"
                />
              </div>

              {/* Floating badges */}
              <div className="floating-badge badge-top-right glass-card">
                <div className="badge-icon-box cyan">
                  <Code2 size={16} />
                </div>
                <div>
                  <span className="f-title">Full Stack</span>
                  <span className="f-sub">MERN & Java</span>
                </div>
              </div>

              <div className="floating-badge badge-bottom-left glass-card">
                <div className="badge-icon-box violet">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <span className="f-title">B.Sc in CSE</span>
                  <span className="f-sub">Dhaka University</span>
                </div>
              </div>

              <div className="floating-badge badge-bottom-right glass-card">
                <div className="badge-icon-box pink">
                  <Award size={16} />
                </div>
                <div>
                  <span className="f-title">3.45 / 4.00</span>
                  <span className="f-sub">Cumulative GPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="section-header">
            <span className="section-tag">
              <BookOpen size={14} /> About Me
            </span>
            <h2 className="section-title">Background & Academic Excellence</h2>
            <p className="section-subtitle">
              Bridging robust computer science principles with modern full-stack web engineering.
            </p>
          </div>

          <div className="about-grid">
            {/* Professional Summary */}
            <div className="summary-card glass-card">
              <div className="card-header-icon">
                <Code2 size={24} className="text-cyan" />
              </div>
              <h3 className="card-title">Professional Summary</h3>
              <p className="summary-text">
                Versatile and detail-oriented Computer Science graduate with a strong
                foundation in software engineering, object-oriented design, and
                full-stack development using <strong>Java</strong>, <strong>React</strong>, and{" "}
                <strong>JavaScript</strong>. Skilled in building responsive web interfaces,
                scalable backend systems, and ensuring software quality through testing.
              </p>
              <p className="summary-text" style={{ marginTop: "1rem" }}>
                Adept at problem-solving, quick to adapt, and committed to continuous learning
                through hands-on experience. Eager to contribute to dynamic teams and
                deliver clean, efficient, and impactful solutions.
              </p>

              <div className="stats-row">
                <div className="stat-box">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Web Projects</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years of CSE</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">3.45</span>
                  <span className="stat-label">University CGPA</span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="education-card glass-card">
              <div className="card-header-icon">
                <GraduationCap size={24} className="text-violet" />
              </div>
              <h3 className="card-title">Education</h3>

              <div className="edu-item">
                <div className="edu-badge">2020 – 2025</div>
                <h4 className="edu-degree">
                  Bachelor of Science in Computer Science & Engineering
                </h4>
                <p className="edu-institution">
                  University of Dhaka, Technology Unit
                </p>
                <div className="gpa-pill">
                  <Award size={15} />
                  <span>Cumulative GPA: <strong>3.45</strong> out of 4.00</span>
                </div>
              </div>

              <div className="core-subjects">
                <h5 className="subjects-heading">
                  <CheckCircle2 size={16} className="text-cyan" />
                  Core Coursework & Specializations:
                </h5>
                <div className="subject-tags">
                  <span className="subject-tag">Object-Oriented Programming (OOP)</span>
                  <span className="subject-tag">Data Structures & Algorithms</span>
                  <span className="subject-tag">Database Management Systems</span>
                  <span className="subject-tag">Software Engineering</span>
                  <span className="subject-tag">Web Technologies</span>
                  <span className="subject-tag">Software Quality & Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
