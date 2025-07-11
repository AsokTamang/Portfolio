"use client"
import {motion, useScroll,useTransform,useSpring } from "motion/react"
export default function Paraller() {
    const {scrollYProgress}=useScroll();
    const x=useSpring(scrollYProgress,{damping:80});   //this makes the images in this code springy

    const mountain3Y=useTransform(x,[0,0.5],['0%','70%']);
    const planetsX=useTransform(x,[0,0.5],['0%','-20%']);
     const mountain2Y=useTransform(x,[0,0.5],['0%','30%']);
    const mountain1Y=useTransform(x,[0,0.5],['0%','0%']);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/**bg sky 1 */}
        <div className="absolute inset-0 w-full h-screen -z-50
        "
        style={{backgroundImage:"url(/sky.jpg)",
            backgroundPosition:'center',
            backgroundSize:'cover'
        }} />
        {/**mountain layer 3 */}
        <motion.div 
        className="absolute inset-0 -z-40"
        style={{backgroundImage:'url(/mountain-3.png)',
              backgroundPosition:'bottom',
            backgroundSize:'cover',
             y:mountain3Y
        }}
       />
        {/**planets*/}
       <motion.div 
        className="absolute inset-0 -z-30"
        style={{backgroundImage:'url(/planets.png)',
              backgroundPosition:'bottom',
            backgroundSize:'cover',
            x:planetsX
        }}/>
        {/**mountain layer 2 */}
       <motion.div 
        className="absolute inset-0 -z-20"
        style={{backgroundImage:'url(/mountain-2.png)',
              backgroundPosition:'bottom',
            backgroundSize:'cover',
            y:mountain2Y
        }}/>
        <motion.div 
        className="absolute inset-0 -z-10"
        style={{backgroundImage:'url(/mountain-1.png)',
              backgroundPosition:'bottom',
            backgroundSize:'cover',
            y:mountain1Y
        }}/>
        <motion.div />
      </div>
    </section>
  );
}
