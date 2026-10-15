import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "../Common/Icons.jsx";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in all required fields!");
      return;
    }

    setLoading(true);

    // Prepare mailto link as reliable fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.mobile || "N/A"}\n\nMessage:\n${formData.message}`
    );

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(`mailto:ashfaqur.rahman.khan.zayed@gmail.com?subject=${subject}&body=${body}`, "_blank");
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setTimeout(() => setSubmitted(false), 8000);
    }, 600);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-ambient-glow"></div>

      <div className="contact-container">
        <div className="section-header">
          <span className="section-tag">
            <MessageSquare size={14} /> Get In Touch
          </span>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            Have an exciting project, full-time engineering opportunity, or technical inquiry?
            Feel free to reach out anytime.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-panel glass-card">
            <div className="panel-badge">
              <Sparkles size={14} /> Direct Channels
            </div>

            <h3 className="panel-title">Let's start a conversation</h3>
            <p className="panel-desc">
              I am actively seeking software engineering and full-stack developer roles where I can contribute to high-impact products and dynamic development teams.
            </p>

            <div className="contact-cards-list">
              {/* Email */}
              <div
                className="contact-detail-card"
                onClick={() => handleCopy("ashfaqur.rahman.khan.zayed@gmail.com", "email")}
              >
                <div className="detail-icon-box pink">
                  <Mail size={20} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Email Address</span>
                  <a
                    href="mailto:ashfaqur.rahman.khan.zayed@gmail.com"
                    className="detail-value"
                    onClick={(e) => e.stopPropagation()}
                  >
                    ashfaqur.rahman.khan.zayed@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedItem === "email" ? (
                    <CheckCircle2 size={16} className="text-emerald" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div
                className="contact-detail-card"
                onClick={() => handleCopy("+8801727671870", "phone")}
              >
                <div className="detail-icon-box cyan">
                  <Phone size={20} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Phone & WhatsApp</span>
                  <a
                    href="tel:+8801727671870"
                    className="detail-value"
                    onClick={(e) => e.stopPropagation()}
                  >
                    +880 1727671870
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedItem === "phone" ? (
                    <CheckCircle2 size={16} className="text-emerald" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="contact-detail-card">
                <div className="detail-icon-box violet">
                  <MapPin size={20} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Location</span>
                  <span className="detail-value text-muted-val">
                    Kawlar, Uttara, Dhaka - 1229, Bangladesh
                  </span>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="contact-social-section">
              <span className="social-subheading">Social Profiles</span>
              <div className="social-links-grid">
                <a
                  href="https://github.com/arkhan2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill github"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ar-khan-6a5187242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill linkedin"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.facebook.com/ashfaqur.rahman.khan.zayed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill facebook"
                >
                  <FacebookIcon size={18} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-panel glass-card">
            <h3 className="form-panel-title">Send a Direct Message</h3>
            <p className="form-panel-sub">
              Fill out the details below and I will respond to your email as soon as possible.
            </p>

            {submitted && (
              <div className="success-banner">
                <CheckCircle2 size={20} className="success-icon" />
                <div>
                  <strong>Thank you!</strong> Your message has been prepared and sent. I'll get back to you shortly!
                </div>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Full Name <span className="required">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Alex Johnson"
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@company.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile" className="form-label">
                    Mobile Number <span className="optional">(Optional)</span>
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+880 1XXXXXXXXX"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hi Ashfaqur, I'd like to discuss a project / software engineering opportunity..."
                  rows={5}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="submit-button"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
