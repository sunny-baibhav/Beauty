import React, { useState } from "react";
import SpotlightCard from "./SpotlightCard";
import { motion } from "framer-motion";
import "@mui/icons-material";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
const ServicesSection1 = ({ showLayout = false }) => {
  const [openAccordion, setOpenAccordion] = useState("one");

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const services = [
    {
      icon: "spa",
      title: "Salt & Aroma",
      text: "A small river named Duden flows by their place and supplies.",
    },
    {
      icon: "water_drop",
      title: "Hydro",
      text: "A small river named Duden flows.",
    },
    {
      icon: "spa_outlined",
      title: "Hot Stone",
      text: "A small river named Duden flows by their place and supplies.",
    },
    {
      icon: "emoji_nature",
      title: "Aroma",
      text: "A small river named Duden flows.",
    },
    {
      icon: "self_improvement",
      title: "Relaxation",
      text: "A small river named Duden flows by their place and supplies.",
    },
    {
      icon: "fitness_center",
      title: "Athlete",
      text: "A small river named Duden flows.",
    },
    {
      icon: "favorite",
      title: "Thai",
      text: "A small river named Duden flows by their place and supplies.",
    },
    {
      icon: "local_florist",
      title: "Rose",
      text: "A small river named Duden flows.",
    },
  ];

  // reusable card
  const renderCard = (service, index) => (
    <motion.div
      key={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="col-6 d-flex align-items-stretch"
    >
      <SpotlightCard
        className="text-center border-0 shadow-lg custom-spotlight-card"
        spotlightColor="rgba(255, 182, 193, 0.3)"
        style={{
          width: "100%",
          padding: "25px 15px",
          borderRadius: "15px",
          backgroundColor: "#fff",
        }}
      >
        <div className="icon d-flex justify-content-center align-items-center mb-3">
          <span
            className="material-icons"
            style={{ fontSize: "50px", color: "#ff69b4" }}
          >
            {service.icon}
          </span>
        </div>
        <div className="text">
          <h4 style={{ fontWeight: "700", color: "#000", marginBottom: "8px" }}>
            {service.title}
          </h4>
          <p style={{ color: "#555", margin: 0, fontSize: "14px" }}>
            {service.text}
          </p>
        </div>
      </SpotlightCard>
    </motion.div>
  );

  return (
    <>
      {showLayout && <Navbar />}
      {showLayout && (
        <section
          className="hero-wrap d-flex align-items-center justify-content-center text-center"
          style={{
            position: "relative",
            height: "60vh",
            backgroundImage: 'url("/bg_3.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            padding: "100px 0",
            color: "#fff", // stack items vertically
          }}
        >
          {/* Background Image Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              //   backgroundColor: "rgba(0,0,0,0.3)", // optional overlay
              zIndex: 1,
            }}
          />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>
              Treatment
            </h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
              {/* Choose the perfect plan for your wellness journey */}
            </p>
            <Link
              to="/"
              style={{
                backgroundColor: "#ff69b4",
                color: "#fff",
                padding: "10px 25px",
                borderRadius: "25px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ff1493")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#ff69b4")
              }
            >
              Back to Home
            </Link>
          </div>
        </section>
      )}
      <section className="ftco-section bg-light py-5">
        <div className="container-fluid px-md-5">
          {/* Section Heading */}
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-12 heading-section text-center">
              <h3 className="subheading">Services</h3>
              <h2 className="mb-1">Treatments</h2>
            </div>
          </div>

          {/* Main Layout */}
          <div className="row justify-content-center align-items-start g-4">
            {/* Left Side */}
            <div className="col-lg-4">
              <div className="row g-4">
                {services.slice(0, 4).map(renderCard)}
              </div>
            </div>

            {/* Center Prices Accordion */}
            <div className="col-lg-4 d-flex align-items-stretch">
              <div
                className="myaccordion w-100 text-center py-5 px-3 px-md-4 shadow-lg bg-white rounded"
                style={{ minHeight: "100%" }}
              >
                <div className="mb-4">
                  <h3 style={{ fontWeight: "700", color: "#000" }}>Prices</h3>
                  <p style={{ color: "#666" }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia.
                  </p>
                </div>

                {/* === Accordion 1 === */}
                <div className="card border-0 mb-3">
                  <div className="card-header bg-light">
                    <button
                      className="d-flex align-items-center justify-content-between btn btn-link w-100 text-dark text-left"
                      onClick={() => toggleAccordion("one")}
                    >
                      Spa Therapies
                      <i
                        className={`fa ${
                          openAccordion === "one" ? "fa-minus" : "fa-plus"
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  {openAccordion === "one" && (
                    <div className="card-body text-left">
                      <ul className="list-unstyled">
                        <li className="d-flex justify-content-between border-bottom py-2">
                          <span>Face Treatments</span>
                          <span>40 min — $10</span>
                        </li>
                        <li className="d-flex justify-content-between border-bottom py-2">
                          <span>Nail Treatments</span>
                          <span>30 min — $20</span>
                        </li>
                        <li className="d-flex justify-content-between border-bottom py-2">
                          <span>Medical Treatments</span>
                          <span>60 min — $10</span>
                        </li>
                        <li className="d-flex justify-content-between py-2">
                          <span>Hair Treatments</span>
                          <span>30 min — $30</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* === Accordion 2 === */}
                <div className="card border-0">
                  <div className="card-header bg-light">
                    <button
                      className="d-flex align-items-center justify-content-between btn btn-link w-100 text-dark text-left"
                      onClick={() => toggleAccordion("two")}
                    >
                      Massage Therapies
                      <i
                        className={`fa ${
                          openAccordion === "two" ? "fa-minus" : "fa-plus"
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  {openAccordion === "two" && (
                    <div className="card-body text-left">
                      <ul className="list-unstyled">
                        <li className="d-flex justify-content-between border-bottom py-2">
                          <span>Face Treatments</span>
                          <span>40 min — $10</span>
                        </li>
                        <li className="d-flex justify-content-between border-bottom py-2">
                          <span>Nail Treatments</span>
                          <span>30 min — $20</span>
                        </li>
                        <li className="d-flex justify-content-between border-bottom py-2">
                          <span>Medical Treatments</span>
                          <span>60 min — $10</span>
                        </li>
                        <li className="d-flex justify-content-between py-2">
                          <span>Hair Treatments</span>
                          <span>30 min — $30</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-4">
              <div className="row g-4">{services.slice(4).map(renderCard)}</div>
            </div>
          </div>
        </div>
      </section>
      {showLayout && <Footer />}
    </>
  );
};

export default ServicesSection1;
