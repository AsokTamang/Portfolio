'use client'
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
 

  return (
    <figure
      className={twMerge(
        "relative h-full md:w-64 w-45 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/[.1]bg-gradient-to-r bg-indigo to-storm hover:bg-royal  hover:animate-bounce",
        
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full bg-white" width="32" height="32" alt="" src={img} />
        
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
 