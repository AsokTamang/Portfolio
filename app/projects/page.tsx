"use client";
import React from "react";
import { myProjects } from "../../constants";
import Project from "@/components/project";
import { motion, useMotionValue, useSpring } from "motion/react";
export default function Projects() {
  const x = useMotionValue(0); //here usemotionvalue is just a framer variable which can be used later to change or modify
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const [cursorBG, setCursorBG] = React.useState<string | undefined>(undefined);
  const handleMouseMove = (e: React.MouseEvent) => {
    x.set(e.clientX + 20); //here e.clientX is the horizontal position of the mouse relative to the viewport
    y.set(e.clientY + 20); //e.clientY is the vertical position of the mouse relative to the viewport
  };

  return (
    <section id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      {" "}
      {/**and the mousemove effect is happening within this section */}
      <h2 className="text-heading">My Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full">
        {myProjects.map((project, index) => (
          <Project
            key={index}
            {...project}
            setCursorBG={
              setCursorBG
            } /**here we are passing the set part as a prop inorder to set the bg image according to the project */
          /> /**here we are passing all the details of project as the props */
        ))}
        {cursorBG && (
          <motion.img
            src={cursorBG}
            style={{ x: springX, y: springY }} /**this */
            className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          />
        )}
      </div>
    </section>
  );
}
