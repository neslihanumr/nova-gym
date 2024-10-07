import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/Blog/BlogPost";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import BodyBuilding from "./pages/Services/Body-building";
import KickBoxing from "./pages/Services/Kick-boxing";
import StretchTraining from "./pages/Services/Stretch-training";
import WeightLoss from "./pages/Services/Weight-loss";
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route
          path="/services/Stretch-training"
          element={<StretchTraining />}
        />
        <Route path="/services/Kick-boxing" element={<KickBoxing />} />
        <Route path="/services/Body-building" element={<BodyBuilding />} />
        <Route path="/services/Weight-loss" element={<WeightLoss />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
