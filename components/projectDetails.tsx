"use client";
import {motion} from 'motion/react'
import Link from 'next/link';
import Image from 'next/image';
interface tagType {
  id: number;
  name: string;
  path: string;
}
interface propsType {
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  image: string;
  tags: tagType[];
  close: () => void;
  setCursorBG:()=>void;
}

export default function ProjectDetails({
  title,
  tags,
  description,
  subDescription,
  image,
  href,
  close,

}: propsType) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div 
      initial={{opacity:0,scale:0}}
      animate={{opacity:1,scale:1}}
      className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10">
        <button
          onClick={close}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <Image alt='close-icon' src={"/close.svg"} className="w-6 h-6 " />
        </button>
        <Image src={image} alt="project image" className="w-full rounded-t-2xl" />
        <div className="p-3">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 text-neutral-300 font-light">{description}</p>
          {subDescription.map((sub, index) => (
            <p className="mb-3 text-neutral-300 font-light" key={index}>
              {sub}
            </p>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex justify-evenly gap-3">
            {tags.map((tag) => (
              <Image
                key={tag.id}
                className="rounded-lg size-10 hover:animate-bounce"
                src={tag.path}
                alt="techstack image"
              />
            ))}
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
          >
            View project <Image alt='arrow-icon' className="size-4" src="/arrow-up.svg" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
