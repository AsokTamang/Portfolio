"use client";
import { motion } from "motion/react";
import React from "react";
export default function Card({   //these are the props we pass from about page
  style,
  text,
  image,
  containerRef,
}: {
  style: React.CSSProperties;
  text: string|null;
  image: string | null;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <>
      {(image && !text) ? (
        <motion.img
          className="absolute w-15 cursor-grab"
          src={image}
          style={style}
          whileHover={{
            scale: 1.05,
          }} /**this while hover code will increase the size of image by 1.05 while hovered */
          drag
          dragConstraints={
            containerRef
          } /**this prevents the elements from moving outside its parent container while using drag property */
          dragElastic={1}
        />
      ) : (
        <motion.div
          style={style}
          className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab "
          whileHover={{
            scale: 1.05,
          }} /**this while hover code will increase the size of image by 1.05 while hovered */
          drag
          dragConstraints={
            containerRef
          } /**this dragConstraints will prevent the elements to go outside of the conrtainer */
          dragElastic={1}
        >
          {text}
        </motion.div>
      )}
    </>
  );
}
