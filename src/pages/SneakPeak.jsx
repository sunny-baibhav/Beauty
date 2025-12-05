import React from 'react'

const SneakPeak = () => {
  return (


    <section
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #f7eaa0, #f6c19e)",
        padding: "120px 20px",
        boxSizing: "border-box",
      }}
    >
      {/* ===== HEADING ===== */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2
          style={{
            fontSize: "58px",
            fontWeight: "900",
            color: "#000",
            lineHeight: "1.1",
            marginBottom: "10px",
          }}
        >
          #sneakpeak
        </h2>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: "900",
            color: "#000",
            lineHeight: "1.1",
          }}
        >
          Elan Beauty Head Spa <br /> Experience
        </h1>
      </div>

      {/* ===== GRID 6 BOXES ===== */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "40px",
        }}
      >
        {/* ===== REUSABLE CARD COMPONENT ===== */}
        {[
          {
            title: "The Sounds of Serenity",
            desc:
              "The soothing sounds of our water fountain enhance your relaxation, melting away stress and tension.",
            video: "/video/7754473-hd_1080_1920_30fps (1).mp4",
          },
          {
            title: "Complimentary Blow Dry",
            desc:
              "Each treatment includes a complimentary blow‑dry, leaving your hair fresh and beautifully styled.",
            video: "/video/7754473-hd_1080_1920_30fps (1).mp4",
          },
          {
            title: "A Haven of Calm",
            desc:
              "Relax, unwind, and enjoy a peaceful escape that renews your energy.",
            video: "/video/7754473-hd_1080_1920_30fps (1).mp4",
          },
          {
            title: "Premium Scalp Massage",
            desc:
              "Deep relaxation with expert scalp techniques that boost circulation and ease tension.",
            video: "/video/7754473-hd_1080_1920_30fps (1).mp4",
          },
          {
            title: "Steam Therapy Glow",
            desc:
              "Warm steam opens pores, allowing your scalp to fully absorb nutrients.",
            video: "/video/7754473-hd_1080_1920_30fps (1).mp4",
          },
          {
            title: "Aromatherapy Balance",
            desc:
              "Gentle aromatherapy creates balance, calm, and a deeply soothing mood.",
            video: "/video/7754473-hd_1080_1920_30fps (1).mp4",
          },
        ].map((item, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "6px" }}>
              Elan Beauty
            </h3>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "900",
                marginBottom: "16px",
              }}
            >
              {item.title}
            </h2>

            <div
              style={{
                width: "100%",
                height: "220px",
                borderRadius: "10px",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "26px",
                color: "#333",
                maxWidth: "90%",
                margin: "0 auto",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ===== RESPONSIVE CSS ===== */}
      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }

          h1 {
            font-size: 46px !important;
          }

          h2 {
            font-size: 28px !important;
          }

          video {
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
}



export default SneakPeak