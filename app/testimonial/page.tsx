"use client";
import { Marquee } from "@/components/marquee";
import { reviews } from "@/constants";
import { ReviewCard } from "../../components/reviewcard";
export default function Testimonial() {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <div id="testimonial" className="mt-3 ">
      <div className="flex items-start mt-3 c-space">
        <h3 className="text-heading">Hear from my clients</h3>
      </div>
      <div className="relative flex md:w-full flex-col mt-11 items-center justify-center overflow-hidden w-[30rem]">
        <Marquee pauseOnHover className="[--duration:10s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:10s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
      </div>
    </div>
  );
}
