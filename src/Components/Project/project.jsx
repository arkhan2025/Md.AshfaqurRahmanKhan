import React, { useState } from "react";
import "./Project.css";

import uniHome from "../../assets/Uni/Uni Home.png";
import uniCourses from "../../assets/Uni/Uni Courses.png";
import uniGalary from "../../assets/Uni/Uni Galary.png";
import uniContact from "../../assets/Uni/Uni Contact.png";

import brandThumb from "../../assets/Brand Page.png";
import interactiveThumb from "../../assets/3D.png";
import foodyThumb from "../../assets/Foody Zone.png";
import bankingThumb from "../../assets/Baankiing Technology.png";

import musicDiscover from "../../assets/Music/Discover.png";
import musicTopCharts from "../../assets/Music/Top Charts.png";
import musicPlaying from "../../assets/Music/Playing.png";
import musicPlaylist from "../../assets/Music/Playlist.png";
import musicTopArtist from "../../assets/Music/Top Artist.png";

import clinicFind from "../../assets/Clinic Management System/Find Patient.png";
import clinicPatientCreation from "../../assets/Clinic Management System/Patient Creation.png";
import clinicPatient from "../../assets/Clinic Management System/Patient List.png";
import clinicReceptionist from "../../assets/Clinic Management System/Receptionist Dashboard.png";
import clinicToken from "../../assets/Clinic Management System/Token Creation.png";

import donationCampaign from "../../assets/Donation Platform/Campaign Creation.png";
import donationCampaignList from "../../assets/Donation Platform/Campaign List.png";
import donationCart from "../../assets/Donation Platform/Cart.png";
import donationCheckout from "../../assets/Donation Platform/Checkout.png";
import donationSearched from "../../assets/Donation Platform/Searched Campaigns.png";

import quizDashboardA from "../../assets/Quiz Platform/Dashboard attempt.png";
import quizDashboardQ from "../../assets/Quiz Platform/Dashboard quiz.png";
import quizprofile  from "../../assets/Quiz Platform/Profile.png";
import quizlist from "../../assets/Quiz Platform/Quiz List.png";
import quizes from "../../assets/Quiz Platform/Quiz.png";
import quizRegistration from "../../assets/Quiz Platform/Registration.png";

import communityTrackerAdmin from "../../assets/Project Tracker/Admin Dashboard.png";
import communityTrackerAvailableDashboard from "../../assets/Project Tracker/Available user dashboard.png";
import communityTrackerAssigned from "../../assets/Project Tracker/Project Assigned User Dashboard.png";
import communityTrackerCompleted from "../../assets/Project Tracker/Completed Project.png";
import communityTrackerLogin from "../../assets/Project Tracker/Login.png";
import communityTrackerProjectCreation from "../../assets/Project Tracker/Project Creation.png";
import communityTrackerProfile from "../../assets/Project Tracker/Profile.png";
import communityTrackerList from "../../assets/Project Tracker/Project List.png";
import communityTrackerRegistration from "../../assets/Project Tracker/Registration.png";
import communityTrackerRunning from "../../assets/Project Tracker/Running Project.png";

import soilHome from "../../assets/Soil Farming Agent/Home.png";
import soilSoil from "../../assets/Soil Farming Agent/Soil Details.png";
import soilDistributor from "../../assets/Soil Farming Agent/Distributor Details.png";

const projects = [
  {
    title: "Music Player App",
    description:
      "A music discovery app integrating Deezer API and Lyrics.ovh with song search, top charts, and lyrics display.",
    github: "https://github.com/arkhan2025/Music_player",
    images: [musicDiscover, musicTopCharts, musicPlaying, musicPlaylist, musicTopArtist],
  },
  {
    title: "Clinic Management System",
    description:
      "A full-featured MERN clinic management system with patient management, prescriptions, tokens, and billing.",
    github: "https://github.com/arkhan2025/ClinicManagementSystem",
    images: [clinicFind, clinicPatientCreation, clinicPatient, clinicReceptionist, clinicToken],
  },
  {
    title: "Soil Farming Agent",
    description:
      "A soil farming agent platform connecting farmers with soil distributors for better resource management.",
    github: "https://github.com/arkhan2025/Soil_Farming_Agent",
    images: [soilHome, soilSoil, soilDistributor],
  },
  {
    title: "Donation Platform",
    description:
      "An NGO donation platform for campaign creation, donor tracking, and secure payment handling.",
    github: "https://github.com/arkhan2025/JamunaFoundationWebDev/tree/main/Donation-Platform",
    images: [donationCampaign, donationCampaignList, donationCart, donationCheckout, donationSearched],
  },
  {
    title: "Educational Quiz Platform",
    description:
      "An interactive quiz platform with authentication, quiz participation, and leaderboard features.",
    github: "https://github.com/arkhan2025/JamunaFoundationWebDev/tree/main/Educational-Quiz-Platform",
    images: [quizDashboardA, quizDashboardQ, quizprofile, quizlist, quizes, quizRegistration],
  },
  {
    title: "Community Project Tracker",
    description:
      "A full-stack platform for managing community projects with CRUD operations, updates, and user interactions.",
    github: "https://github.com/arkhan2025/JamunaFoundationWebDev/tree/main/Community-Project-Tracker",
    images: [communityTrackerAdmin, communityTrackerAvailableDashboard, communityTrackerAssigned, communityTrackerCompleted, communityTrackerLogin, communityTrackerProjectCreation, communityTrackerProfile, communityTrackerList, communityTrackerRegistration, communityTrackerRunning],
  },
  {
    title: "Next Gen University",
    description:
      "A demo university website showcasing academic programs, courses, and campus info with a modern responsive UI.",
    github: "https://github.com/arkhan2025/next_gen_university",
    images: [uniHome, uniCourses, uniGalary, uniContact],
  },
  {
    title: "Adidas Brand Landing Page",
    description:
      "A landing page for the Adidas brand, highlighting products and marketing campaigns with smooth animations.",
    github: "https://github.com/arkhan2025/brandPage",
    images: [brandThumb],
  },
  {
    title: "3D Interactive Webpage",
    description:
      "An interactive 3D webpage with animations and user interactions built with modern web technologies.",
    github: "https://github.com/arkhan2025/3DInterractiveWebPage",
    images: [interactiveThumb],
  },
  {
    title: "Foody Zone Restaurant",
    description:
      "A restaurant web app featuring menu, reservations, and online ordering with a modern React-based design.",
    github: "https://github.com/arkhan2025/FoodyZone",
    images: [foodyThumb],
  },
  {
    title: "Banking Technology",
    description:
      "A modern banking tech web demo showcasing online transactions, authentication, and user-friendly UI.",
    github: "https://github.com/arkhan2025/BankingTechnology",
    images: [bankingThumb],
  },
];

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="slider">
      <button className="slider-btn left" onClick={prevSlide}>
        ❮
      </button>
      <img src={images[current]} alt="Project Screenshot" className="slide-img" />
      <button className="slider-btn right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <ImageSlider images={project.images} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
