import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header/header.jsx'
import Footer from './Components/Footer/footer.jsx'
import Contact from './Components/Contact/contact.jsx'
import Home from './Components/Home/home.jsx'
import Skills from './Components/Skills/skills.jsx'
import Project from './Components/Project/project.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
  </StrictMode>,
)
