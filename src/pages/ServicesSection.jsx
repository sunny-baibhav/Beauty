import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: "spa", color: "#e08e45", title: "Aromatherapy" },
    { icon: "eco", color: "#4CAF50", title: "Skin Care" },
    { icon: "self_improvement", color: "#8e44ad", title: "Herbal Spa" },
    { icon: "favorite", color: "#ff7675", title: "Body Massage" },
  ];

  return (
    <section
      ref={sectionRef}
      className="ftco-section ftco-section-services bg-light py-5"
      style={{
        perspective: "1000px",
        transition: "transform 1s ease, opacity 1s ease",
        transform: isVisible
          ? "rotateY(0deg) scale(1)"
          : "rotateY(15deg) scale(0.9)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="container-fluid px-md-5">
        <div className="row">
          {services.map((item, i) => (
            <div key={i} className="col-md-6 col-lg-3 mb-4">
              <motion.div
                className="services text-center bg-white rounded-3 shadow-sm p-4"
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                animate={
                  isVisible
                    ? { opacity: 1, y: 0, rotateX: 0 }
                    : { opacity: 0, y: 40, rotateX: 15 }
                }
                transition={{ duration: 0.8, delay: i * 0.2 }}
                style={{
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(135deg, #fff, #f9f9f9)",
                }}
              >
                <div className="icon mb-3 d-flex justify-content-center align-items-center">
                  <span
                    className="material-icons"
                    style={{
                      fontSize: "48px",
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </span>
                </div>
                <div className="text mt-3">
                  <h4 className="fw-bold">{item.title}</h4>
                  <p className="text-muted">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country.
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
