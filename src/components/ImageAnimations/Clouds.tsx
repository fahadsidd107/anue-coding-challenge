import React from "react";
import Image, { StaticImageData } from "next/image";

interface CloudsProps {
  src: string | StaticImageData;
  alt: string;
  dataValue: string;
  style: React.CSSProperties;
}

const Clouds: React.FC<CloudsProps> = ({ src, alt, dataValue, style }) => (
  <Image
    src={src}
    alt={alt}
    width={220}
    height={130}
    className="absolute parallax-item"
    data-value={dataValue}
    style={style}
  />
);

export default Clouds;