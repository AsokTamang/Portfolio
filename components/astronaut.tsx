"use client";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

export function Astronaut(props: any) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/modal/tenhun_falling_spaceman_fanart.glb"
  );
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    //this use effect is for moving the 3d modal
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 65 });
  useEffect(() => {
    //this useeffect is for moving the 3d modal from upward to down when our webpage loads

    ySpring.set(-1);
  }, [ySpring]);
  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get();
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[-Math.PI / 2, -0.2, 2.2]}
      scale={props.scale || 0.3}
      position={props.position || [1.3, -1, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint} />
              <skinnedMesh
                name="Cube001_0"
                geometry={(nodes.Cube001_0 as THREE.SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube001_0 as THREE.SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube005_0"
                geometry={(nodes.Cube005_0 as THREE.SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube005_0 as THREE.SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube002_0"
                geometry={(nodes.Cube002_0 as THREE.SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube002_0 as THREE.SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Plane_0"
                geometry={(nodes.Plane_0 as THREE.SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Plane_0 as THREE.SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube008_0"
                geometry={(nodes.Cube008_0 as THREE.SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube008_0 as THREE.SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube004_0"
                geometry={(nodes.Cube004_0 as THREE.SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube004_0 as THREE.SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube003_0"
                geometry={(nodes.Cube003_0 as THREE.SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube003_0 as THREE.SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube_0"
                geometry={(nodes.Cube_0 as THREE.SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube_0 as THREE.SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube009_0"
                geometry={(nodes.Cube009_0 as THREE.SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube009_0 as THREE.SkinnedMesh).skeleton}
              />
              <skinnedMesh
                name="Cube011_0"
                geometry={(nodes.Cube011_0 as THREE.SkinnedMesh).geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={(nodes.Cube011_0 as THREE.SkinnedMesh).skeleton}
              />
              <group name="Cube001" />
              <group name="Cube005" />
              <group name="Cube002" />
              <group name="Plane" />
              <group name="Cube008" />
              <group name="Cube004" />
              <group name="Cube003" />
              <group name="Cube" />
              <group
                name="Cube009"
                rotation={[-2.708, 0.013, -1.447]}
                scale={1.307}
              />
              <group name="Cube011" />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

// Preload the model for performance
useGLTF.preload("/modal/tenhun_falling_spaceman_fanart.glb");
