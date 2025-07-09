import React from "react";
import Navbar from "@/sections/nabar";
import Home from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Work from "./work/page";

const page = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Home />

      <About />
      <Projects />
      <Work />
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      {/**projects */}
      {/**experience */}
      {/**testimonial */}
      {/**contact */}
      {/**footer */}
    </div>
  );
};

export default page;
