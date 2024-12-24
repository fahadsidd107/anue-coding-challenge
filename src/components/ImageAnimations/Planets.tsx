import React from "react";
import Image, { StaticImageData } from "next/image";

interface PlanetsProps {
  src: string | StaticImageData;
  alt: string;
  dataValue: string;
  style: React.CSSProperties;
}

const Planets: React.FC<PlanetsProps> = ({ src, alt, dataValue, style }) => (
  <Image
    src={src}
    alt={alt}
    width={120}
    height={120}
    className="absolute parallax-item"
    data-value={dataValue}
    style={style}
  />
);

export default Planets;