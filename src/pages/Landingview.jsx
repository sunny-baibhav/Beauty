"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ==========================
// COLOURFUL TEXT COMPONENT
// ==========================
export function ColourfulText({ text }) {
  const colors = [
    "rgb(131, 179, 32)",
    "rgb(47, 195, 106)",
    "rgb(42, 169, 210)",
    "rgb(4, 112, 202)",
    "rgb(107, 10, 255)",
    "rgb(183, 0, 218)",
    "rgb(218, 0, 171)",
    "rgb(230, 64, 92)",
    "rgb(232, 98, 63)",
    "rgb(249, 129, 47)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${count}-${index}`}
          initial={{ y: 0 }}
          animate={{
            color: currentColors[index % currentColors.length],
            y: [0, -3, 0],
            scale: [1, 1.01, 1],
            filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
            opacity: [1, 0.8, 1],
          }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="inline-block whitespace-pre font-sans tracking-tight"
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}

// ==========================
// LANDING PAGE COMPONENT
// ==========================
const Landingview = () => {
  const navigate = useNavigate(); // ✔ Hook inside component

  const handlechange = () => {
    navigate("/landing-page?type=1");
  };

  const handlechange1 = () => {
    navigate("/?type=2");
  };

  return (
    <>
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          background: "#f5f5f5",
          padding: "80px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* HEADING */}
        <h1
          className="hero-title"
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            alignContent: "center",
            flexDirection: "column",
          }}
        >
          We Have
          <span className="highlight-anim">
            <ColourfulText text=" Two Stores " />
          </span>
          With Different Locations
        </h1>

        {/* IMAGES */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            width: "100%",
            maxWidth: "1300px",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          {/* IMAGE CARD 1 */}
          <div className="img-card" onClick={handlechange}>
            <img
              src="/edinburgh-scotland-january-17-2020-600nw-2096134474.webp"
              alt="Store 1"
              style={{
                width: "100%",
                height: "520px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
            <h3 style={{ textAlign: "center", marginTop: "15px" }}>Store 1</h3>
          </div>

          {/* IMAGE CARD 2 */}
          <div className="img-card" onClick={handlechange1}>
            <img
              src="/istockphoto-1856117770-612x612.jpg"
              alt="Store 2"
              style={{
                width: "100%",
                height: "520px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
            <h3 style={{ textAlign: "center", marginTop: "15px" }}>Store 2</h3>
          </div>
        </div>
      </section>

      <style>{`
        .hero-title {
          font-size: 48px;
          font-weight: bold;
          color: #333;
          text-align: center;
          max-width: 90%;
          line-height: 1.2;
        }

        .highlight-anim {
          animation: shine 3s infinite linear;
          display: inline-block;
        }

        @keyframes shine {
          0% { filter: brightness(0.8); }
          50% { filter: brightness(1.6); }
          100% { filter: brightness(0.8); }
        }

        .img-card {
          width: 45%;
          min-width: 320px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          border-radius: 20px;
          cursor: pointer;
        }

        .img-card:hover {
          transform: scale(1.03);
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 32px;
            margin-top: 20px;
          }
          .img-card {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
};

export default Landingview;
