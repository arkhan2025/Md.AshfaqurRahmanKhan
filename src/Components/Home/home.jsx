import React from "react";
import logo from "../../assets/AR khan.png";
import "./home.css";

const Combined = () => {
  return (
    <section className="combined-section">
      <div className="combined-container">

        <div className="text-container">
          <div className="home-info">
            <h1 className="hl">Hello,</h1>
            <div className="nm">
              <h3>I'm</h3>
              <h1>Md Ashfaqur Rahman Khan</h1>
            </div>
            <div className="t">
              <h5>Who's a</h5>
              <p className="tagline">
                CSE Graduate | Web Developer | Java Developer | SEO Specialist
              </p>
            </div>
            <div className="contact-address">
              <p>307, Kawlar Sandartek, Uttara, Dhaka - 1229</p>
            </div>
            <div className="contact-info">
              <p>+88 01727671870</p>
              <p>ashfaqur.rahman.khan.zayed@gmail.com</p>
            </div>
            <div className="social-links">
              <p>
                Facebook:{" "}
                <a
                  href="https://www.facebook.com/ashfaqur.rahman.khan.zayed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ar Khan
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/ar-khan-6a5187242"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AR Khan
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/arkhan2025"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Md Ashfaqur Rahman Khan
                </a>
              </p>
            </div>
          </div>
          <button className="cv">
            <a href="/Md. Ashfaqur Rahman Khan.pdf" download className="my-button">
            Download<br/>Resume
            </a>
          </button>
          <div className="about-info">
            <h1 className="ab">About</h1>
            <div className="professional-summary">
              <h2>Professional Summary</h2>
              <p>
                Versatile and detail-oriented Computer Science graduate with a
                strong foundation in software engineering, object-oriented
                design, and full-stack development using Java, React, and
                JavaScript. Skilled in building responsive web interfaces,
                scalable backend systems, and ensuring software quality through
                testing. Adept at problem-solving, quick to adapt, and committed
                to continuous learning through hands-on experience. Eager to
                contribute to dynamic teams and deliver clean, efficient, and
                impactful solutions.
              </p>
            </div>

            <div className="education">
              <h2>Education</h2>
              <p>
                <strong>Bachelor of Science in Computer Science & Engineering</strong>
                <br />
                Shyamoli Textile Engineering College (Affiliated with University of
                Dhaka)
                <br />
                Cumulative GPA 3.42 out of 4.00 (Till the 7th Semester)
                <br />
                (February 2020 – July 2025)
              </p>
              <p>
                <strong>Core Subjects:</strong> Object-Oriented Programming, Data
                Structures, Database Systems, Software Engineering, Web Development
              </p>
            </div>
          </div>
        </div>

        <div className="image-container">
          <img src={logo} alt="Md. Ashfaqur Rahman Khan" />
        </div>

      </div>
    </section>
  );
};

export default Combined;
