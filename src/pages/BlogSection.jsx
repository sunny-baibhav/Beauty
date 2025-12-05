import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import BgImage from "./BgImage";
const allPosts = [
  {
    id: 1,
    image: "/DOS04474.jpg",
    day: "25",
    month: "September",
    year: "2019",
    title: "Is wellness the new luxury",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    id: 2,
    image: "/DOS04476.jpg",
    day: "25",
    month: "September",
    year: "2019",
    title: "Health & Beauty Lifestyle Tips",
    description:
      "Discover easy wellness habits that enhance your natural beauty and inner peace.",
  },
  {
    id: 3,
    image: "/DOS04532.jpg",
    day: "25",
    month: "September",
    year: "2019",
    title: "The Art of Relaxation",
    description:
      "How mindful relaxation techniques can transform your daily stress into serenity.",
  },
  {
    id: 4,
    image: "/image_4.jpg",
    day: "25",
    month: "September",
    year: "2019",
    title: "Top Spa Treatments 2025",
    description:
      "Explore the best modern spa therapies and natural rejuvenation methods.",
  },
  {
    id: 5,
    image: "/DOS04544.jpg",
    day: "25",
    month: "September",
    year: "2019",
    title: "Glow From Within",
    description:
      "Learn the connection between diet, sleep, and lasting radiant skin.",
  },
  {
    id: 6,
    image: "/image_6.jpg",
    day: "25",
    month: "September",
    year: "2019",
    title: "Balance & Harmony",
    description:
      "How holistic living and balance can bring clarity and fulfillment.",
  },
  {
  id: 7,
  image: "/DOS04778.jpg",
  day: "25",
  month: "September",
  year: "2019",
  title: "Aroma Therapy Massage",
  description: "Relaxing essential-oil massage that calms stress and rejuvenates the body.",
},
{
  id: 8,
  image: "/DOS04797.jpg",
  day: "28",
  month: "September",
  year: "2019",
  title: "Brightening Facial",
  description: "Deep cleansing facial treatment designed to hydrate and brighten dull skin.",
},
{
  id: 9,
  image: "/DOS04579.jpg",
  day: "02",
  month: "October",
  year: "2019",
  title: "Hair Smoothening",
  description: "Advanced smoothening treatment for silky, straight, and frizz-free hair.",
},
{
  id: 10,
  image: "https://images.unsplash.com/photo-1562322140-8baeececf3df",
  day: "06",
  month: "October",
  year: "2019",
  title: "Keratin Hair Spa",
  description: "Repairs damaged hair and restores shine with deep keratin nourishment.",
},
{
  id: 11,
  image: "/DOS04806.jpg",
  day: "12",
  month: "October",
  year: "2019",
  title: "Deep Tissue Massage",
  description: "Relieves muscle tension and stiffness for full-body relaxation.",
},
// {
//   id: 12,
//   image: "https://images.unsplash.com/photo-1599058917212-d750089bc07a",
//   day: "15",
//   month: "October",
//   year: "2019",
//   title: "Foot Reflexology",
//   description: "Pressure-point foot therapy that improves circulation and reduces stress.",
// },
{
  id: 13,
  image: "/DOS04649.jpg",
  day: "20",
  month: "October",
  year: "2019",
  title: "Luxury Spa Therapy",
  description: "A premium relaxation treatment designed to relieve stress, refresh the body, and enhance overall well-being.",
},
{
  id: 14,
  image: "/DOS04708.jpg",
  day: "24",
  month: "October",
  year: "2019",
  title: "Nail Shades & Gel Polish Collection",
  description: "A complete range of colorful gel polishes and nail shades for premium manicures and nail art services.",
}
// {
//   id: 15,
//   image: "https://images.unsplash.com/photo-1599058917765-e7d3dfc0c8b1",
//   day: "30",
//   month: "October",
//   year: "2019",
//   title: "Hot Stone Therapy",
//   description: "Warm stone therapy to melt away stress and release body tension.",
// },
// {
//   id: 16,
//   image: "https://images.unsplash.com/photo-1599058917212-d750089bc07a",
//   day: "04",
//   month: "November",
//   year: "2019",
//   title: "Full Body Waxing",
//   description: "Smooth hair-free skin using premium, painless waxing techniques.",
// },
// {
//   id: 17,
//   image: "https://images.unsplash.com/photo-1600371231953-96d5437c9658",
//   day: "10",
//   month: "November",
//   year: "2019",
//   title: "Bridal Makeup Session",
//   description: "Professional bridal makeover designed for flawless wedding looks.",
// },
// {
//   id: 18,
//   image: "https://images.unsplash.com/photo-1581089781785-603411fa81d5",
//   day: "14",
//   month: "November",
//   year: "2019",
//   title: "Nail Art & Extensions",
//   description: "Trendy nail extensions and custom nail art for stylish hands.",
// },


];

const BlogSection = ({ showLayout = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = showLayout ? 6 : 3;

  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const visiblePosts = showLayout
    ? allPosts.slice(startIndex, startIndex + postsPerPage)
    : allPosts.slice(0, 3); // only top `3` on homepage

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <>
    {showLayout && <Navbar />}
      {showLayout && ( <section
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
      <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>Blog</h1>
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
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff1493")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff69b4")}
      >
        Back to Home
      </Link>
    </div>
  </section>)}
     
    <section
      className="ftco-section bg-light"
      style={{
        padding: showLayout ? "80px 0" : "60px 0",
        backgroundColor: "#fff",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center">
            <motion.h3
              className="subheading"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                color: "#c59d5f",
                fontWeight: "500",
                fontSize: "20px",
                letterSpacing: "2px",
              }}
            >
              Blog
            </motion.h3>
            <motion.h2
              className="mb-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontFamily: '"Prata", serif',
                textTransform: "uppercase",
                fontSize: "2.8rem",
                letterSpacing: "2px",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              Recent Posts
            </motion.h2>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="row d-flex">
          {visiblePosts.map((post, index) => (
            <motion.div
              className="col-md-4 d-flex"
              key={post.id}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="blog-entry justify-content-end w-100">
                <motion.a
                  href="#"
                  className="block-20"
                  style={{
                    backgroundImage: `url(${post.image})`,
                    display: "block",
                    height: "250px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10px",
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                ></motion.a>

                <motion.div
                  className="text p-4 float-right d-block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                    marginTop: "20px",
                  }}
                >
                  <div
                    className="d-flex align-items-center pt-2 mb-4"
                    style={{ gap: "10px" }}
                  >
                    <div className="one">
                      <span
                        className="day"
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          color: "#c59d5f",
                        }}
                      >
                        {post.day}
                      </span>
                    </div>
                    <div className="two">
                      <span
                        className="yr"
                        style={{
                          display: "block",
                          fontSize: "14px",
                          color: "#999",
                        }}
                      >
                        {post.year}
                      </span>
                      <span
                        className="mos"
                        style={{
                          display: "block",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        {post.month}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="heading mt-2"
                    style={{ fontSize: "20px", fontWeight: "600" }}
                  >
                    <a
                      href="#"
                      style={{
                        color: "#222",
                        textDecoration: "none",
                        transition: "color 0.3s",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#c59d5f")}
                      onMouseOut={(e) => (e.target.style.color = "#222")}
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p style={{ color: "#666", fontSize: "15px" }}>
                    {post.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination - Only show if showLayout is true */}
        {showLayout && (
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul
                  style={{
                    listStyle: "none",
                    display: "inline-flex",
                    padding: 0,
                    margin: 0,
                    gap: "10px",
                  }}
                >
                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      style={{
                        background: "none",
                        border: "none",
                        color: currentPage === 1 ? "#ccc" : "#c59d5f",
                        fontSize: "20px",
                        cursor: currentPage === 1 ? "default" : "pointer",
                      }}
                    >
                      &lt;
                    </button>
                  </li>

                  {Array.from({ length: totalPages }).map((_, i) => (
                    <li key={i}>
                      <button
                        onClick={() => handlePageChange(i + 1)}
                        style={{
                          background:
                            currentPage === i + 1 ? "#c59d5f" : "transparent",
                          border: "1px solid #c59d5f",
                          color:
                            currentPage === i + 1 ? "#fff" : "#c59d5f",
                          borderRadius: "5px",
                          padding: "6px 12px",
                          cursor: "pointer",
                        }}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}

                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      style={{
                        background: "none",
                        border: "none",
                        color:
                          currentPage === totalPages ? "#ccc" : "#c59d5f",
                        fontSize: "20px",
                        cursor:
                          currentPage === totalPages
                            ? "default"
                            : "pointer",
                      }}
                    >
                      &gt;
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    {showLayout && <Footer/>}
    </>
  );
};

export default BlogSection;
