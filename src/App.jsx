import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import PricingSection from "./pages/titlecard/PricingSection";
import Home from "./pages/Home";
import Aboutus from "./pages/cms/Aboutus";
import ServicesSection1 from "./pages/spotlight/ServicesSection1";
import Special from "./pages/Special";
import BlogSection from "./pages/BlogSection";
import Contactus from "./pages/cms/Contactus";
import GoToTopButton from "./pages/GoToTopButton";
import ScrollToTop from "./pages/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import Head from "./pages/Head";

function App() {
  const location = useLocation(); // ⭐️ Get page URL

  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/treatments" element={<ServicesSection1 showLayout={true} />} />
        <Route path="/specialists" element={<Special />} />
        <Route path="/blog" element={<BlogSection showLayout={true} />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/head-spa" element={<Head />} />
        <Route path="/pricing" element={<PricingSection showLayout={true} />} />
      </Routes>

      {/* ⭐️ Show GoToTop except on Head Spa page */}
      {location.pathname !== "/head-spa" && <GoToTopButton />}
    </>
  );
}

export default App;
