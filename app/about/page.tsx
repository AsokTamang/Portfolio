"use client";
import Card from "@/components/card";
import { useRef } from "react";
import { Globe } from "@/components/globe";
import Copyemail from "@/components/copyemail";
export default function About() {
  const grid2Container = useRef<HTMLDivElement>(null);
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          <img
            src={"/coding-pov.png"}
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] "
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Asok Tamang.</p>
            <p className="subtext">
              Hi, I’m Asok Tamang — a passionate full-stack developer with a
              focus on building clean, responsive, and user-friendly web
              applications. I enjoy bringing ideas to life through code,
              combining thoughtful UI design with solid backend logic.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1-/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full" /**this is the outer layer or boundary or a ref property which is used in a dragConstraints */
          >
            <p className="flex items-end text-5xl text-gray-500 ">
              CODE IS DNA
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container} //so we pass the containerRef with value grid2Container as a prop
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="/html5.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="/dotnet.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="/nextjs.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>

        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Canada, and open to remote work worldwide
            </p>
            <figure className="absolute left-[25%] top-[7%]">
          <Globe/>

            </figure>
          </div>
        </div>

        <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
                <p className=" text-center headtext">Do you want to start a project together?</p>
                <Copyemail/>
            </div>
        </div>

        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  );
}
