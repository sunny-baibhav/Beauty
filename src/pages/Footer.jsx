import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
   <footer
  className="ftco-footer ftco-section"
  style={{
    backgroundImage: 'url("/bg-footer-new.webp")', // 👉 your footer background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    color: "#fff",
  }}
>
  {/* 🖤 Overlay for readability */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // backgroundColor: "rgba(0, 0, 0, 0.6)", // dark overlay for contrast
      zIndex: 0,
    }}
  ></div>

  <div className="container" style={{ position: "relative", zIndex: 1 }}>
    <div className="row d-flex">
      {/* ---- Left logo and description ---- */}
      <div className="col-md">
        <div className="ftco-footer-widget mb-4">
          <img
            src="/E_lan-01-removebg-preview.png"
            alt="ElenaBeauty"
            style={{
              height: "160px",
              width: "auto",
              objectFit: "contain",
              marginBottom: "10px",
            }}
          />
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul className="ftco-footer-social list-unstyled float-lft mt-3">
            <li className="ftco-animate">
              <a href="#">
                <span className="icon-twitter" />
              </a>
            </li>
            <li className="ftco-animate">
              <a href="#">
                <span className="icon-facebook" />
              </a>
            </li>
            <li className="ftco-animate">
              <a href="#">
                <span className="icon-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ---- Popular Links ---- */}
      <div className="col-md">
        <div className="ftco-footer-widget mb-4 ml-md-4">
          <h2 className="ftco-heading-2 text-white">Popular Links</h2>
          <ul className="list-unstyled">
            <li><a href="#">Aromatheraphy</a></li>
            <li><a href="#">Skin Care</a></li>
            <li><a href="#">Herbal Spa</a></li>
            <li><a href="#">Body Massage</a></li>
          </ul>
        </div>
      </div>

      {/* ---- Quick Links ---- */}
      <div className="col-md">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2 text-white">Quick Links</h2>
          <ul className="list-unstyled">
            <li><a href="#">About</a></li>
            <li><a href="/">Our Spa</a></li>
            <li><a href="/treatments">Treatments</a></li>
            <li><a href="/specialists">Specialists</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* ---- Contact Info ---- */}
          <div className="col-md">
      <div className="ftco-footer-widget mb-4">
        <h2 className="ftco-heading-2 text-white">Have a Questions?</h2>
        <div className="block-23 mb-3">
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <FaMapMarkerAlt style={{ color: "#fff", fontSize: "18px", marginRight: "10px" }} />
              <span className="text text-white">
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </li>

            <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <FaPhoneAlt style={{ color: "#fff", fontSize: "18px", marginRight: "10px" }} />
              <a href="#" className="text text-white">
                +2 392 3929 210
              </a>
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <FaGoogle style={{ color: "#fff", fontSize: "18px", marginRight: "10px" }} />
              <a href="#" className="text text-white">
                info@yourdomain.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>

    {/* ---- Copyright ---- */}
 
  </div>
</footer>

  );
};

export default Footer;
