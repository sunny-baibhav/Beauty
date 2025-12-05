import { motion } from "framer-motion";

export default function SpaImageShowcase() {
  const images = {
    left: [
      {
        image: "/web.jpg",
        title: "Feel Relaxed with Gentle",
        subtitle: "Water Circulation",
      },
      {
        image: "/web3.jpg",
        title: "Ultimate Relaxation:",
        subtitle: "Water & Light Therapy",
      },
    ],
    center: {
      image: "/web2.jpg",
      title: "Leave with Dry, Beautiful Hair",
      subtitle: "After Every Treatment",
    },
    right: [
      {
        image: "/web4.jpg",
        title: "Ultimate Relaxation:",
        subtitle: "Scalp, Neck, & Shoulder Therapy",
      },
      {
        image: "/web5.jpeg",
        title: "Luxury Robes",
        subtitle: "Premium Comfort Experience",
      },
    ],
  };

  const Card = ({ item, height }) => (
    <motion.div
      style={{
        position: "relative",
        width: "100%",
        height,
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        background: "#111",
      }}
      whileHover={{
        scale: 1.04,
        rotateX: 5,
        rotateY: -5,
      }}
      transition={{ duration: 0.4 }}
    >
      <motion.img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.6 }}
      />

      {/* Overlay text */}
      <motion.div
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "absolute",
          bottom: "25px",
          left: "25px",
          right: "25px",
          color: "white",
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "1.3",
          textShadow: "0px 4px 12px rgba(0,0,0,0.6)",
        }}
      >
        {item.title}
        <br />
        <span style={{ fontSize: "18px", opacity: 0.85 }}>
          {item.subtitle}
        </span>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      style={{
        width: "100%",
        padding: "80px 40px",            // MORE LEFT/RIGHT SPACE
        background: "#fff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1500px",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr 1fr",   // center bigger
          gap: "45px",                            // more spacing between columns
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "45px" }}>
          <Card item={images.left[0]} height="380px" />   {/* larger */}
          <Card item={images.left[1]} height="380px" />
        </div>

        {/* CENTER COLUMN */}
        <Card item={images.center} height="780px" />      {/* taller */}

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "45px" }}>
          <Card item={images.right[0]} height="380px" />
          <Card item={images.right[1]} height="380px" />
        </div>
      </div>

      <style>{`
        @media (max-width: 950px) {
          section {
            padding: 40px 20px !important;
          }

          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }

          div[style*="flex-direction: column"] {
            gap: 25px !important;
          }

          /* Make all mobile images same size */
          div[style*="height"] {
            height: 360px !important;
          }
        }
      `}</style>
    </section>
  );
}
