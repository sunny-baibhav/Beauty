import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Special = () => {
  const specialists = [
    {
      name: "Elizabeth Nelson",
      title: "Owner / Head Coach",
      image: "/trainer-1.jpg",
    },
    {
      name: "Scarlett Torres",
      title: "Owner / Head Coach",
      image: "/trainer-2.jpg",
    },
    {
      name: "Victoria Wright",
      title: "Owner / Head Coach",
      image: "/trainer-3.jpg",
    },
    {
      name: "Stella Perry",
      title: "Owner / Head Coach",
      image: "/trainer-4.jpg",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateY: -30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
    hover: {
      rotateY: 10,
      rotateX: -10,
      scale: 1.05,
      transition: { duration: 0.4 },
    },
  };
  return (
    <>
      <Navbar />
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
          <h1
            style={{
              fontSize: "30px",
              marginBottom: "15px",
              letterSpacing: "2px",
              fontFamily: '"Prata", serif',
              fontWeight: "600",
              color: "#333",
              textTransform: "uppercase",
              fontweight: "300",
            }}
          >
            Our Team Specialists
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
            Choose the perfect plan for your wellness journey
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
      <section className="ftco-section" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          {/* Title Section */}
          <div className="row justify-content-center mb-5">
            <div className="col-md-12 heading-section text-center">
              <h3 className="subheading" style={{ color: "#c59d5f" }}>
                Specialists
              </h3>
              <h1
                style={{
                  fontSize: "3rem",
                  marginBottom: "15px",
                  letterSpacing: "2px",
                  fontFamily: '"Prata", serif',
                  fontWeight: "600",
                  color: "#333",
                  textTransform: "uppercase",
                }}
              >
                Our Team Specialists
              </h1>
            </div>
          </div>

          {/* Cards */}
          <div className="row" style={{ perspective: "1000px" }}>
            {specialists.map((person, index) => (
              <div key={index} className="col-lg-3 d-flex mb-4">
                <motion.div
                  className="coach align-items-stretch"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                    background: "#fff",
                    transformStyle: "preserve-3d",
                  }}
                  variants={cardVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  {/* Image */}
                  <div
                    className="img"
                    style={{
                      backgroundImage: `url(${person.image})`,
                      height: "320px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Text */}
                  <div
                    className="text bg-white p-4"
                    style={{
                      textAlign: "center",
                      transform: "translateZ(40px)",
                    }}
                  >
                    <span
                      className="subheading"
                      style={{ color: "#c59d5f", fontWeight: "500" }}
                    >
                      {person.title}
                    </span>
                    <h3 style={{ fontWeight: "600", marginTop: "10px" }}>
                      <a
                        href="#"
                        style={{ color: "#222", textDecoration: "none" }}
                      >
                        {person.name}
                      </a>
                    </h3>
                    <p style={{ fontSize: "15px", color: "#666" }}>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>

                    {/* Social Media Icons (Google icons) */}
                    <ul
                      className="ftco-social-media d-flex justify-content-center mt-4"
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        gap: "15px",
                      }}
                    >
                      <li>
                        <a
                          href="#"
                          className="d-flex justify-content-center align-items-center"
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: "#c59d5f",
                            color: "#fff",
                            fontSize: "20px",
                          }}
                        >
                          <span className="material-icons">share</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="d-flex justify-content-center align-items-center"
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: "#c59d5f",
                            color: "#fff",
                            fontSize: "20px",
                          }}
                        >
                          <span className="material-icons">facebook</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="d-flex justify-content-center align-items-center"
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: "#c59d5f",
                            color: "#fff",
                            fontSize: "20px",
                          }}
                        >
                          <span className="material-icons">camera_alt</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Special;
