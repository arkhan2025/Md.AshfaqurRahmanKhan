import React from "react";
import Header from "./Components/Header/header.jsx";
import Home from "./Components/Home/home.jsx";
import Skills from "./Components/Skills/skills.jsx";
import Project from "./Components/Project/project.jsx";
import Contact from "./Components/Contact/contact.jsx";
import Footer from "./Components/Footer/footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <Home />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
