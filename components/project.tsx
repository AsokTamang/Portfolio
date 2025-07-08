"use client";
import { tr } from "motion/react-client";
import ProjectDetails from "./projectDetails";
import React from "react";
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
}
export default function Project({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}: propsType) {
  const [clicked, setClicked] = React.useState(false);
  return (
    <>
      <div className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>

        <button
          className="flex items-center gap-1 curosr-pointer hover:animate-bounce"
          onClick={()=>setClicked(true)}
        >
          Read More
          <img src={"/arrow-right.svg"} className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />{" "}
      {/**this makes a diming light of a horizontal line between each project details */}
      {clicked && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          href={href}
          image={image}
          tags={tags}
          close={()=>setClicked(false)}
        />
      )}
    </>
  );
}
