"use client";

import { useState, useEffect } from "react";


type ChangingImageProps = {
  images: string[];
  url: string;
  alt: string;
};

export default function ChangingImage({ images, url, alt }: ChangingImageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-tl-md rounded-tr-md">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            <div className="relative w-full h-full">
              <img
                alt={alt}
                src={`${url}${image}.png`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#0d0e12] via-[#0d0e12] via-[#0d0e12] to-transparent"></div>
    </div>
  );
}
