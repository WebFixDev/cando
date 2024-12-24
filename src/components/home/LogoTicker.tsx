"use client";
import React from "react";
import Image from "next/image";
import audiLogo from "@/assets/images/audi.png";
import mobilyLogo from "@/assets/images/Mobily.png";
import rollsRoyceLogo from "@/assets/images/Rolls-Royce_Motor.png";
import mitsubishiLogo from "@/assets/images/mitsubishi.png";
import ncbLogo from "@/assets/images/ncb.png";
import nokiaLogo from "@/assets/images/nokia.png";
import { motion } from "framer-motion";

const images = [
  { src: audiLogo, alt: "Acme Company Logo" },
  { src: mobilyLogo, alt: "Auantum Company Logo" },
  { src: rollsRoyceLogo, alt: "Echo Company Logo" },
  { src: mitsubishiLogo, alt: "Celestial Company Logo" },
  { src: ncbLogo, alt: "Pulse Company Logo" },
  { src: nokiaLogo, alt: "Apex Company Logo" },
];

function LogoTicker() {
  return (
    <div className="bg-gray-100 backdrop-blur-3xl text-white py-10 shadow">
      <div className="container mx-auto relative">
        <div className="overflow-hidden relative flex items-center">
          {/* Gradient blur effect on each side */}
          <div className="absolute left-0 h-full w-20 bg-gradient-to-r  to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 h-full w-20 bg-gradient-to-l  to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-16 flex-none pr-16"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {images.map(({ src, alt }, index) => (
              <React.Fragment key={index}>
                <Image src={src} alt={alt} className="flex-none h-16 w-auto" />
                {/* Add a line between logos, except after the last one */}
                {index < images.length - 1 && (
                  <span className="w-[2px] h-[60px] bg-black/20"></span>
                )}
              </React.Fragment>
            ))}
            {/* Duplicate images for seamless infinite scroll effect */}
            {images.map(({ src, alt }, index) => (
              <React.Fragment key={`duplicate-${index}`}>
                <Image
                  src={src}
                  alt={alt}
                  className="flex-none h-[60px] w-auto"
                />
                {index < images.length - 1 && (
                  <span className="w-[2px] h-[60px] bg-black/20"></span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
