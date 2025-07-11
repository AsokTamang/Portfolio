"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
export default function Copyemail() {
  const [copied, setCopied] = React.useState(false);
  const email = "ashoktmg205@gmail.com";
  const handleClick = () => {
    navigator.clipboard.writeText(email); //here when the button is clicked then we copy the email in the clipboard using navigator write text
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <motion.button
      onClick={handleClick}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    whileHover={{scale:1.2}}
    whileTap={{y:-8}}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            key={"copied"}
          >
            <Image className="w-5" src={"/copy-done.svg"} alt="copy icon" />
            Email has been copied
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            key={"copy"}
          >
            <Image className="w-5" src={"/copy.svg"} alt="copy icon" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
