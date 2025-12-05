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
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="elan-image-box"
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              order: 2,
            }}
          >
            <img
              className="elan-image"
              src="/DOS04550.jpg"
              alt="E'LAN Logo"
              style={{
                width: "100%",
                maxWidth: "450px",
                borderRadius: "12px",
              }}
            />
          </motion.div>

          <motion.div
            className="elan-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              flex: 1,
              textAlign: "left",
              order: 1,
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
    .pedicure-heading,
    .manicure-heading,
    .acrylic-heading,
    .gel-heading,
    .sns-heading {
      display: none;
    }

    @media (max-width: 768px) {
      .spa-wrapper {
        flex-direction: column !important;
        gap: 25px !important;
      }
      .pedicure-heading,
      .manicure-heading,
      .acrylic-heading,
      .gel-heading,
      .sns-heading {
        display: block !important;
      }
      .pedicure-content h1,
      .manicure-content h1,
      .acrylic-content h1,
      .gel-content h1,
      .sns-content h1 {
        display: none !important;
      }
      .pedicure-heading {
        order: 1 !important;
        width: 100% !important;
        text-align: center !important;
      }
      .pedicure-images {
        order: 2 !important;
        max-width: 100% !important;
      }
      .pedicure-content {
        order: 3 !important;
        width: 100% !important;
      }
      .manicure-heading {
        order: 1 !important;
        width: 100% !important;
        text-align: center !important;
      }
      .manicure-content {
        order: 2 !important;
        width: 100% !important;
      }
      .manicure-images {
        order: 3 !important;
        max-width: 100% !important;
      }
      .acrylic-heading {
        order: 1 !important;
        width: 100% !important;
        text-align: center !important;
      }
      .acrylic-images {
        order: 2 !important;
        max-width: 100% !important;
      }
      .acrylic-content {
        order: 3 !important;
        width: 100% !important;
      }
      .gel-heading {
        order: 1 !important;
        width: 100% !important;
        text-align: center !important;
      }
      .gel-content {
        order: 2 !important;
        width: 100% !important;
      }
      .gel-images {
        order: 3 !important;
        max-width: 100% !important;
      }
      .sns-heading {
        order: 1 !important;
        width: 100% !important;
        text-align: center !important;
      }
      .sns-images {
        order: 2 !important;
        max-width: 100% !important;
      }
      .sns-content {
        order: 3 !important;
        width: 100% !important;
      }
      .big-img {
        height: 260px !important;
      }
      .small-img {
        height: 140px !important;
      }
      .spa-title {
        font-size: 36px !important;
      }
    }
  `}
      </style>

      {/* ================= SPA PEDICURE SECTION ================= */}
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
          <div className="pedicure-heading" style={{ width: "100%", display: "none" }}>
            <h1 className="spa-title" style={{ fontSize: "52px", color: "#482A1E", fontWeight: "700", marginBottom: "30px", fontFamily: "cursive" }}>
              Spa Pedicure
            </h1>
          </div>

          <motion.div
            className="spa-left pedicure-images"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1, maxWidth: "500px", display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <img className="big-img" src="/istockphoto-1308841863-612x612.jpg" alt="Main Spa Image" style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "20px" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" }}>
              <img className="small-img" src="/CAI_1170_original.jpg" alt="small-1" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
              <img className="small-img" src="/capri-pedi-spa-luxury-pedicure-chair.png" alt="small-2" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
              <img className="small-img" src="/istockphoto-1308841863-612x612.jpg" alt="small-3" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
              <img className="small-img" src="/CAI_1170_original.jpg" alt="small-4" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
            </div>
          </motion.div>

          <motion.div
            className="spa-right pedicure-content"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1, textAlign: "left" }}
          >
            <h1 className="spa-title" style={{ fontSize: "52px", color: "#482A1E", fontWeight: "700", marginBottom: "30px", fontFamily: "cursive" }}>
              Spa Pedicure
            </h1>
            <div style={{ border: "2px solid #eac59a", padding: "25px", borderRadius: "10px", marginBottom: "40px", backgroundColor: "#fffaf3" }}>
              <h2 style={{ fontSize: "26px", color: "#482A1E", fontWeight: "700", marginBottom: "10px" }}>E'LAN REGULAR PEDICURE</h2>
              <p style={{ color: "#6f4e37", fontSize: "16px", marginBottom: "10px" }}>
                <strong>Duration:</strong> 30–35 mins<span style={{ float: "right" }}><strong>Price:</strong> $45</span>
              </p>
              <ul style={{ color: "#6f4e37", marginTop: "10px", lineHeight: "1.8" }}>
                <li>Sea salt relaxation</li>
                <li>Cuticle removal</li>
                <li>Buffing & shaping</li>
                <li>Callus removal</li>
                <li>Relaxation massage</li>
                <li>Hydrating cream</li>
                <li>Polish included</li>
              </ul>
            </div>
            <div style={{ border: "2px solid #eac59a", padding: "25px", borderRadius: "10px", backgroundColor: "#fffaf3" }}>
              <h2 style={{ fontSize: "26px", color: "#482A1E", fontWeight: "700", marginBottom: "10px" }}>E'LAN PREMIUM PEDICURE</h2>
              <p style={{ color: "#6f4e37", fontSize: "16px", marginBottom: "10px" }}>
                <strong>Duration:</strong> 45–50 mins<span style={{ float: "right" }}><strong>Price:</strong> $60</span>
              </p>
              <ul style={{ color: "#6f4e37", marginTop: "10px", lineHeight: "1.8" }}>
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

      {/* ================= MANICURE SECTION ================= */}
      <section style={{ width: "100%", minHeight: "100vh", backgroundColor: "#fdf8ee", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 30px" }}>
        <div className="spa-wrapper" style={{ width: "100%", maxWidth: "1300px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "40px", flexDirection: "row", flexWrap: "wrap" }}>
          <div className="manicure-heading" style={{ width: "100%", display: "none" }}>
            <h1 className="spa-title" style={{ fontSize: "52px", color: "#482A1E", fontWeight: "700", marginBottom: "30px", fontFamily: "cursive", textAlign: "center" }}>Manicure</h1>
          </div>
          <motion.div className="spa-left manicure-content" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} style={{ flex: 1, textAlign: "left", maxWidth: "620px" }}>
            <h1 className="spa-title" style={{ fontSize: "52px", color: "#482A1E", fontWeight: "700", marginBottom: "30px", fontFamily: "cursive", textAlign: "left" }}>Manicure</h1>
            <div style={{ border: "2px solid #eac59a", padding: "25px", borderRadius: "10px", marginBottom: "40px", backgroundColor: "#fffaf3" }}>
              <h2 style={{ fontSize: "26px", color: "#482A1E", fontWeight: "700", marginBottom: "10px" }}>E'LAN CLASSIC MANICURE</h2>
              <p style={{ color: "#6f4e37", fontSize: "16px", marginBottom: "10px" }}><strong>Duration:</strong> 25–30 mins<span style={{ float: "right" }}><strong>Price:</strong> $45</span></p>
              <ul style={{ color: "#6f4e37", marginTop: "10px", lineHeight: "1.8" }}>
                <li>Softener soak to nourish your skin</li>
                <li>Expert cuticle removal for a clean finish</li>
                <li>Precise buffing, shaping and cuticle oil application</li>
                <li>Relaxation massage to soothe tired hands</li>
                <li>Hydrating softener cream</li>
                <li>Polish included for a flawless finish</li>
              </ul>
            </div>
            <div style={{ border: "2px solid #eac59a", padding: "25px", borderRadius: "10px", backgroundColor: "#fffaf3" }}>
              <h2 style={{ fontSize: "26px", color: "#482A1E", fontWeight: "700", marginBottom: "10px" }}>E'LAN PREMIUM MANICURE</h2>
              <p style={{ color: "#6f4e37", fontSize: "16px", marginBottom: "10px" }}><strong>Duration:</strong> 45–50 mins<span style={{ float: "right" }}><strong>Price:</strong> $65</span></p>
              <ul style={{ color: "#6f4e37", marginTop: "10px", lineHeight: "1.8" }}>
                <li>Fruit & flowers soak to soothe and refresh</li>
                <li>Expert cuticle removal and meticulous shaping</li>
                <li>Buffing, shaping and cuticle oil application</li>
                <li>Exfoliating hand mask for rejuvenated skin</li>
                <li>Nourishing C moisturizer</li>
                <li>Polish included for a perfect finish</li>
                <li>Hand mask for deep hydration</li>
                <li>Relaxation massage with candle oil</li>
              </ul>
            </div>
          </motion.div>
          <motion.div className="spa-right manicure-images" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} style={{ flex: 1, maxWidth: "500px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <img className="big-img" src="/DOS04623.jpg" alt="Main Image" style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "20px" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" }}>
              <img className="small-img" src="/DOS04544.jpg" alt="small-1" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
              <img className="small-img" src="/DOS04575.jpg" alt="small-2" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
              <img className="small-img" src="/DOS04571.jpg" alt="small-3" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
              <img className="small-img" src="/DOS04590.jpg" alt="small-4" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ACRYLIC EXTENSIONS SECTION ================= */}
      <section style={{ width: "100%", minHeight: "100vh", backgroundColor: "#fdf8ee", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 30px" }}>
        <div className="spa-wrapper" style={{ width: "100%", maxWidth: "1300px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "40px", flexDirection: "row", flexWrap: "wrap" }}>
          <div className="acrylic-heading" style={{ width: "100%", display: "none" }}>
            <h1 style={{ fontSize: "52px", color: "#482A1E", fontWeight: "700", marginBottom: "30px", fontFamily: "cursive", textAlign: "center" }}>Acrylic Extensions Nails</h1>
          </div>
          <motion.div className="spa-left acrylic-images" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} style={{ flex: 1, maxWidth: "500px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <img className="big-img" src="/Nail-Extensions-.jpg.webp" alt="Main Spa Image" style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "20px" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" }}>
              <img className="small-img" src="/DOS04711.jpg" alt="small-1" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
              <img className="small-img" src="/DOS04579.jpg" alt="small-2" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
              <img className="small-img" src="/DOS04543.jpg" alt="small-3" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
              <img className="small-img" src="/DOS04550.jpg" alt="small-4" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
            </div>
          </motion.div>
          <motion.div className="spa-right acrylic-content" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} style={{ flex: 1, textAlign: "left", maxWidth: "620px" }}>
            <h1 style={{ fontSize: "52px", color: "#482A1E", fontWeight: "700", marginBottom: "30px", fontFamily: "cursive" }}>Acrylic Extensions Nails</h1>
            <div style={{ border: "2px solid #eac59a", padding: "25px", borderRadius: "10px", marginBottom: "40px", backgroundColor: "#fffaf3" }}>
              <h2 style={{ fontSize: "26px", color: "#482A1E", fontWeight: "700", marginBottom: "10px", textTransform: "uppercase" }}>Full Set Acrylic Extensions with Polish</h2>
              <p style={{ color: "#6f4e37", fontSize: "16px", marginBottom: "10px" }}><span style={{ float: "right" }}><strong>Price:</strong> $60</span></p>
              <ul style={{ color: "#6f4e37", marginTop: "10px", lineHeight: "1.8" }}>
                <li>Customized acrylic extension application</li>
                <li>Expert shaping and length customization</li>
                <li>Choice of polish colour</li>
              </ul>
            </div>
            <div style={{ border: "2px solid #eac59a", padding: "25px", borderRadius: "10px", marginBottom: "40px", backgroundColor: "#fffaf3" }}>
              <h2 style={{ fontSize: "26px", color: "#482A1E", fontWeight: "700", marginBottom: "10px", textTransform: "uppercase" }}>Overlay on Natural Nails with Polish</h2>
              <p style={{ color: "#6f4e37", fontSize: "16px", marginBottom: "10px" }}><span style={{ float: "right" }}><strong>Price:</strong> $55</span></p>
              <ul style={{ color: "#6f4e37", marginTop: "10px", lineHeight: "1.8" }}>
                <li>Overlay application on natural nails</li>
                <li>Expert shaping and polishing</li>
              </ul>
            </div>
            <div style={{ border: "2px solid #eac59a", padding: "25px", borderRadius: "10px", backgroundColor: "#fffaf3" }}>
              <h2 style={{ fontSize: "26px", color: "#482A1E", fontWeight: "700", marginBottom: "10px", textTransform: "uppercase" }}>Refill</h2>
              <p style={{ color: "#6f4e37", fontSize: "16px", marginBottom: "10px" }}><span style={{ float: "right" }}><strong>Price:</strong> $45</span></p>
              <ul style={{ color: "#6f4e37", marginTop: "10px", lineHeight: "1.8" }}>
                <li>Re-balancing of acrylic overlay</li>
                <li>Shaping and polishing</li>
              </ul>
              <p style={{ marginTop: "10px", color: "#6f4e37", fontSize: "14px" }}>*Prices are inclusive of all taxes.</p>
            </div>
          </motion.div>
        </div>
      </section>


{/* // gel builder */}
 <section style={{ width: "100%", minHeight: "100vh", backgroundColor: "#fdf8ee", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 30px" }}>
        <div className="spa-wrapper" style={{ width: "100%", maxWidth: "1300px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "40px", flexDirection: "row", flexWrap: "wrap" }}>
          <div className="gel-heading" style={{ width: "100%", display: "none" }}>
            <h1 style={{ fontSize: "52px", color: "#482A1E", fontWeight: "700", marginBottom: "30px", fontFamily: "cursive", textAlign: "center" }}>Gel Builder Nails</h1>
          </div>
          <motion.div className="spa-left gel-content" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} style={{ flex: 1, maxWidth: "600px", textAlign: "left" }}>
            <h1 style={{ fontSize: "52px", color: "#482A1E", fontWeight: "700", marginBottom: "30px", fontFamily: "cursive" }}>Gel Builder Nails</h1>
            <div style={{ border: "2px solid #eac59a", padding: "25px", borderRadius: "10px", marginBottom: "35px", backgroundColor: "#fffaf3" }}>
              <h2 style={{ fontSize: "26px", color: "#8B0000", fontWeight: "700", marginBottom: "10px", textTransform: "uppercase" }}>Gel Builder Extension With Polish</h2>
              <p style={{ fontSize: "16px", color: "#6f4e37" }}><span style={{ float: "right" }}><strong>Price:</strong> $70</span></p>
              <p style={{ marginTop: "10px", color: "#6f4e37" }}>Get beautiful gel builder extensions with a polish finish:</p>
              <ul style={{ color: "#6f4e37", marginTop: "10px", lineHeight: "1.8" }}>
                <li>Customized gel builder extension application</li>
                <li>Expert shaping and length customization</li>
                <li>Choice of polish color</li>
              </ul>
            </div>
            <div style={{ border: "2px solid #eac59a", padding: "25px", borderRadius: "10px", marginBottom: "35px", backgroundColor: "#fffaf3" }}>
              <h2 style={{ fontSize: "26px", color: "#8B0000", fontWeight: "700", marginBottom: "10px", textTransform: "uppercase" }}>Overlay on Natural Nails With Polish</h2>
              <p style={{ fontSize: "16px", color: "#6f4e37" }}><span style={{ float: "right" }}><strong>Price:</strong> $65</span></p>
              <p style={{ marginTop: "10px", color: "#6f4e37" }}>Enhance the natural beauty of your nails with acrylic overlay:</p>
              <ul style={{ color: "#6f4e37", marginTop: "10px", lineHeight: "1.8" }}>
                <li>Overlay application on natural nails</li>
                <li>Expert shaping and polishing</li>
              </ul>
            </div>
            <div style={{ border: "2px solid #eac59a", padding: "25px", borderRadius: "10px", backgroundColor: "#fffaf3" }}>
              <h2 style={{ fontSize: "26px", color: "#8B0000", fontWeight: "700", marginBottom: "10px", textTransform: "uppercase" }}>Refill</h2>
              <p style={{ fontSize: "16px", color: "#6f4e37" }}><span style={{ float: "right" }}><strong>Price:</strong> $55</span></p>
              <p style={{ marginTop: "10px", color: "#6f4e37" }}>Maintain your gel builder nails:</p>
              <ul style={{ color: "#6f4e37", marginTop: "10px", lineHeight: "1.8" }}>
                <li>Re-balancing of gel builder overlay</li>
                <li>Shaping and polishing</li>
              </ul>
            </div>
          </motion.div>
          <motion.div className="spa-right gel-images" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} style={{ flex: 1, maxWidth: "500px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <img src="/DOS04707.jpg" alt="Main Spa" style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "20px" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" }}>
              <img src="/DOS04711.jpg" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
              <img src="/DOS04713.jpg" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
              <img src="/DOS04722.jpg" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
              <img src="/DOS04716.jpg" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "15px" }} />
            </div>
          </motion.div>
        </div>
      </section>


{/* ================= SNS POWDER SECTION ================= */}
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
    {/* HEADING (Mobile: Order 1) */}
    <div className="sns-heading" style={{ width: "100%", display: "none" }}>
      <h1
        style={{
          fontSize: "52px",
          color: "#482A1E",
          fontWeight: "700",
          marginBottom: "30px",
          fontFamily: "cursive",
          textAlign: "center",
        }}
      >
        SNS Powder
      </h1>
    </div>

    {/* LEFT — IMAGE GRID (Mobile: Order 2) */}
    <motion.div
      className="spa-left sns-images"
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
      <img
        src="/DOS04762.jpg"
        alt="Main Spa"
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "15px",
        }}
      >
        <img
          src="/DOS04706.jpg"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />

        <img
          src="/DOS04704.jpg"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />

        <img
          src="/DOS04566.jpg"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />

        <img
          src="/DOS04546.jpg"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
      </div>
    </motion.div>

    {/* RIGHT — SNS POWDER CONTENT (Mobile: Order 3) */}
    <motion.div
      className="spa-right sns-content"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        flex: 1,
        maxWidth: "600px",
        textAlign: "left",
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          color: "#482A1E",
          fontWeight: "700",
          marginBottom: "30px",
          fontFamily: "cursive",
          textAlign: "center",
        }}
      >
        SNS Powder
      </h1>

      {/* FULL SET EXTENSION */}
      <div
        style={{
          border: "2px solid #eac59a",
          padding: "25px",
          borderRadius: "10px",
          marginBottom: "35px",
          backgroundColor: "#fffaf3",
        }}
      >
        <h2
          style={{
            fontSize: "26px",
            color: "#8B0000",
            fontWeight: "700",
            textTransform: "uppercase",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Full Set Extension
        </h2>

        <p style={{ float: "right", color: "#482A1E" }}>
          <strong>Price:</strong> $75
        </p>

        <p style={{ marginTop: "30px", color: "#6f4e37" }}>
          Achieve flawless nails with our full set of SNS powder extensions.
        </p>
      </div>

      {/* OVERLAY */}
      <div
        style={{
          border: "2px solid #eac59a",
          padding: "25px",
          borderRadius: "10px",
          marginBottom: "35px",
          backgroundColor: "#fffaf3",
        }}
      >
        <h2
          style={{
            fontSize: "26px",
            color: "#8B0000",
            fontWeight: "700",
            textTransform: "uppercase",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Overlay on Natural Nails with Polish
        </h2>

        <p style={{ float: "right", color: "#482A1E" }}>
          <strong>Price:</strong> $70
        </p>

        <p style={{ marginTop: "30px", color: "#6f4e37" }}>
          Enhance the natural beauty of your nails with an acrylic overlay,
          including polish.
        </p>
      </div>

      {/* ADDITIONAL SERVICES */}
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
            color: "#8B0000",
            fontWeight: "700",
            textTransform: "uppercase",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Additional Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            color: "#6f4e37",
          }}
        >
          <div>
            <p>SHELLAC / GEL POLISH — $15</p>
            <p>French Tip — $15</p>
            <p>Designer Nail (Each) — $5</p>
            <p>Soak Off SNS — $25</p>
          </div>

          <div>
            <p>1–2 Nail Fix — $5</p>
            <p>3–4 Nail Fix — $10</p>
            <p>XL Length — $5</p>
            <p>XXL Length — $10</p>
          </div>
        </div>
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