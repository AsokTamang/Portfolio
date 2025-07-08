"use client"
import { FlipWords } from "./flip-words";
import { motion } from "motion/react";

export default function Herotext() {
  const variants = {  //this variants is of opacity and delay for the elements 
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const words = ["Secure", "Scalable", "Modern"];
  return (
    <div className="z-10 mt-20 text-center md:mt-40  md:text-left rounded-3xl bg-clip-text">
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1}}
          className="text-4xl font-medium"
        >
          Hi, I'm Asok.
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible" //this is the final property of element
            transition={{ delay: 1.3 }}
            className="text-2xl font-medium text-neutral-300"
          >
            A Developer Dedicated to solving problems and crafting.
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible" //this is the final property of element
            transition={{ delay: 1.6 }}
          >
            <FlipWords  //this effect changes the words simultaneously
              className="font-black text-5xl text-neutral-50"
              words={words}
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
            className="text-2xl font-medium text-neutral-300"
          >
            Web Applications
          </motion.p>
        </div>
      </div>

      {/**we are hiding this div in mobile view and displaying in mobile view */}
      <div className="flex flex-col space-y-6 md:hidden">
      
        {/**if the width is greater than 768px then we hide this div so its only for mobile view */}
        <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1 }}
          className="text-4xl font-medium"
        >
          Hi, I'm Asok.
        </motion.p>
        <div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3 }}
            className="text-4xl font-medium text-neutral-300"
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            <FlipWords
              className="font-black text-5xl text-neutral-50"
              words={words}
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
            className="font-black text-4xl text-neutral-300"
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
}
