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

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "./Footer";
import { Link } from "react-router-dom";
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
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-1.jpg",
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
          backgroundImage: 'url("/bg_1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          padding: "100px 0",
          color: "#fff",
        }}
      >
        {/* 🌑 Dark Overlay */}
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

        {/* ✨ Content */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1100px",
            padding: "0 20px",
          }}
        >
          <div className="row justify-content-center">
            <div className="col-md-10">
              {/* 🔮 Heading */}
              <BlurText
                text="Elan beauty & Spa"
                className="text-center mb-4"
                delay={150}
                animateBy="words"
                direction="top"
                stepDuration={0.35}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: "190px",
                  letterSpacing: "10px",
                  color: "#fff",
                  textTransform: "uppercase",
                  lineHeight: "1.1",
                  textShadow: "6px 6px 15px rgba(0,0,0,0.7)",

                  /* 🔥 Fixes for proper BIG size */
                  display: "block",
                  width: "100%",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  transform: "scale(1.25)", // increase this to make it even bigger
                  transformOrigin: "center",
                }}
              />

              {/* ✨ Gold Divider */}
              <div
                style={{
                  width: "60%",
                  height: "2px",
                  backgroundColor: "#c9a53d",
                  margin: "20px auto 40px",
                }}
              />

              {/* 💬 Subtext */}
              <div className="row justify-content-center">
                <div className="col-md-8 mb-3">
                  <p
                    style={{
                      fontSize: "1.2rem",
                      opacity: 0.9,
                      color: "#000000",
                    }}
                  >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>

              {/* 🎀 Buttons */}
              <div className="mt-4">
                <a
                  href="#"
                  style={{
                    backgroundColor: "#ff69b4",
                    color: "#fff",
                    padding: "14px 40px",
                    borderRadius: "50px",
                    fontWeight: 600,
                    margin: "0 10px",
                    transition: "0.3s",
                    display: "inline-block",
                    border: "none",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#ff85c1")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#ff69b4")
                  }
                >
                  Get in Touch
                </a>

                <Link
                  to="/contact"
                  style={{
                    border: "2px solid #fff",
                    color: "#fff",
                    padding: "14px 40px",
                    borderRadius: "50px",
                    fontWeight: 600,
                    margin: "0 10px",
                    transition: "0.3s",
                    display: "inline-block",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.color = "#ff69b4";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#fff";
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "80vh",

          // ⭐ FIX: Overlay + Image combined so NO FLASH
          backgroundImage:
            "url('/intro.jpg')",

          backgroundSize: "cover",
          backgroundPosition: "center",

          // ❌ Don't use background-attachment fixed on mobile
          backgroundAttachment: isMobile ? "fixed" : "fixed",

          padding: isMobile ? "80px 20px" : "120px 0",
          color: "#fff",
          textAlign: "left",
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-end",
          alignItems: "center",
        }}
      >
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

      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="offer-deal text-center px-2 px-lg-5">
                <div
                  className="img"
                  style={{ backgroundImage: "url(/offer-deal-1.jpg)" }}
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
                  style={{ backgroundImage: "url(/offer-deal-2.jpg)" }}
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
                  style={{ backgroundImage: "url(/offer-deal-3.jpg)" }}
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
