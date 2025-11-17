import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
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
        {/* Background Image */}
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
          <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>Contact Us</h1>
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

      {/* Contact Section */}
      <section
        className="ftco-section contact-section"
        style={{
          padding: "80px 0",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div className="container">
          <div
            className="row justify-content-center"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
            }}
          >
            {/* Contact Info Card */}
            <div
              className="col-md-5 contact-info bg-light p-4"
              style={{
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                flex: "1 1 300px",
              }}
            >
              <h2
                className="h4 mb-4"
                style={{
                  fontFamily: '"Prata", serif',
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Contact Information
              </h2>

              <p>
                <strong>Address:</strong> 198 West 21th Street, Suite 721, New
                York NY 10016
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel://1234567920"
                  style={{ color: "#c59d5f", textDecoration: "none" }}
                >
                  + 1235 2355 98
                </a>
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@yoursite.com"
                  style={{ color: "#c59d5f", textDecoration: "none" }}
                >
                  info@yoursite.com
                </a>
              </p>

              <p>
                <strong>Website:</strong>{" "}
                <a
                  href="#"
                  style={{ color: "#c59d5f", textDecoration: "none" }}
                >
                  yoursite.com
                </a>
              </p>
            </div>

            {/* Contact Form Card */}
            <div
              className="col-md-6"
              style={{
                flex: "1 1 400px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "40px 30px",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                  border: "1px solid #eee",
                }}
              >
                <h3
                  style={{
                    fontFamily: '"Prata", serif',
                    fontSize: "1.5rem",
                    textAlign: "center",
                    marginBottom: "25px",
                    color: "#333",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          borderRadius: "6px",
                          padding: "12px 15px",
                          border: "1px solid #ddd",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={{
                          borderRadius: "6px",
                          padding: "12px 15px",
                          border: "1px solid #ddd",
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: "6px",
                        padding: "12px 15px",
                        border: "1px solid #ddd",
                        width: "100%",
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: "6px",
                        padding: "12px 15px",
                        border: "1px solid #ddd",
                        width: "100%",
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: "6px",
                        padding: "12px 15px",
                        border: "1px solid #ddd",
                        width: "100%",
                        resize: "none",
                      }}
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#c59d5f",
                        border: "none",
                        borderRadius: "30px",
                        padding: "12px 35px",
                        fontWeight: "600",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color: "#fff",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#b1864a")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#c59d5f")
                      }
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contactus;
