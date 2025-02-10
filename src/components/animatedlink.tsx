"use client";

import { useState } from "react";
import Link from "next/link";

type ChangingImageProps = {
  text: string;
  link: string;
  target: string;
};

export default function AnimatedLink({ text, link, target }: ChangingImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // <div className="relative flex justify-end pr-16">
    //   {/* Premier SVG */}
    //   <svg
    //     width="200"
    //     height="100"
    //     style={{ background: "transparent" }} // Assurer que le fond est transparent
    //     onMouseEnter={() => setIsHovered(true)}
    //     onMouseLeave={() => setIsHovered(false)}
    //   >
    //     <path
    //       d="M 1,1 H 188.28125 V 45.8125 H 1 Z"
    //       stroke="#fff"
    //       fill="none"
    //       style={{
    //         strokeDashoffset: isHovered ? "-32.0687px" : "202.025px", // Change on hover
    //         strokeDasharray: "422.375px, 45.8125px",
    //         transition: "stroke-dashoffset 1s ease", // Animation transition
    //       }}
    //       strokeWidth="1"
    //       strokeLinecap="round" // Angle lisse au coin
    //       strokeLinejoin="round" // Angle lisse entre les segments de ligne
    //     />
    //     <foreignObject x="50%" y="50%" width="130" height="30">
    //       <Link
    //         href={`/${locale}/projects`}
    //         className="text-ghost-white text-xs font-bold flex"
    //       >
    //         <IoMdArrowDropright /> {text}
    //       </Link>
    //     </foreignObject>
    //   </svg>
    // </div>

    <>
      <svg
        width="200"
        height="50"
        viewBox="0 0 200 50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Cadre animé */}
        <path
          d="M 1,1 H 188.28125 V 45.8125 H 1 Z"
          stroke="#fff"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDashoffset: isHovered ? "-32.0687px" : "202.025px",
            strokeDasharray: "422.375px, 45.8125px",
            transition: "stroke-dashoffset .5s ease",
          }}
        />

        <Link href={link} className="text-ghost-white text-xs font-bold flex" target={target}>
          <text
            x="47.5%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontWeight="bold"
          >
            {text.toUpperCase()}
          </text>
        </Link>
      </svg>
    </>
  );
}
