import React from "react";
import totalEvent from "@/assets/homePage/totalEvent.jpeg";
import progessBG from "@/assets/homePage/progessBG.png";
const totalEventBg = `url(${totalEvent.src})`;
const progessBGimg = `url(${progessBG.src})`;

function Progress() {
  return (
    <div className="">
      <div
        className="bg-[#EAEAEA] p-8 h-96 container mx-auto flex items-center justify-center"
        style={{
          backgroundImage: progessBGimg, // Apply background image here
          backgroundSize: "50%", // Set background image size to 50% of the container
          backgroundPosition: "left", // Center the background image
          backgroundRepeat: "no-repeat", // Ensure background doesn't repeat
        }}
      >
        {/* Container */}
        <div className="container flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Left Side - Total Events */}
          <div className="relative bg-white shadow-md rounded-lg py-2 px-2 w-2/6 h-56 text-center overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70"
              style={{
                backgroundImage: totalEventBg,
              }}
            ></div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/90"></div>

            {/* Content - Move text to left side */}
            <div className="relative z-10 flex flex-col items-start justify-start pl-4 h-full">
              <h1 className="text-8xl leading-tight font-bold text-white">
                324+
              </h1>
              <p className="text-[41px]  leading-5 font-semibold text-white">
                Total Events
              </p>
            </div>
          </div>

          {/* Right Side - Other Event Categories */}
          <div className="rounded-lg p-8 w-full md:w-1/2">
            <h2 className="text-[28px] font-semibold text-gray-800 mb-4">
              Event Categories
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="flex flex-col items-start">
                <span className="text-[60px] font-semibold text-hv">24+</span>
                <span className="text-[20px] text-heading mt-2">
                  National Events
                </span>
              </li>
              <li className="flex flex-col items-start">
                <span className="text-[60px] font-semibold text-hv">112+</span>
                <span className="text-[20px] text-heading mt-2">
                  Product Launch
                </span>
              </li>
              <li className="flex flex-col items-start">
                <span className="text-[60px] font-semibold text-hv">412</span>
                <span className="text-[20px] text-heading ">Sport Events</span>
              </li>
              <li className="flex flex-col items-start">
                <span className="text-[60px] font-semibold text-hv">176</span>
                <span className="text-[20px] text-heading ">Music Events</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
