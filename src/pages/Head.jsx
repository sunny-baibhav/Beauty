import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import BgImage from "./BgImage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";
import SneakPeak from "./SneakPeak";
import Footer from "./Footer";
import SpaImageCard from "./SpaImageCard";
const Head = () => {
  return (
    <>
      <Navbar />
      <section
        className="hero-wrap d-flex align-items-center justify-content-center text-center"
        style={{
          position: "relative",
          height: "60vh",
          ...BgImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          padding: "100px 0",
          color: "#fff", // stack items vertically
        }}
      >
        {/* Background Image Overlay */}
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
          <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>Head Spa</h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
            {/* Choose the perfect plan for your wellness journey */}
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
      {/* TOP HEADING SECTION */}
      {/* ===== TOP CONTENT SECTION ===== */}
      <section
        style={{
          width: "100%",
          background: "#fff",
          padding: "60px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "900",
              marginBottom: "25px",
              background:
                "linear-gradient(90deg, #ff5f6d, #ffc371, #8ec5fc, #e0c3fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Elan Beauty Head Spa
          </h2>
          <p
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#000",
              marginBottom: "25px",
              lineHeight: "32px",
            }}
          >
            Welcome to Elan Beauty Head Spa <br />– Your Escape to Relaxation
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "30px",
              color: "#555",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            At Elan Beauty Head Spa, we specialize in providing a luxurious and
            rejuvenating experience like no other. Step into a world where
            relaxation meets expert care. Our head spa treatments are designed
            to revitalize not just your scalp and hair, but also your overall
            well-being. With tailored services and top-of-the-line products, we
            ensure that every session leaves you feeling refreshed, renewed, and
            pampered.
          </p>
        </div>
      </section>

      {/* ===== IMAGE CONTENT SECTION ===== */}
      <section
        style={{
          width: "100%",
          background: "#fafafa",
          padding: "40px 20px",
          boxSizing: "border-box",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1.2}
            style={{ paddingBottom: "40px" }}
            loop={true}
          >
            {/* SLIDE 1 */}
            <SwiperSlide>
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#f7f7f7",
                }}
              >
                <img
                  src="/DOS04799.jpg"
                  alt="Spa Image 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </SwiperSlide>

            {/* SLIDE 2 */}
            <SwiperSlide>
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#f7f7f7",
                }}
              >
                <img
                  src="/DOS04529.jpg"
                  alt="Spa Image 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </SwiperSlide>

            {/* SLIDE 3 - VIDEO */}
            <SwiperSlide>
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "#000",
                }}
              >
                <video
                  src="video.mp4"
                  poster="poster.jpg"
                  controls
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* second heading */}
      <section
        style={{
          width: "100%",
          background: "#000",
          padding: "80px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "900",
              marginBottom: "25px",
              color: "#d4af37", // GOLD COLOR
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            EXPERIENCE THE UNIQUE HEAD SPA TREATMENT
          </h2>

          <p
            style={{
              fontSize: "20px",
              fontWeight: "400",
              color: "#d4c580",
              maxWidth: "900px",
              lineHeight: "32px",
              margin: "0 auto 40px auto",
            }}
          >
            Our signature head spa service is unlike anything you'll find in
            Australia. Unlike traditional hair washing, our treatments focus on
            deep scalp cleansing, stress relief, and hair nourishment. Using
            advanced techniques and natural, high-quality products, we aim to
            enhance your scalp's health while promoting hair growth and shine.
            Perfect for those looking to unwind or address scalp concerns.
          </p>
        </div>
      </section>
      <section
        style={{
          width: "100%",
          background: "#000",
          padding: "60px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {/* IMAGE 1 */}
          <div
            style={{
              width: "32%",
              height: "380px",
              borderRadius: "16px",
              overflow: "hidden",
              background: "#111",
            }}
          >
            <img
              src="/DOS04799.jpg"
              alt="Spa Image 1"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* IMAGE 2 */}
          <div
            style={{
              width: "32%",
              height: "380px",
              borderRadius: "16px",
              overflow: "hidden",
              background: "#111",
            }}
          >
            <img
              src="/DOS04529.jpg"
              alt="Spa Image 2"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* IMAGE 3 */}
          <div
            style={{
              width: "32%",
              height: "380px",
              borderRadius: "16px",
              overflow: "hidden",
              background: "#111",
            }}
          >
            <img
              src="/DOS04529.jpg"
              alt="Spa Image 3"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
      <section
        style={{
          width: "100%",
          background: "#000",
          padding: "80px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1300px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT CONTENT */}
          <div
            style={{
              flex: "1",
              minWidth: "350px",
              color: "#D4AF37",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "800",
                lineHeight: "60px",
                margin: "0 0 30px 0",
                color: "#D4AF37",
              }}
            >
              Experience the Elan Beauty
              <br />
              Difference: High-quality
              <br />
              Products for Optimal Care
            </h2>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "32px",
                color: "#d4c483",
                maxWidth: "600px",
              }}
            >
              At Elan Beauty Head Spa, we use only premium products to nourish
              your scalp and hair, ensuring health and shine. Our top-tier
              ingredients enhance the effectiveness of our treatments, providing
              exceptional relaxation and rejuvenation. Trust in our quality to
              deliver luxurious experiences and outstanding results.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            style={{
              flex: "1",
              minWidth: "350px",
              height: "520px",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <img
              src="/headoil.jpg"
              alt="Product Care"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
      {/* {third heading } */}
      <section
        style={{
          width: "100%",
          background: "#e8e09d",
          padding: "60px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "56px",
              fontWeight: "700",
              color: "#000",
              marginBottom: "25px",
              lineHeight: "62px",
            }}
          >
            Feel the Difference, See the Shine
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "30px",
              color: "#555",
              maxWidth: "900px",
              margin: "0 auto 30px auto",
            }}
          >
            Elan Beauty Head Spa is your ultimate destination for premium hair
            care. Our specialized treatments not only cleanse and nourish your
            scalp but also offer unparalleled relaxation. Each visit guarantees
            not just healthier, shinier hair but also a renewed sense of
            well-being. Elan Beauty Head Spa – the perfect choice for your
            beauty and wellness.
          </p>

          {/* BOOK NOW BUTTON */}
          <button
            style={{
              padding: "14px 32px",
              fontSize: "18px",
              fontWeight: "600",
              background: "#c8a878", // light brown
              color: "#000",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.background = "#b08d54"; // dark brown on hover
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "#c8a878"; // original color
              e.target.style.color = "#000";
            }}
          >
            Book Now
          </button>
        </div>
      </section>

      {/* === SECTION: BENEFITS (matches your screenshot) === */}
      <section
        style={{
          width: "100%",
          background: "#000",
          padding: "120px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1350px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start", // <— IMPORTANT (image top aligned)
            gap: "70px",
            flexWrap: "wrap",
          }}
        >
          {/* ===== LEFT TEXT CONTENT ===== */}
          <div
            style={{
              flex: 1.2,
              minWidth: "360px",
            }}
          >
            {/* MAIN HEADING */}
            <h1
              style={{
                fontSize: "64px",
                lineHeight: "1.1",
                color: "#D4AF37",
                margin: 0,
                fontWeight: "800",
              }}
            >
              Boost Your Blood Flow,
              <br />
              Boost Your Glow.
            </h1>

            {/* SUBHEADING */}
            <h2
              style={{
                fontSize: "36px",
                lineHeight: "1.3",
                color: "#D4AF37",
                fontWeight: "600",
                marginTop: "25px",
                marginBottom: "40px",
              }}
            >
              Why You Deserve This Indulgence
            </h2>

            {/* PARAGRAPH */}
            <p
              style={{
                fontSize: "20px",
                lineHeight: "34px",
                color: "#d4c483",
                maxWidth: "650px",
              }}
            >
              Our head spa treatments are designed to stimulate blood
              circulation in the scalp, feeding your hair follicles with the
              nutrients they need to thrive. This improved blood flow encourages
              healthy hair growth, reduces headaches, and eases tension—giving
              you a fresh glow from the inside out.
              <br />
              <br />
              Indulging in a head spa is more than just a luxury—it's a
              necessity for your overall well-being. Experience deep relaxation
              while nourishing your scalp and hair with our expertly crafted
              treatments. You deserve this moment of peace—your mind, body, and
              hair will thank you.
            </p>
          </div>

          {/* ===== RIGHT IMAGE (TOP-ALIGNED) ===== */}
          <div
            style={{
              flex: 1,
              minWidth: "350px",
              height: "580px",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <img
              src="/DOS04799.jpg" // <— replace image if needed
              alt="Head Spa Relaxation"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
      <section
        style={{
          width: "100%",
          background: "#000",
          padding: "120px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1450px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "70px",
            flexWrap: "wrap",
          }}
        >
          {/* ===== LEFT CIRCLE IMAGE / VIDEO ===== */}
          <div
            style={{
              flex: 1,
              minWidth: "350px",
              height: "500px",
              maxWidth: "550px",
              borderRadius: "100%", // <-- CIRCLE SHAPE
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "60px",
            }}
          >
            <img
              src="/DOS04799.jpg" // <-- replace with your circular video image
              alt="Relaxing Head Spa"
              style={{
                width: "105%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* ===== RIGHT CONTENT ===== */}
          <div
            style={{
              flex: 1.2,
              minWidth: "380px",
              color: "#fff",
            }}
          >
            <h1
              style={{
                fontSize: "64px",
                lineHeight: "1.1",
                fontWeight: "800",
                color: "#D4AF37",
                marginBottom: "20px",
                marginRight: "60px",
              }}
            >
              Relax, Rejuvenate, and
              <br />
              Recharge
            </h1>

            <p
              style={{
                fontSize: "22px",
                lineHeight: "36px",
                color: "#ccc",
                maxWidth: "600px",
                marginBottom: "40px",
                marginRight: "60px",
              }}
            >
              Let go of stress and sink into pure relaxation with our calming
              head spa experience. Our expert techniques will soothe your mind
              and body, offering you a mini-escape from the hustle and bustle.
              Leave feeling lighter, relaxed, and ready to take on the world.
            </p>

            <button
              style={{
                padding: "16px 40px",
                background: "#C6A04F",
                border: "none",
                borderRadius: "6px",
                fontSize: "18px",
                fontWeight: "600",
                color: "#000",
                cursor: "pointer",
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      <section
        style={{
          width: "100%",
          background: "#000",
          padding: "120px 20px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1450px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "80px",
            flexWrap: "wrap",
          }}
        >
          {/* ===== LEFT TEXT CONTENT ===== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              flex: 1,
              minWidth: "380px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              /* 💛 LEFT MARGIN FOR DESKTOP */
              marginLeft: "40px",

              /* CENTERS CONTENT ON MOBILE */
              textAlign: "left",
            }}
          >
            <h1
              style={{
                fontSize: "68px",
                lineHeight: "1.15",
                fontWeight: "800",
                color: "#D4AF37",
                marginBottom: "35px",
                marginLeft: "60px",
                /* MOBILE CENTER */
                textAlign: "left",
              }}
            >
              Detox Your Scalp,
              <br />
              Revitalize Your Hair
            </h1>

            <p
              style={{
                fontSize: "22px",
                lineHeight: "36px",
                color: "#ccc",
                maxWidth: "550px",
                marginBottom: "50px",
                marginLeft: "60px",
                /* MOBILE CENTER */
                textAlign: "left",
              }}
            >
              A clean scalp is the key to healthy, vibrant hair. Our deep detox
              head spa treatments cleanse away impurities and buildup,
              revitalizing your scalp for optimal hair growth. It’s like a fresh
              start for your hair—clear, clean, and ready to shine.
            </p>

            {/* ✨ SPRINKLE BUTTON */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 18px rgba(255, 215, 100, 0.8)",
              }}
              animate={{
                boxShadow: [
                  "0 0 10px rgba(255,215,100,0.3)",
                  "0 0 25px rgba(255,215,100,0.7)",
                  "0 0 10px rgba(255,215,100,0.3)",
                ],
              }}
              // transition={{
              //   repeat: Infinity,
              //   duration: 2.2,
              //   ease: "easeInOut",
              // }}
              style={{
                padding: "18px 48px",
                background: "#C6A04F",
                border: "none",
                borderRadius: "4px",
                fontSize: "18px",
                fontWeight: "600",
                color: "#000",
                cursor: "pointer",
                width: "fit-content",
                marginLeft: "60px",
                /* MOBILE CENTER */
                alignSelf: "flex-start",
              }}
            >
              Book Now
            </motion.button>
          </motion.div>

          {/* ===== RIGHT IMAGE ===== */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              flex: 1,
              minWidth: "420px",
              height: "650px",
              borderRadius: "10px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/detor.jpg"
              alt="Hair Spa Treatment"
              style={{
                width: "65%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </div>

        {/* ------ RESPONSIVE MEDIA QUERIES ------ */}
        <style>{`
    @media (max-width: 900px) {
      div[style*="maxWidth: 1450px"] {
        flex-direction: column !important;
        text-align: center !important;
      }

      h1, p {
        text-align: center !important;
        margin-left: 0 !important;
      }

      button {
        align-self: center !important;
      }

      div[style*="marginLeft: 40px"] {
        margin-left: 0 !important;
      }

      img {
        width: 100% !important;
      }
    }
  `}</style>
      </section>

      <section
        style={{
          width: "100%",
          background: "#000",
          padding: "120px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1450px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "70px",
            flexWrap: "wrap",
          }}
        >
          {/* ===== LEFT CIRCLE IMAGE / VIDEO ===== */}
          <div
            style={{
              flex: 1,
              minWidth: "350px",
              height: "500px",
              maxWidth: "550px",
              borderRadius: "100%", // <-- CIRCLE SHAPE
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "60px",
            }}
          >
            <img
              src="/DOS04799.jpg" // <-- replace with your circular video image
              alt="Relaxing Head Spa"
              style={{
                width: "105%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* ===== RIGHT CONTENT ===== */}
          <div
            style={{
              flex: 1.2,
              minWidth: "380px",
              color: "#fff",
            }}
          >
            <h1
              style={{
                fontSize: "64px",
                lineHeight: "1.1",
                fontWeight: "800",
                color: "#D4AF37",
                marginBottom: "20px",
                marginRight: "60px",
              }}
            >
              Nourish, Hydrate, Shine
            </h1>

            <p
              style={{
                fontSize: "22px",
                lineHeight: "36px",
                color: "#ccc",
                maxWidth: "600px",
                marginBottom: "40px",
              }}
            >
              Transform your hair with our luxurious treatments. Infused with
              rich nutrients, our head spa service brings your hair back to
              life—restoring moisture, repairing damage, and boosting shine.
              Walk out with hair that looks and feels stronger, healthier, and
              gorgeously radiant
            </p>

            <button
              style={{
                padding: "16px 40px",
                background: "#C6A04F",
                border: "none",
                borderRadius: "6px",
                fontSize: "18px",
                fontWeight: "600",
                color: "#000",
                cursor: "pointer",
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* four section vide play  */}

      {/* import { motion } from "framer-motion"; */}
      <SneakPeak />
      {/* ===== RIGHT IMAGE (ARCH + BLUR BACKDROP) ===== */}
      {/* ===== TWO CARDS WRAPPER ===== */}
      <section
        style={{
          width: "100%",
          padding: "140px 20px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          backgroundImage: "url('/grey.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1300px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          {/* ================= CARD 1 ================= */}
          <div
            style={{
              width: "420px",
              borderRadius: "30px",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* blurred background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('/detor.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(18px) brightness(0.4)",
                zIndex: 1,
              }}
            />

            {/* top curved image */}
            <div
              style={{
                width: "100%",
                height: "350px",
                borderTopLeftRadius: "220px",
                borderTopRightRadius: "220px",
                overflow: "hidden",
                position: "relative",
                zIndex: 2,
              }}
            >
              <img
                src="/detor.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* content box */}
            <div
              style={{
                width: "100%",
                padding: "35px",
                background: "rgba(255,255,255,0.92)",
                zIndex: 2,
                position: "relative",
              }}
            >
              <h2 style={{ fontSize: "28px", fontWeight: "800" }}>
                EXPERIENCE
              </h2>
              <h3 style={{ fontSize: "20px", marginTop: "5px" }}>
                $199 for 60+ Minutes
              </h3>
              <p
                style={{ marginTop: "15px", color: "#444", lineHeight: "26px" }}
              >
                Relax and rejuvenate with a 60-minute head spa that cleanses
                your scalp and boosts shine. Perfect for scalp health and deep
                relaxation.
              </p>

              {/* ▶️ ANIMATED ARROW BUTTON */}
              <div className="arrowBtn">
                <span style={{ fontSize: "28px", fontWeight: "700" }}>➤</span>
              </div>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div
            style={{
              width: "420px",
              borderRadius: "30px",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* blurred background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('/detor.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(18px) brightness(0.4)",
                zIndex: 1,
              }}
            />

            {/* top curved image */}
            <div
              style={{
                width: "100%",
                height: "350px",
                borderTopLeftRadius: "220px",
                borderTopRightRadius: "220px",
                overflow: "hidden",
                position: "relative",
                zIndex: 2,
              }}
            >
              <img
                src="/detor.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* content box */}
            <div
              style={{
                width: "100%",
                padding: "35px",
                background: "rgba(255,255,255,0.92)",
                zIndex: 2,
                position: "relative",
              }}
            >
              <h2 style={{ fontSize: "28px", fontWeight: "800" }}>SUPREME</h2>
              <h3 style={{ fontSize: "20px", marginTop: "5px" }}>
                $299 for 90+ Minutes
              </h3>
              <p
                style={{ marginTop: "15px", color: "#444", lineHeight: "26px" }}
              >
                A luxurious 90-minute treatment with extended massage, deep
                detox, and scalp nourishment for full rejuvenation.
              </p>

              {/* ▶️ ANIMATED ARROW BUTTON */}
              <div className="arrowBtn">
                <span style={{ fontSize: "28px", fontWeight: "700" }}>➤</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CSS (ANIMATION + MOBILE FIX) ===== */}
        <style>{`
    /* responsive layout */
    @media (max-width: 900px) {
      div[style*="maxWidth: 1300px"] {
        flex-direction: column;
        gap: 40px !important;
      }
    }

    /* 🔥 circle arrow button styling */
    .arrowBtn {
      position: absolute;
      right: 25px;
      bottom: 25px;
      width: 65px;
      height: 52px;
      border-radius: 50%;
      background: rgba(255,255,255,0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 3px solid #000;
      cursor: pointer;
      z-index: 5;
      transition: all 0.35s ease;
      box-shadow: 0 0 0px rgba(255,255,255,0.8);
    }

    .arrowBtn:hover {
      transform: translateY(-6px) scale(1.08);
      box-shadow: 0 0 20px rgba(255,255,255,0.9),
                  0 0 35px rgba(255,255,255,0.6),
                  0 0 50px rgba(255,255,255,0.4);
    }

    /* glowing sprinkle animation ring */
    .arrowBtn:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.5);
      top: 0;
      left: 0;
      transform: scale(1);
      opacity: 0;
      animation: sparkleRing 2.2s infinite ease-out;
      pointer-events: none;
    }

    @keyframes sparkleRing {
      0% {
        transform: scale(1);
        opacity: 0.7;
      }
      70% {
        transform: scale(1.9);
        opacity: 0;
      }
      100% {
        transform: scale(1.9);
        opacity: 0;
      }
    }
  `}</style>
      </section>
      {/* last  */}

      <SpaImageCard />
      <Footer />
    </>
  );
};

export default Head;
