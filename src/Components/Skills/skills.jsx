import React from "react";
import {
  Code,
  Layers,
  Globe,
  Database,
  Wrench,
  Sparkles,
  Cpu,
  CheckCircle,
  Lightbulb,
  Clock,
  Users2,
  MessageSquare,
  TrendingUp
} from "lucide-react";
import "./skills.css";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "cyan",
    description: "Core languages for building robust, scalable algorithms & software",
    skills: [
      { name: "Java", level: "Advanced", tag: "OOP / Systems" },
      { name: "JavaScript", level: "Advanced", tag: "ES6+ / Web" },
      { name: "Python", level: "Proficient", tag: "Scripting / Data" },
      { name: "C", level: "Foundational", tag: "Algorithms" },
      { name: "SQL", level: "Proficient", tag: "Queries & Schema" },
    ],
  },
  {
    title: "Frameworks & Backend Architecture",
    icon: Layers,
    color: "violet",
    description: "Server-side architectures, RESTful APIs, and desktop frameworks",
    skills: [
      { name: "Node.js", level: "Proficient", tag: "Runtime" },
      { name: "Express.js", level: "Proficient", tag: "REST API" },
      { name: "Object Oriented Programming (OOP)", level: "Advanced", tag: "Design" },
      { name: "Java Swing", level: "Proficient", tag: "GUI App" },
      { name: "JDBC", level: "Proficient", tag: "DB Driver" },
    ],
  },
  {
    title: "Web Technologies & Frontend",
    icon: Globe,
    color: "pink",
    description: "Modern, interactive, and responsive web user interfaces",
    skills: [
      { name: "React.js", level: "Advanced", tag: "SPA / Hooks" },
      { name: "Tailwind CSS", level: "Advanced", tag: "Utility First" },
      { name: "HTML5", level: "Expert", tag: "Semantics" },
      { name: "CSS3", level: "Advanced", tag: "Responsive" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    color: "amber",
    description: "Relational and NoSQL persistent storage management",
    skills: [
      { name: "MongoDB", level: "Proficient", tag: "NoSQL / MERN" },
      { name: "MySQL", level: "Proficient", tag: "Relational / SQL" },
    ],
  },
  {
    title: "Tools, Platforms & IDEs",
    icon: Wrench,
    color: "emerald",
    description: "Developer tooling, version control, and deployment pipelines",
    skills: [
      { name: "Git & GitHub", level: "Advanced", tag: "Version Control" },
      { name: "VS Code", level: "Expert", tag: "Primary IDE" },
      { name: "Vercel", level: "Proficient", tag: "Deployment" },
      { name: "NetBeans", level: "Proficient", tag: "Java IDE" },
      { name: "Android Studio", level: "Familiar", tag: "Mobile" },
      { name: "Jupyter Notebook", level: "Proficient", tag: "Python Data" },
    ],
  },
];

const softSkills = [
  {
    title: "Strong Analytical Thinking",
    desc: "Approaching architectural puzzles methodically with structured problem decomposition.",
    icon: Lightbulb,
  },
  {
    title: "Time Management & Prioritization",
    desc: "Delivering milestone-driven software projects on schedule with clean sprint tracking.",
    icon: Clock,
  },
  {
    title: "Adaptability & Teamwork",
    desc: "Collaborating seamlessly across cross-functional teams and adopting new toolchains quickly.",
    icon: Users2,
  },
  {
    title: "Verbal & Written Communication",
    desc: "Articulating complex technical concepts clearly in documentation and team discussions.",
    icon: MessageSquare,
  },
  {
    title: "Data-Driven Decision Making",
    desc: "Validating engineering decisions and optimizations through empirical testing and benchmarks.",
    icon: TrendingUp,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-ambient-glow"></div>

      <div className="skills-container">
        <div className="section-header">
          <span className="section-tag">
            <Cpu size={14} /> Technical Arsenal
          </span>
          <h2 className="section-title">Skills & Capabilities</h2>
          <p className="section-subtitle">
            Passionate about building scalable web applications with strong foundations
            in computer science and modern full-stack development.
          </p>
        </div>

        {/* Technical Categories Grid */}
        <div className="tech-skills-grid">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="tech-card glass-card">
                <div className="tech-card-header">
                  <div className={`tech-card-icon-box ${cat.color}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="tech-card-title">{cat.title}</h3>
                    <p className="tech-card-desc">{cat.description}</p>
                  </div>
                </div>

                <div className="skills-pills-wrap">
                  {cat.skills.map((s, sIdx) => (
                    <div key={sIdx} className="skill-pill">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-tag">{s.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <div className="soft-skills-container glass-card">
          <div className="soft-skills-header">
            <div className="soft-badge">
              <Sparkles size={16} /> Professional & Interpersonal Strengths
            </div>
            <h3 className="soft-title">How I Deliver Impact</h3>
            <p className="soft-desc">
              Beyond technical fluency, strong communication, adaptability, and analytical rigor drive high-impact engineering results.
            </p>
          </div>

          <div className="soft-skills-grid">
            {softSkills.map((item, idx) => {
              const SIcon = item.icon;
              return (
                <div key={idx} className="soft-card">
                  <div className="soft-card-icon">
                    <SIcon size={20} />
                  </div>
                  <div>
                    <h4 className="soft-card-name">{item.title}</h4>
                    <p className="soft-card-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
