import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import gsap from "gsap";

const Tech = () => {
  const iconsRef = useRef([]);

  useEffect(() => {
    // === Uncomment this block to enable GSAP animation ===
    
    gsap.from(iconsRef.current, {
      opacity: 4,
      y: 40,
      scale: 0.9,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Example for continuous floating effect
    iconsRef.current.forEach((icon, i) => {
      gsap.to(icon, {
        y: "+=60",
        repeat: -1,
        yoyo: true,
        duration: 2 + i * 0.1,
        ease: "sine.inOut",
      });
    });
    
  }, []);

  return (
    <div
      className="
        flex flex-wrap justify-center gap-6 sm:gap-10 
        max-w-4xl mx-auto px-4 sm:px-0
      "
    >
      {technologies.map((technology, index) => (
        <div
          key={technology.name}
          ref={(el) => (iconsRef.current[index] = el)}
          className="
            w-20 h-20 sm:w-24 sm:h-24 
            bg-[#1a1a2e] rounded-xl 
            flex items-center justify-center 
            shadow-lg 
            hover:shadow-[0_0_20px_#915eff] 
            transition-all duration-300 
            hover:scale-110
          "
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
