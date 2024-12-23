import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {Earth, Jupiter, Mars, Mercury, Neptune, Saturn, Uranus, Venus } from "@/utils/images";

const LightModeParallax: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Parallax effect on mouse move
  const handleMouseMove = (event: MouseEvent) => {
    const parallaxElements = parallaxRef.current?.querySelectorAll(".parallax-item");
    if (parallaxElements) {
      parallaxElements.forEach((element) => {
        const position = parseFloat(element.getAttribute("data-value") || "0");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        (element as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={parallaxRef}
    >
      {/* Planets */}
      <div className="absolute h-screen w-screen hidden md:block"> {/* Hide on smaller screens */}
        <Image
          src={Earth}
          alt="Planet 1"
          width={90}
          height={90}
          className="absolute parallax-item"
          data-value="-15"
          style={{ top: "70%", left: "70%" }}
        />
        <Image
          src={Jupiter}
          alt="Planet 2"
          width={90}
          height={90}
          className="absolute parallax-item"
          data-value="5"
          style={{ top: "40%", left: "80%" }}
        />
        <Image
          src={Mars}
          alt="Planet 3"
          width={90}
          height={90}
          className="absolute parallax-item"
          data-value="30"
          style={{ top: "50%", left: "60%" }}
        />
        <Image
          src={Mercury}
          alt="Planet 4"
          width={90}
          height={90}
          className="absolute parallax-item"
          data-value="-5"
          style={{ top: "70%", left: "40%" }}
        />
        <Image
          src={Neptune}
          alt="Planet 5"
          width={90}
          height={90}
          className="absolute parallax-item"
          data-value="15"
          style={{ top: "25%", left: "25%" }}
        />

     <Image
          src={Saturn}
          alt="Planet 4"
          width={90}
          height={90}
          className="absolute parallax-item"
          data-value="-5"
          style={{ top: "60%", left: "5%" }}
        />
      </div>
    </div>
  );
};

export default LightModeParallax;
