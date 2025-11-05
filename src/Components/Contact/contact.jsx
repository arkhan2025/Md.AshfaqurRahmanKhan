import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields!");
      return;
    }

    
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      {submitted && <p className="success-msg">Message sent successfully!</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
            <div className="name">
                <span className="required">*</span>Name :
            </div>
          
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </label>

        <label>
            <div className="name">
                <span className="required">*</span>Email :
            </div>
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />
        </label>

        <label>
            <div className="name">
                Mobile :
            </div>
          
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Optional"
          />
        </label>

        <label>
            <div className="name">
                <span className="required">*</span>Message :
            </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message..."
            rows="5"
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
