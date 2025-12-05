import React, { useEffect, useState, useRef } from "react";
import BgImage from "./BgImage";

const CounterSection = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  const counters = [
    { number: 2560, label: "Happy Customers" },
    { number: 60, label: "Treatments" },
    { number: 50, label: "Years of Experience" },
    { number: 100, label: "Lesson Conducted" },
  ];

  // Detect when section appears in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Count animation logic
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    if (!startCount) return;

    const duration = 2000; // 2 seconds
    const interval = 50;

    counters.forEach((counter, i) => {
      let start = 0;
      const end = counter.number;
      const step = Math.ceil(end / (duration / interval));

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = start;
          return newCounts;
        });
      }, interval);
    });
  }, [startCount]);

  return (
    <section
      ref={sectionRef}
      id="section-counter"
      style={{
        position: "relative",
        ...BgImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "100px 0",
        color: "#fff",
      }}
    >
      {/* Overlay */}
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
          textAlign: "center",
        }}
      >
        <div className="row justify-content-center">
          {counters.map((item, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-3"
              style={{
                marginBottom: "30px",
              }}
            >
              <div style={{ fontSize: "48px", fontWeight: "700" , color: "#d939be" }}>
                {counts[i]}
              </div>
              <div style={{ fontSize: "18px", opacity: 0.9 , color: "#d939be" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
