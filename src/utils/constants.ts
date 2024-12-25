import { Earth, Jupiter, Mars, Mercury, Neptune, Saturn,Cloud1, Cloud2, Cloud3, Cloud4, Cloud5, Cloud6 } from "./images";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;


export const planets = [
    // Left side planets
    { src: Earth, alt: "Planet 1", dataValue: "-15", style: { top: "20%", left: "5%" } },
    { src: Jupiter, alt: "Planet 2", dataValue: "5", style: { top: "50%", left: "10%" } },
    { src: Mars, alt: "Planet 3", dataValue: "30", style: { top: "80%", left: "5%" } },
    // Right side planets
    { src: Mercury, alt: "Planet 4", dataValue: "-5", style: { top: "25%", right: "5%" } },
    { src: Neptune, alt: "Planet 5", dataValue: "15", style: { top: "55%", right: "10%" } },
    { src: Saturn, alt: "Planet 6", dataValue: "-5", style: { top: "85%", right: "5%" } }
  ];
  
  export const clouds = [
    // Left side clouds
    { src: Cloud1, alt: "Cloud 1", dataValue: "-15", style: { top: "10%", left: "10%" } },
    { src: Cloud2, alt: "Cloud 2", dataValue: "5", style: { top: "35%", left: "3%" } },
    { src: Cloud3, alt: "Cloud 3", dataValue: "30", style: { top: "65%", left: "15%" } },
    // Right side clouds
    { src: Cloud4, alt: "Cloud 4", dataValue: "-5", style: { top: "15%", right: "12%" } },
    { src: Cloud5, alt: "Cloud 5", dataValue: "15", style: { top: "45%", right: "3%" } },
    { src: Cloud6, alt: "Cloud 6", dataValue: "-5", style: { top: "70%", right: "15%" } }
  ];