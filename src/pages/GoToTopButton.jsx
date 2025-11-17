import { useEffect, useState } from "react";

export default function GoToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {visible && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            background: "#ff69b4",
            color: "#000000ff",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            zIndex: 9999,
            fontSize: "24px",
            transition: "0.3s",
          }}
        >
          ↑
        </div>
      )}
    </>
  );
}
