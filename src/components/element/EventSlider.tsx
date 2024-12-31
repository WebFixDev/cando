"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import BannarImg from "@/assets/banner.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

import { FreeMode } from "swiper/modules";
interface EventSliderProps {
  heading: string;
}

export default function EventSlider({ heading }: EventSliderProps) {
  return (
    <div className="sm:py-10 py-8 container mx-auto px-5">
      <div className="inline-block mb-5">
        <h1 className="sm:text-[32px] text-3xl font-medium text-heading mb-2">
          {heading}
        </h1>
        <div className="h-[2px] bg-readmore mt-1"></div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          // Small screens (e.g., mobile devices in portrait mode)
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          // Medium screens (e.g., tablets, mobile devices in landscape mode)
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Large screens (e.g., desktop)
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SwiperSlide key={index}>
            <li className="relative w-full h-64 sm:h-72 md:h-80 lg:h-80 max-w-full rounded-2xl border flex-shrink-0 border-gray-300 overflow-hidden">
              {/* Image */}
              <Image
                src={BannarImg}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent z-10"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-left text-black">
                <h3 className="text-lg font-semibold">
                  National Event {index + 1}
                </h3>
              </div>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
