import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
const PricingSection = ({ showLayout = false }) => {
  const plans = [
    {
      title: "Year Card",
      price: "449",
      period: "For 1 Year",
      features: [
        "Face Treatments",
        "Nail Treatments",
        "Medical Treatments",
        "Hair Removal",
      ],
    },
    {
      title: "Monthly Card",
      price: "200",
      period: "For 1 Month",
      features: [
        "Face Treatments",
        "Nail Treatments",
        "Medical Treatments",
        "Hair Removal",
      ],
    },
    {
      title: "Weekly Card",
      price: "85",
      period: "For 1 Week",
      features: [
        "Face Treatments",
        "Nail Treatments",
        "Medical Treatments",
        "Hair Removal",
      ],
    },
  ];

  const sectionStyle = {
    background: "#f8f9fa",
    padding: "60px 0",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "15px",
    padding: "30px 25px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s ease",
    width: "100%",
    maxWidth: "320px",
    textAlign: "center",
  };

  const cardHoverStyle = {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
  };

  const titleStyle = {
    fontSize: "1.3rem",
    fontWeight: 600,
    color: "#ff69b4",
    marginBottom: "15px",
  };

  const priceStyle = {
    fontSize: "2.8rem",
    fontWeight: 700,
    color: "#333",
    marginBottom: "10px",
  };

  const periodStyle = {
    color: "#777",
    fontSize: "0.95rem",
    marginBottom: "20px",
  };

  const featureListStyle = {
    marginBottom: "25px",
    padding: 0,
    listStyle: "none",
  };

  const featureItemStyle = {
    color: "#555",
    padding: "6px 0",
    fontSize: "0.95rem",
    borderBottom: "1px solid #eee",
  };

  const buttonStyle = {
    background: "#ff69b4",
    color: "white",
    border: "none",
    borderRadius: "25px",
    padding: "10px 25px",
    fontWeight: 600,
    fontSize: "1rem",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

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
          {/* Dark Overlay */}
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
          <div style={{ position: "relative", zIndex: 2 }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>
              Our Pricing Plans
            </h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
              {/* Choose the perfect plan for your wellness journey */}
            </p>
            {/* Back to Home button */}
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

      <section style={sectionStyle}>
        <div className="container">
          {/* Section Heading */}
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h3 style={{ color: "#6c757d", marginBottom: "10px" }}>
              Pricing Tables
            </h3>
            <h2 style={{ fontWeight: "700", fontSize: "2rem" }}>
              Subscription Plans
            </h2>
          </div>

          {/* Cards Row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {plans.map((plan, index) => (
              <div
                key={index}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = cardHoverStyle.transform;
                  e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = cardStyle.boxShadow;
                }}
              >
                <h3 style={titleStyle}>{plan.title}</h3>
                <h2 style={priceStyle}>
                  <sup
                    style={{
                      fontSize: "1rem",
                      top: "-10px",
                      position: "relative",
                    }}
                  >
                    $
                  </sup>
                  {plan.price}
                </h2>
                <p style={periodStyle}>{plan.period}</p>
                <ul style={featureListStyle}>
                  {plan.features.map((f, i) => (
                    <li key={i} style={featureItemStyle}>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  style={buttonStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#ff1493";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#ff69b4";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {showLayout && <Footer />}
    </>
  );
};

export default PricingSection;
