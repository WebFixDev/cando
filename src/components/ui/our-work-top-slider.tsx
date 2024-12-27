"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

export const OurWorkTopSlider = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    img: string | StaticImageData;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  });
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-full overflow-hidden  ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative w-[350px] h-56 max-w-full rounded-2xl border flex-shrink-0 border-gray-300 md:w-[450px] overflow-hidden"
          >
            {/* Image */}
            <Image
              src={item.img} // Use the image URL passed as a prop
              alt="testimonial"
              layout="fill" // Make the image fill the container
              objectFit="cover" // Cover the container while maintaining aspect ratio
              className="absolute inset-0 z-0" // Ensure the image covers the entire container
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent z-10"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-left text-gray-800">
              <h3 className="text-lg text-gray-950 font-semibold">
                {item.name}
              </h3>
              <p className="text-sm font-normal text-gold-400">
                Natianal Event
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
