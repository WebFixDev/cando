import React from "react";
import totalEvent from "@/assets/homePage/totalEvent.jpeg";
import progessBG from "@/assets/homePage/progessBG.png";
import "./progress.css";

const totalEventBg = `url(${totalEvent.src})`;
const progessBGimg = `url(${progessBG.src})`;

function Progress() {
  return (
    <div className="mx-auto container sm:py-0 px-2 py-6 bg-[#EAEAEA]">
      <div
        className="container mx-auto container-bg px-4 h-auto flex flex-col items-center justify-center"
        style={{
          backgroundImage: progessBGimg,
        }}
      >
        {/* Main Container */}
        <div className="w-full flex flex-col md:flex-row gap-6  items-center justify-center">
          {/* Left Side - Total Events */}
          <div className="relative bg-white shadow-md rounded-lg p-8 w-full 2xl:w-[28%] lg:w-[35%] md:w-[40%] text-center overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70"
              style={{
                backgroundImage: totalEventBg,
              }}
            ></div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/90"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col sm:items-start items-center justify-center pl-4 h-full">
              <h1 className="text-6xl md:text-6xl lg:text-8xl leading-tight font-bold text-white">
                324+
              </h1>
              <p className="text-3xl md:text-2xl lg:text-[41px] font-semibold text-white mt-2">
                Total Events
              </p>
            </div>
          </div>

          {/* Right Side - Event Categories */}
          <div className="rounded-lg p-4 md:p-8 w-full md:w-[50%] lg:w-[60%] sm:ml-4 ml-0">
            <h2 className="text-lg md:text-2xl lg:text-[28px] font-semibold text-gray-800 mb-4">
              Event Categories
            </h2>
            <ul className="grid grid-cols-2 gap-6">
              <li className="flex flex-col sm:items-start items-center">
                <span className="text-4xl md:text-5xl lg:text-[60px] font-semibold text-hv">
                  24+
                </span>
                <span className="text-sm md:text-base lg:text-[20px] text-heading mt-2">
                  National Events
                </span>
              </li>
              <li className="flex flex-col sm:items-start items-center">
                <span className="text-4xl md:text-5xl lg:text-[60px] font-semibold text-hv">
                  112+
                </span>
                <span className="text-sm md:text-base lg:text-[20px] text-heading mt-2">
                  Product Launch
                </span>
              </li>
              <li className="flex flex-col sm:items-start items-center">
                <span className="text-4xl md:text-5xl lg:text-[60px] font-semibold text-hv">
                  412
                </span>
                <span className="text-sm md:text-base lg:text-[20px] text-heading mt-2">
                  Sport Events
                </span>
              </li>
              <li className="flex flex-col sm:items-start items-center">
                <span className="text-4xl md:text-5xl lg:text-[60px] font-semibold text-hv">
                  176
                </span>
                <span className="text-sm md:text-base lg:text-[20px] text-heading mt-2">
                  Music Events
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
