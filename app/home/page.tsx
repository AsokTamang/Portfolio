"use client";
import Herotext from "@/components/herotext";
import Paraller from "@/components/parallax";
import { Canvas, useFrame } from "@react-three/fiber";
import { Astronaut } from "@/components/astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { damp3 } from 'maath/easing';
import { Suspense } from "react";
import Loader from "@/components/loader";

function Rig() {
  useFrame((state, delta) => {
    damp3(
      state.camera.position,
      [state.pointer.x / 10, 1 + state.pointer.y / 10, 3],
      0.5,
      delta
    );
  });
  return null;
}

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <Herotext />
      <Paraller />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader/>}>
          <Float>
             <Astronaut
            scale={isMobile && 0.23} //here we are giving the value for both scale as well as position from the props when the size is mobile version but if the display size is desktop then we just use the value of scale and position from the component where we have defined the value
            position={isMobile && [0, -1.5, 0]}
          />
          </Float>

         
          
          <Rig/>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
}
