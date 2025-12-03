import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>Skills</h2>
        <p className="skills-intro">
          Passionate about building scalable web applications with strong
          foundations in computer science and modern full-stack development.
        </p>

        <div className="skills-category">
          <h3>Computer Science & Development Skills</h3>

          <div className="skills-subcategory">
            <h4>Programming Languages</h4>
            <p>Java, C, Python, SQL, JavaScript</p>
          </div>

          <div className="skills-subcategory">
            <h4>Frameworks and Libraries</h4>
            <p>
              Node.js / Express (REST API), Java Swing, JDBC, Object Oriented
              Programming (OOP)
            </p>
          </div>

          <div className="skills-subcategory">
            <h4>Web Technologies</h4>
            <p> HTML, CSS, React.js, Node.js, Tailwind</p>
          </div>

          <div className="skills-subcategory">
            <h4>Databases</h4>
            <p>MongoDB, MySQL</p>
          </div>

          <div className="skills-subcategory">
            <h4>Tools & IDEs</h4>
            <p>
              VS Code, NetBeans, Android Studio, Jupyter Notebook, Git &
              GitHub
            </p>
          </div>
        </div>

        <div className="skills-category">
          <h3>Soft Skills</h3>
          <p>
            Strong analytical thinking <br />
            Excellent time management and prioritization <br />
            Adaptability and teamwork <br />
            Effective verbal and written communication <br />
            Data-driven decision making
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
