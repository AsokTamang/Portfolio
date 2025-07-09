import React from "react";
import Navbar from "@/sections/nabar";
import Home from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Work from "./work/page";
import Testimonial from "./testimonial/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
const page = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
