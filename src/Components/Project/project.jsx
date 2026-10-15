import React, { useState } from "react";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Layers,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "../Common/Icons.jsx";
import "./project.css";

// Assets
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
import quizprofile from "../../assets/Quiz Platform/Profile.png";
import quizlist from "../../assets/Quiz Platform/Quiz List.png";
import quizes from "../../assets/Quiz Platform/Quiz.png";
import quizRegistration from "../../assets/Quiz Platform/Registration.png";

import communityTrackerAdmin from "../../assets/Project Tracker/Admin Dashboard.png";
import communityTrackerAvailableDashboard from "../../assets/Project Tracker/Available user Dashboard.png";
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
    id: 1,
    title: "Music Player App",
    category: "Full Stack",
    tags: ["React", "Redux", "Tailwind CSS", "Deezer API", "Lyrics.ovh"],
    description:
      "A modern music streaming web app built with React, Redux, and Tailwind CSS. Features real-time music discovery, lyrics synchronization, top charts, and an interactive playback overlay.",
    github: "https://github.com/arkhan2025/Music_player",
    demo: "https://music-player-eight-lime.vercel.app",
    images: [musicDiscover, musicTopCharts, musicPlaying, musicPlaylist, musicTopArtist],
  },
  {
    id: 2,
    title: "Clinic Management System",
    category: "Full Stack",
    tags: ["MERN Stack", "Node.js", "Express", "MongoDB", "JWT Auth", "REST API"],
    description:
      "A comprehensive clinical workflow platform with patient registration, digital prescriptions, token generation, receptionist dashboard, and billing management.",
    github: "https://github.com/arkhan2025/ClinicManagementSystem",
    demo: "https://clinic-management-system-sable-iota.vercel.app",
    images: [clinicFind, clinicPatientCreation, clinicPatient, clinicReceptionist, clinicToken],
  },
  {
    id: 3,
    title: "Soil Farming Agent",
    category: "Full Stack",
    tags: ["MongoDB", "Express", "React", "Node.js", "AgriTech", "Role Auth"],
    description:
      "A smart agriculture platform connecting farmers with verified soil distributors for optimized resource management, soil condition tracking, and admin seed governance.",
    github: "https://github.com/arkhan2025/Soil_Farming_Agent",
    demo: "https://soil-farming-agent-orcin.vercel.app",
    images: [soilHome, soilSoil, soilDistributor],
  },
  {
    id: 4,
    title: "Donation Platform",
    category: "Full Stack",
    tags: ["React", "Node.js", "Express", "MongoDB", "NGO Fundraising", "Checkout"],
    description:
      "An NGO fundraising web platform with campaign creation, approval workflows, donor contribution tracking, cart checkout, and NGO dashboard management.",
    github: "https://github.com/arkhan2025/JamunaFoundationWebDev/tree/main/Donation-Platform",
    demo: "https://donation-platform-omega.vercel.app",
    images: [donationCampaign, donationCampaignList, donationCart, donationCheckout, donationSearched],
  },
  {
    id: 5,
    title: "Educational Quiz Platform",
    category: "Full Stack",
    tags: ["React", "Express", "MongoDB", "Leaderboard", "Real-Time Assessment"],
    description:
      "An interactive assessment platform featuring timed quizzes, instant score evaluations, student performance analytics, and instructor quiz creation tools.",
    github: "https://github.com/arkhan2025/JamunaFoundationWebDev/tree/main/Educational-Quiz-Platform",
    demo: "https://quiz-platform-gamma.vercel.app",
    images: [quizDashboardA, quizDashboardQ, quizprofile, quizlist, quizes, quizRegistration],
  },
  {
    id: 6,
    title: "Community Project Tracker",
    category: "Full Stack",
    tags: ["MERN Stack", "Role Dashboard", "Project Lifecycle", "CRUD API"],
    description:
      "A collaborative management portal for tracking community development initiatives with task assignment, lifecycle states (Running, Completed), and administrative dashboards.",
    github: "https://github.com/arkhan2025/JamunaFoundationWebDev/tree/main/Community-Project-Tracker",
    demo: "https://jamuna-foundation-web-dev.vercel.app",
    images: [
      communityTrackerAdmin,
      communityTrackerAvailableDashboard,
      communityTrackerAssigned,
      communityTrackerCompleted,
      communityTrackerLogin,
      communityTrackerProjectCreation,
      communityTrackerProfile,
      communityTrackerList,
      communityTrackerRegistration,
      communityTrackerRunning,
    ],
  },
  {
    id: 7,
    title: "Next Gen University",
    category: "Frontend",
    tags: ["React", "Responsive UI", "Academic Portal", "Course Catalog"],
    description:
      "A modern responsive university portal showcasing academic faculties, course curriculums, interactive campus gallery, and student admissions inquiry systems.",
    github: "https://github.com/arkhan2025/next_gen_university",
    demo: "https://next-gen-university.vercel.app",
    images: [uniHome, uniCourses, uniGalary, uniContact],
  },
  {
    id: 8,
    title: "Adidas Brand Showcase",
    category: "Frontend",
    tags: ["React", "Vite", "Modern CSS", "Brand Marketing"],
    description:
      "A sleek brand showcase landing page crafted for modern apparel lines, emphasizing dynamic product hero banners, marketing storyboards, and fluid responsive design.",
    github: "https://github.com/arkhan2025/brandPage",
    demo: "https://brand-page.vercel.app",
    images: [brandThumb],
  },
  {
    id: 9,
    title: "3D Interactive Webpage",
    category: "Frontend",
    tags: ["HTML5", "CSS3 3D", "Perspective Depth", "Interactive UI"],
    description:
      "An exploratory 3D webpage featuring real-time perspective transitions, interactive elements, fluid motion styling, and responsive dimensional layouts.",
    github: "https://github.com/arkhan2025/3DInterractiveWebPage",
    demo: "https://arkhan2025.github.io/3DInterractiveWebPage/",
    images: [interactiveThumb],
  },
  {
    id: 10,
    title: "Foody Zone Restaurant",
    category: "Frontend",
    tags: ["React", "Dynamic Filter", "Food Ordering", "Menu Architecture"],
    description:
      "A restaurant web application featuring dynamic category filtering, search, meal discovery, and an interactive menu interface powered by React.",
    github: "https://github.com/arkhan2025/FoodyZone",
    demo: "https://foody-zone.vercel.app",
    images: [foodyThumb],
  },
  {
    id: 11,
    title: "Banking Technology",
    category: "Full Stack",
    tags: ["React", "Node.js", "Financial Dashboard", "Secure UI"],
    description:
      "A modern banking tech platform showcasing online transaction simulation, interactive account dashboards, user credentials management, and financial workflows.",
    github: "https://github.com/arkhan2025/BankingTechnology",
    demo: "https://banking-technology-4fe4-ou5cf1jxi.vercel.app",
    images: [bankingThumb],
  },
];

const categories = ["All", "Full Stack", "Frontend"];

const ImageSlider = ({ images, title, onOpenLightbox }) => {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="slider-wrapper">
      <div
        className="slider"
        onClick={() => onOpenLightbox(images, current, title)}
        title="Click to zoom image"
      >
        <img
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          className="slide-img"
          loading="lazy"
        />

        {images.length > 1 && (
          <>
            <button
              className="slider-btn left"
              onClick={prevSlide}
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="slider-btn right"
              onClick={nextSlide}
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>

            <div className="slider-dots">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${current === idx ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrent(idx);
                  }}
                />
              ))}
            </div>
          </>
        )}

        <div className="zoom-hint">
          <Maximize2 size={14} />
          <span>Zoom</span>
        </div>

        {images.length > 1 && (
          <div className="image-counter">
            {current + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [lightboxData, setLightboxData] = useState(null);

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const openLightbox = (images, index, title) => {
    setLightboxData({ images, index, title });
  };

  const closeLightbox = () => {
    setLightboxData(null);
  };

  const nextLightbox = (e) => {
    e.stopPropagation();
    if (!lightboxData) return;
    setLightboxData((prev) => ({
      ...prev,
      index: prev.index === prev.images.length - 1 ? 0 : prev.index + 1,
    }));
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    if (!lightboxData) return;
    setLightboxData((prev) => ({
      ...prev,
      index: prev.index === 0 ? prev.images.length - 1 : prev.index - 1,
    }));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-ambient-glow"></div>

      <div className="projects-container-wrapper">
        <div className="section-header">
          <span className="section-tag">
            <Layers size={14} /> Featured Work
          </span>
          <h2 className="section-title">Showcase of Engineered Projects</h2>
          <p className="section-subtitle">
            A curated portfolio of production-grade web applications, interactive platforms,
            and enterprise systems built with full-stack technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedFilter === cat ? "active" : ""}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat === "All" ? `All Projects (${projects.length})` : cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card glass-card">
              <div className="card-media-wrapper">
                <ImageSlider
                  images={project.images}
                  title={project.title}
                  onOpenLightbox={openLightbox}
                />
              </div>

              <div className="card-content">
                <div className="card-top-meta">
                  <span className="card-category-tag">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-desc">{project.description}</p>

                {/* Tech Pills */}
                <div className="project-tags-wrap">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 2 Dedicated Action Buttons */}
                <div className="project-actions">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn btn-demo"
                    title={`Visit ${project.title} live website`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn btn-repo"
                    title={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxData && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close image preview"
            >
              <X size={24} />
            </button>

            <img
              src={lightboxData.images[lightboxData.index]}
              alt={lightboxData.title}
              className="lightbox-image"
            />

            {lightboxData.images.length > 1 && (
              <>
                <button
                  className="lightbox-nav left"
                  onClick={prevLightbox}
                  aria-label="Previous"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  className="lightbox-nav right"
                  onClick={nextLightbox}
                  aria-label="Next"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            <div className="lightbox-caption">
              <h4>{lightboxData.title}</h4>
              <p>
                Screenshot {lightboxData.index + 1} of {lightboxData.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
