"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/our-work-bottom-slider";
import { OurWorkTopSlider } from "../ui/our-work-top-slider";
import BannarImg from "@/assets/banner.jpeg";
import rightArrow from "@/assets/svg/arrow-right.svg?url";
import Image from "next/image";
export function OurWork() {
  return (
    <div className="py-12 sm:pb-36 pb-52 sm:px-0">
      <div className="container px-5 mx-auto mb-4 flex justify-between items-center">
        <div>
          <h1 className="sm:text-[32px] text-3xl  font-medium text-heading mb-2">
            Over Work
          </h1>
          <div className="h-[2px] mb-4 w-[150px] bg-readmore"></div>
        </div>
        <div className="flex flex-row space-x-3 items-center">
          <button className="text-gold-400 text-xl">See All</button>
          <Image
            src={rightArrow}
            alt="Right Arrow"
            className="w-6 h-6"
            priority={true}
          />
        </div>
      </div>

      <div className="sm:h-[22rem] h-[17rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
      <div className=" h-[18rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <OurWorkTopSlider items={testimonials} direction="left" speed="slow" />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    img: BannarImg,
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "A Tale of Two Cities",
    img: BannarImg,
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Tale of Two Cities",
    img: BannarImg,
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "A Tale of Two Cities",
    img: BannarImg,
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "A Tale of Two Cities",
    img: BannarImg,
  },
];
