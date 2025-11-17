import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <>
    
       
      <Navbar />
      <div className="main-content" style={{ margin: 0, padding: 0 }}>
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
              //   backgroundColor: "rgba(0,0,0,0.3)", // optional overlay
              zIndex: 1,
            }}
          />
          {/* Content */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>About Us</h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
              {/* Learn more about our mission, vision, and team. */}
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
        <div
          style={{
            textAlign: "center",
            padding: "80px 15%",
            background: "rgb(255, 250, 247)",
          }}
        >
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: 700,
              marginBottom: 25,
              fontFamily: '"Playfair Display", serif',
              color: "rgb(34, 34, 34)",
            }}
          >
            Let Your Beauty Bloom With Unbridled Spirit At Luxurious Salon
          </h1>
          <p
            style={{
              maxWidth: 850,
              margin: "0px auto",
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "rgb(85, 85, 85)",
            }}
          >
            Elan signifies the vibrant energy and unwavering commitment we bring
            to your beauty experience. From the moment you step inside our
            sophisticated space, every meticulously crafted corner exudes warmth
            and invites you to ignite your inner glow.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 50,
            padding: "80px 10%",
            background: "rgb(255, 247, 247)",
          }}
        >
          <div
            style={{
              flex: "1 1 0%",
              minWidth: 320,
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "rgb(68, 68, 68)",
            }}
          >
            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                marginBottom: 20,
                fontFamily: '"Playfair Display", serif',
                letterSpacing: "1.5px",
                position: "relative",
                paddingBottom: 10,
                textTransform: "uppercase",
              }}
            >
              ABOUT US
              <span
                style={{
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 60,
                  height: 3,
                  background:
                    "linear-gradient(90deg, rgb(255, 78, 80), rgb(249, 212, 35))",
                  borderRadius: 2,
                }}
              />
            </h2>
            <p>
              At Elan, we believe that true beauty extends far beyond the
              surface.
            </p>
            <p>
              Our team is composed of highly skilled professionals from Korea,
              Vietnam, and Australia, each bringing their unique expertise and
              cultural influences to your experience.
            </p>
            <p>
              Whether you seek stylish makeup artistry, a rejuvenating facial,
              or a non-surgical procedure like Botox or laser treatments, our
              team is dedicated to delivering results tailored to your unique
              needs.
            </p>
            <a
              href="#"
              style={{
                display: "inline-block",
                padding: "14px 34px",
                marginTop: 25,
                background:
                  "linear-gradient(45deg, rgb(255, 78, 80), rgb(249, 212, 35))",
                color: "rgb(255, 255, 255)",
                borderRadius: 30,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: 1,
                transition: "0.3s",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 6px 15px",
              }}
            >
              Learn More
            </a>
          </div>
          <div
            style={{
              flex: "1 1 0%",
              minWidth: 320,
              overflow: "hidden",
              borderRadius: 12,
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 8px 20px",
              transition: "transform 0.4s",
            }}
          >
            <img
              alt="Salon"
              src="https://elanbeauty.in/wp-content/uploads/2024/05/7f506c0eca7c70f111740e4abca1f9f0-e1715715443849-1024x759.jpeg"
              style={{
                width: "100%",
                borderRadius: 12,
                objectFit: "cover",
                transition: "transform 0.4s",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row-reverse wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 50,
            padding: "80px 10%",
            background: "rgb(243, 248, 255)",
          }}
        >
          <div
            style={{
              flex: "1 1 0%",
              minWidth: 320,
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "rgb(68, 68, 68)",
            }}
          >
            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                marginBottom: 20,
                fontFamily: '"Playfair Display", serif',
                letterSpacing: "1.5px",
                position: "relative",
                paddingBottom: 10,
                textTransform: "uppercase",
              }}
            >
              WHY CHOOSE US?
              <span
                style={{
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 60,
                  height: 3,
                  background:
                    "linear-gradient(90deg, rgb(255, 78, 80), rgb(249, 212, 35))",
                  borderRadius: 2,
                }}
              />
            </h2>
            <p>
              <strong>Expert Stylists:</strong> Modernized with trends. <br />
              <strong>Premium Products:</strong> Only top-rated trusted brands.{" "}
              <br />
              <strong>Personalized Consultations:</strong> Tailored services.{" "}
              <br />
              <strong>Relaxing Atmosphere:</strong> A serene, inviting space.{" "}
              <br />
              <strong>Korean Skincare:</strong> Radiant, glass skin techniques.{" "}
              <br />
              <strong>USA-Made Nails:</strong> Long-lasting manicures.
            </p>
          </div>
          <div
            style={{
              flex: "1 1 0%",
              minWidth: 320,
              overflow: "hidden",
              borderRadius: 12,
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 8px 20px",
              transition: "transform 0.4s",
            }}
          >
            <img
              alt="Why Choose Us"
              src="https://elanbeauty.in/wp-content/uploads/2024/05/32a00240f93689cfe1ae42e43662aac1-1024x712.jpeg"
              style={{
                width: "100%",
                borderRadius: 12,
                objectFit: "cover",
                transition: "transform 0.4s",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 50,
            padding: "80px 10%",
            background: "rgb(255, 253, 242)",
          }}
        >
          <div
            style={{
              flex: "1 1 0%",
              minWidth: 320,
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "rgb(68, 68, 68)",
            }}
          >
            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                marginBottom: 20,
                fontFamily: '"Playfair Display", serif',
                letterSpacing: "1.5px",
                position: "relative",
                paddingBottom: 10,
                textTransform: "uppercase",
              }}
            >
              TESTIMONIALS
              <span
                style={{
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 60,
                  height: 3,
                  background:
                    "linear-gradient(90deg, rgb(255, 78, 80), rgb(249, 212, 35))",
                  borderRadius: 2,
                }}
              />
            </h2>
            <p>
              “From the moment I entered E’LAN, I was greeted by a team of
              skilled stylists ready to work their magic. The consultation was
              detailed, ensuring my vision was understood. The service itself
              was precise, leaving my hair transformed and my skin recharged.”
            </p>
            <p>
              Beauty is just one piece. Let’s build your whole self-love puzzle.
            </p>
          </div>
          <div
            style={{
              flex: "1 1 0%",
              minWidth: 320,
              overflow: "hidden",
              borderRadius: 12,
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 8px 20px",
              transition: "transform 0.4s",
            }}
          >
            <img
              alt="Customer"
              src="https://elanbeauty.in/wp-content/uploads/2024/05/Rectangle-6.png"
              style={{
                width: "100%",
                borderRadius: 12,
                objectFit: "cover",
                transition: "transform 0.4s",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row-reverse wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 50,
            padding: "80px 10%",
            background: "rgb(238, 253, 247)",
          }}
        >
          <div
            style={{
              flex: "1 1 0%",
              minWidth: 320,
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "rgb(68, 68, 68)",
            }}
          >
            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                marginBottom: 20,
                fontFamily: '"Playfair Display", serif',
                letterSpacing: "1.5px",
                position: "relative",
                paddingBottom: 10,
                textTransform: "uppercase",
              }}
            >
              PERMANENT MAKEUP &amp; TATTOO
              <span
                style={{
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 60,
                  height: 3,
                  background:
                    "linear-gradient(90deg, rgb(255, 78, 80), rgb(249, 212, 35))",
                  borderRadius: 2,
                }}
              />
            </h2>
            <p>
              Tattoos etch stories not just on skin but also on your soul. Our
              skilled Vietnamese artists ensure designs that match your vision.
            </p>
          </div>
          <div
            style={{
              flex: "1 1 0%",
              minWidth: 320,
              overflow: "hidden",
              borderRadius: 12,
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 8px 20px",
              transition: "transform 0.4s",
            }}
          >
            <img
              alt="Tattoo Artist"
              src="https://elanbeauty.in/wp-content/uploads/2024/05/New-Project-1-772x1024.jpg"
              style={{
                width: "100%",
                borderRadius: 12,
                objectFit: "cover",
                transition: "transform 0.4s",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 50,
            padding: "80px 10%",
            background: "rgb(255, 247, 240)",
          }}
        >
          <div
            style={{
              flex: "1 1 0%",
              minWidth: 320,
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "rgb(68, 68, 68)",
            }}
          >
            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                marginBottom: 20,
                fontFamily: '"Playfair Display", serif',
                letterSpacing: "1.5px",
                position: "relative",
                paddingBottom: 10,
                textTransform: "uppercase",
              }}
            >
              OUR SERVICES
              <span
                style={{
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 60,
                  height: 3,
                  background:
                    "linear-gradient(90deg, rgb(255, 78, 80), rgb(249, 212, 35))",
                  borderRadius: 2,
                }}
              />
            </h2>
            <p>
              <b>Hair:</b> Chic cuts, vibrant colors, elegant updos. <br />
              <b>Makeup:</b> From subtle to dramatic transformations. <br />
              <b>Nails:</b> Luxurious manicures and pedicures. <br />
              <b>Spa:</b> Massages and body treatments. <br />
              <b>Skin:</b> Radiant facials tailored to your needs. <br />
              <b>Botox:</b> Reduce wrinkles and fine lines. <br />
              <b>Laser:</b> Painless, effective hair removal. <br />
              <b>Foot Massage:</b> Relaxation and circulation boost. <br />
              <b>Waxing:</b> Smooth, painless waxing. <br />
              <b>Academy:</b> Professional beauty training.
            </p>
            <a
              href="#"
              style={{
                display: "inline-block",
                padding: "14px 34px",
                marginTop: 25,
                background:
                  "linear-gradient(45deg, rgb(255, 78, 80), rgb(249, 212, 35))",
                color: "rgb(255, 255, 255)",
                borderRadius: 30,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: 1,
                transition: "0.3s",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 6px 15px",
              }}
            >
              Learn More
            </a>
          </div>
          <div
            style={{
              flex: "1 1 0%",
              minWidth: 320,
              overflow: "hidden",
              borderRadius: 12,
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 8px 20px",
              transition: "transform 0.4s",
            }}
          >
            <img
              alt="Our Services"
              src="https://elanbeauty.in/wp-content/uploads/2024/05/New-Project-1-772x1024.jpg"
              style={{
                width: "100%",
                borderRadius: 12,
                objectFit: "cover",
                transition: "transform 0.4s",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
