import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import ServicesSection from "./ServicesSection";
import BlurText from "./BlurText1";
import ServicesSection1 from "./spotlight/ServicesSection1";
import PricingSection from "./titlecard/PricingSection";
import CounterSection from "./CounterSection";
import BlogSection from "./BlogSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Landingview from "./Landingview";
const Main = () => {
  const isMobile = window.innerWidth <= 768;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    "/DOS04476.jpg",
    "/DOS04480.jpg",
    "/DOS04554.jpg",
    "/exterior3.jpg",
    "/exterior8.jpg",
    "/DOS04579.jpg",
    "/DOS04704.jpg",
    "/DOS04805.jpg",
    "/DOS04623.jpg",
    "/DOS04825.jpg",
    "/DOS04629.jpg"

    // Add more images if needed
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* <Navbar/> */}
      <section
        className="hero-wrap d-flex align-items-center justify-content-center text-center"
        style={{
          position: "relative",
          height: "100vh",
          backgroundImage: 'url("/DOS04503.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          padding: "100px 0",
          color: "#fff",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1100px",
            padding: "0 20px",
          }}
        >
          {/* 🔥 Big Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "80px",
              letterSpacing: "10px",
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: "1.1",
              width: "100%",
              marginBottom: "40px",
              background:
                "linear-gradient(90deg, #ff00cc, #ff8800, #ffee00, #00c9ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transform: "scale(1.25)",
              transformOrigin: "center",
              textShadow: "6px 6px 15px rgba(0,0,0,0.4)",
            }}
          >
            Elan Beauty & Spa
          </motion.h1>

          {/* ✨ New Small Text + Buttons Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "2px",
                backgroundColor: "#f4c542",
                margin: "0 auto 20px auto",
              }}
            />

            <p
              style={{
                fontSize: "18px",
                color: "#000000ff",
                opacity: 0.9,
                lineHeight: "1.6",
                marginBottom: "35px",
              }}
            >
            
            </p>

            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {/* Get in Touch */}
              <button
                style={{
                  backgroundColor: "#ff4fa3",
                  border: "none",
                  padding: "12px 35px",
                  borderRadius: "30px",
                  fontSize: "18px",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.backgroundColor = "#ff1e90"; // darker pink on hover
                  e.target.style.boxShadow = "0 0 20px rgba(255,79,163,0.9)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.backgroundColor = "#ff4fa3";
                  e.target.style.boxShadow = "none";
                }}
              >
                Get in Touch
              </button>

              {/* Contact Button */}
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #fff",
                  padding: "12px 35px",
                  borderRadius: "30px",
                  fontSize: "18px",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.backgroundColor = "#ff4fa3"; // pink fill on hover
                  e.target.style.color = "#fff";
                  e.target.style.border = "2px solid #ff4fa3";
                  e.target.style.boxShadow = "0 0 20px rgba(255,79,163,0.8)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#fff";
                  e.target.style.border = "2px solid #fff";
                  e.target.style.boxShadow = "none";
                }}
              >
                Contact
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "88vh",

          backgroundImage: "url('/intro.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // ⭐ FIX

          padding: isMobile ? "80px 20px" : "120px 0",
          color: "#fff",
          textAlign: "left",
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-end",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundColor: "rgba(0, 0, 0, 0.15)", // Increase/decrease for darkness
            zIndex: 1,
          }}
        />
        {/* TEXT BOX */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "600px",
            padding: isMobile ? "0" : "0 80px",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "32px" : "48px",
              fontWeight: "700",
              marginBottom: "25px",
              lineHeight: "1.2",
            }}
          >
            Benefits of Doing Spa & Massage
          </h2>

          <p
            style={{
              fontSize: isMobile ? "15px" : "18px",
              lineHeight: "1.7",
              marginBottom: "35px",
              color: "#000000ff", // ⭐ More readable on dark overlay
            }}
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              maxWidth: isMobile ? "100%" : "100%",
            }}
          >
            {[
              "Spa & Massage boosts brain power",
              "Spa & Massage helps you to breathe better",
              "Spa & Massage improves your strength",
              "Spa & Massage helps you to focus",
              "Spa & Massage helps give meaning to your day",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: isMobile ? "17px" : "20px",
                  color: "#000000ff",
                  marginBottom: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  fontWeight: "500",
                }}
              >
                <span
                  style={{
                    width: "26px",
                    height: "26px",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "12px",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      color: "#000",
                      fontWeight: "bold",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "15px",
                    }}
                  >
                    ✓
                  </span>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Landingview />
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="offer-deal text-center px-2 px-lg-5">
                <div
                  className="img"
                  style={{ backgroundImage: "url(/DOS04690.jpg)" }}
                />
                <div className="text mt-4">
                  <h3 className="mb-4">Book Your Treatment</h3>
                  <p className="mb-5">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#" className="btn btn-white px-4 py-3">
                      {" "}
                      Book A Treatment{" "}
                      <span className="ion-ios-arrow-round-forward" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="offer-deal active text-center px-2 px-lg-5">
                <div
                  className="img"
                  style={{ backgroundImage: "url(/DOS04474.jpg)" }}
                />
                <div className="text mt-4">
                  <h3 className="mb-4">Great Gift Packages</h3>
                  <p className="mb-5">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#" className="btn btn-white px-4 py-3">
                      {" "}
                      Book A Treatment{" "}
                      <span className="ion-ios-arrow-round-forward" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="offer-deal text-center px-2 px-lg-5">
                <div
                  className="img"
                  style={{ backgroundImage: "url(/DOS04545.jpg)" }}
                />
                <div className="text mt-4">
                  <h3 className="mb-4">Special Offer &amp; Deal</h3>
                  <p className="mb-5">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#" className="btn btn-white px-4 py-3">
                      {" "}
                      Book A Treatment{" "}
                      <span className="ion-ios-arrow-round-forward" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <ServicesSection1 />

      <PricingSection showLayout={false} />

      <CounterSection />

      <BlogSection />

      <section className="ftco-gallery ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center">
              <h3 className="subheading">Gallery</h3>
              <h2 className="mb-1">See the latest photos</h2>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {galleryImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  className="gallery image-popup img d-flex align-items-center justify-content-center"
                  style={{
                    backgroundImage: `url(${img})`,
                    height: "250px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => openModal(index)}
                >
                  <div
                    className="icon d-flex align-items-center justify-content-center"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0,0,0,0.4)",
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                  >
                    <span style={{ color: "#fff", fontSize: "24px" }}>🔍</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Modal / Lightbox */}
          {isOpen && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
              }}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 30,
                  fontSize: "30px",
                  color: "#fff",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ×
              </button>

              {/* Prev button */}
              <button
                onClick={prevImage}
                style={{
                  position: "absolute",
                  left: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "40px",
                  color: "#fff",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ‹
              </button>

              {/* Next button */}
              <button
                onClick={nextImage}
                style={{
                  position: "absolute",
                  right: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "40px",
                  color: "#fff",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ›
              </button>

              {/* Image */}
              <img
                src={galleryImages[currentIndex]}
                alt="Gallery"
                style={{
                  maxHeight: "90%",
                  maxWidth: "90%",
                  borderRadius: "10px",
                }}
              />
            </div>
          )}
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
};

export default Main;
