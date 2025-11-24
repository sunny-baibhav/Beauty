import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#fdf8ee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 30px",
        }}
      >
        {/* INLINE MOBILE CSS */}
        <style>
          {`
    @media (max-width: 768px) {
      .elan-wrapper {
        flex-direction: column !important;
        text-align: center !important;
        gap: 30px !important;
      }

      .elan-left {
        width: 100% !important;
        display: flex;
        flex-direction: column;
        align-items: center !important;
        order: 1 !important;
      }

      .elan-image-box {
        order: 2 !important;
      }

      .elan-left h1 {
        font-size: 32px !important;
      }

      .elan-left p {
        font-size: 16px !important;
      }

      .elan-image {
        max-width: 260px !important;
        width: 100% !important;
        margin: 0 auto !important;
      }
    }
  `}
        </style>

        <div
          className="elan-wrapper"
          style={{
            width: "100%",
            maxWidth: "1300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          {/* RIGHT IMAGE FIRST ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="elan-image-box"
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              order: 2, // Desktop: image stays right
            }}
          >
            <img
              className="elan-image"
              src="/landingpage.png"
              alt="E'LAN Logo"
              style={{
                width: "100%",
                maxWidth: "450px",
                borderRadius: "12px",
              }}
            />
          </motion.div>

          {/* LEFT CONTENT */}
          <motion.div
            className="elan-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              flex: 1,
              textAlign: "left",
              order: 1, // Desktop: content first
            }}
          >
            <h1
              style={{
                fontSize: "52px",
                color: "#482A1E",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Elegant Beauty with E'LAN
            </h1>

            <p
              style={{
                fontSize: "20px",
                color: "#6f4e37",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              Experience luxury and elegance with our premium beauty and style
              services crafted for a timeless look.
            </p>

            <button
              style={{
                padding: "14px 32px",
                borderRadius: "6px",
                backgroundColor: "#482A1E",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              Explore Now
            </button>
          </motion.div>
        </div>
      </section>

      <style>
        {`
          @media (max-width: 768px) {
            .spa-wrapper {
              flex-direction: column !important;
              gap: 25px !important;
            }

            .spa-left {
              max-width: 100% !important;
            }

            .big-img {
              height: 260px !important;
            }

            .small-img {
              height: 140px !important;
            }

            .spa-right {
              width: 100% !important;
              margin-top: 10px !important;
            }

            .spa-title {
              font-size: 36px !important;
            }
          }
        `}
      </style>

      {/* MAIN SECTION */}
      <section
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#fdf8ee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 30px",
        }}
      >
        <div
          className="spa-wrapper"
          style={{
            width: "100%",
            maxWidth: "1300px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "40px",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT — IMAGE GRID */}
          <motion.div
            className="spa-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              flex: 1,
              maxWidth: "500px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* BIG IMAGE */}
            <img
              className="big-img"
              src="/istockphoto-1308841863-612x612.jpg"
              alt="Main Spa Image"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />

            {/* SMALL IMAGES GRID */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "15px",
              }}
            >
              <img
                className="small-img"
                src="/CAI_1170_original.jpg"
                alt="small-1"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />

              <img
                className="small-img"
                src="/capri-pedi-spa-luxury-pedicure-chair.png"
                alt="small-2"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />

              <img
                className="small-img"
                src="/istockphoto-1308841863-612x612.jpg"
                alt="small-3"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />

              <img
                className="small-img"
                src="/CAI_1170_original.jpg"
                alt="small-4"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT — CONTENT */}
          <motion.div
            className="spa-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              flex: 1,
              textAlign: "left",
            }}
          >
            <h1
              className="spa-title"
              style={{
                fontSize: "52px",
                color: "#482A1E",
                fontWeight: "700",
                marginBottom: "30px",
                fontFamily: "cursive",
              }}
            >
              Spa Pedicure
            </h1>

            {/* REGULAR BOX */}
            <div
              style={{
                border: "2px solid #eac59a",
                padding: "25px",
                borderRadius: "10px",
                marginBottom: "40px",
                backgroundColor: "#fffaf3",
              }}
            >
              <h2
                style={{
                  fontSize: "26px",
                  color: "#482A1E",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                E'LAN REGULAR PEDICURE
              </h2>

              <p
                style={{
                  color: "#6f4e37",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                <strong>Duration:</strong> 30–35 mins
                <span style={{ float: "right" }}>
                  <strong>Price:</strong> $45
                </span>
              </p>

              <ul
                style={{
                  color: "#6f4e37",
                  marginTop: "10px",
                  lineHeight: "1.8",
                }}
              >
                <li>Sea salt relaxation</li>
                <li>Cuticle removal</li>
                <li>Buffing & shaping</li>
                <li>Callus removal</li>
                <li>Relaxation massage</li>
                <li>Hydrating cream</li>
                <li>Polish included</li>
              </ul>
            </div>

            {/* PREMIUM BOX */}
            <div
              style={{
                border: "2px solid #eac59a",
                padding: "25px",
                borderRadius: "10px",
                backgroundColor: "#fffaf3",
              }}
            >
              <h2
                style={{
                  fontSize: "26px",
                  color: "#482A1E",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                E'LAN PREMIUM PEDICURE
              </h2>

              <p
                style={{
                  color: "#6f4e37",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                <strong>Duration:</strong> 45–50 mins
                <span style={{ float: "right" }}>
                  <strong>Price:</strong> $60
                </span>
              </p>

              <ul
                style={{
                  color: "#6f4e37",
                  marginTop: "10px",
                  lineHeight: "1.8",
                }}
              >
                <li>Pink sea salt soak</li>
                <li>Fruit & flower soak</li>
                <li>Exfoliating scrubs</li>
                <li>Steam treatment</li>
                <li>Mask therapy</li>
                <li>Candle oil massage</li>
                <li>Moisturizing finish</li>
                <li>Polish included</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 4 SIDE LOWER SECTIONS ================= */}
      {/* <section
        style={{
          width: "100%",
          padding: "60px 20px",
          backgroundColor: "#fffaf3",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "25px",
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundColor: "#fff",
                padding: "25px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <h3 style={{ color: "#482A1E", marginBottom: "10px" }}>
                Feature {item}
              </h3>
              <p style={{ color: "#6f4e37", fontSize: "15px" }}>
                Premium quality & elegant design to enhance your beauty.
              </p>
            </motion.div>
          ))}
        </div>
      </section> */}
      <Footer />
    </>
  );
};

export default LandingPage;
