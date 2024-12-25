import React, { useEffect, useRef } from "react";
import Planets from "../ImageAnimations/Planets";
import { planets } from "../../utils/constants";

const DarkModeParallax: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent) => {
    const parallaxElements = parallaxRef.current?.querySelectorAll(".parallax-item");
    if (parallaxElements) {
      parallaxElements.forEach((element) => {
        const position = parseFloat(element.getAttribute("data-value") || "0");
        const x = (window.innerWidth - event.pageX * position) / 450; 
        const y = (window.innerHeight - event.pageY * position) / 450;
        (element as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
        (element as HTMLElement).style.transition = "transform 0.2s ease-out";
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <div ref={parallaxRef} className="fixed inset-0 overflow-hidden">
      <div className="absolute h-screen w-screen hidden md:block overflow-hidden">
        {planets.map((planet, index) => (
          <Planets key={index} {...planet} />
        ))}
      </div>
    </div>
  );
};

export default DarkModeParallax;