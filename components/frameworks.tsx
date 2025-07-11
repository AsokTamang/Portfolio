
import { OrbitingCircles } from "./orbitingcircles";
import Image from "next/image";

export function Frameworks() {
  const skills = [
    "dotnet.svg",
    "git.svg",
    "html5.svg",
    "javascript.svg",
    "nextjs.svg",
    "nodejs.jpg",
    "react.svg",
    "stripe.svg",
    "threejs.svg",
    "vitejs.svg",
    "express.svg",
    "tailwindcss.svg",
    " ",
    "Bootstrap_logo.svg",
    "ts.svg",
    "mongoose.png",
    
    

    


  ];
  return (
    <div className="relative flex h-[15rem] right-8 w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/${skill}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={5}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/${skill}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
const Icon = ({ src }: { src: string }) => (
  <Image alt="icon-image" src={src} className="duration-200 rounded-sm hover:scale-110" />
);
