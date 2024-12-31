import React from "react";
import AboutMain from "./AboutMain";
import totalEvent from "@/assets/homePage/totalEvent.jpeg";
import progessBG from "@/assets/homePage/progessBG.png";

import Image from "next/image";
// import "./progress.css";

const totalEventBg = `url(${totalEvent.src})`;
const progessBGimg = `url(${progessBG.src})`;

function AboutUs() {
  return (
    <div>
      <div className="flex flex-col md:flex-row container sm:py-16 py-14 mx-auto px-5 md:px-0 gap-8">
        {/* Left Side - Text */}
        <div className="w-full md:w-2/5">
          <h1 className="text-[28px] md:text-[32px] font-medium text-heading mb-2">
            Who we are
          </h1>
          <div className="h-[2px] mb-4 w-24 md:w-48 bg-readmore"></div>
          <p className="mb-6 text-[18px] md:text-[23px] font-normal text-heading">
            Today’s events environment comes with an intricate set of
            challenging logistics. That is why a successful event requires a
            skilled team, experienced in handling operations – from simple
            events to the more complex.
          </p>
          <button className="text-readmore text-[20px] md:text-[23px] font-normal underline">
            Read more..
          </button>
        </div>

        {/* Right Side - Video */}
        <div className="w-full md:w-2/5 mx-auto">
          <video
            controls
            className="w-full rounded-lg shadow-lg"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <AboutMain />

      <div className="flex flex-col md:flex-row items-center container sm:py-16 py-14 mx-auto px-5 md:px-0 gap-8">
        {/* Left Side - Text */}
        <div className="w-full md:w-2/5">
          <h1 className="text-[28px] md:text-[32px] font-medium text-heading mb-2">
            Who we are
          </h1>
          <div className="h-[2px] mb-4 w-24 md:w-48 bg-readmore"></div>
          <p className="mb-6 text-[18px] md:text-[23px] font-normal text-heading">
            Today’s events environment comes with an intricate set of
            challenging logistics. That is why a successful event requires a
            skilled team, experienced in handling operations – from simple
            events to the more complex.
          </p>
          <button className="text-readmore text-[20px] md:text-[23px] font-normal underline">
            Read more..
          </button>
        </div>

        {/* Right Side - Video */}
        <div className="w-full md:w-2/5 mx-auto">
          <Image src={totalEvent} priority={false} alt="event" />
        </div>
      </div>

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
            <div className="relative bg-white shadow-md rounded-lg p-8 w-full 2xl:w-[32%] lg:w-[35%] md:w-[40%] text-center overflow-hidden">
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
            <div className="rounded-lg p-4 md:p-8 w-full md:w-2/5 sm:ml-4 ml-0">
              <h1 className="text-[28px] md:text-[32px] font-medium text-heading mb-2">
                Who we are
              </h1>
              <div className="h-[2px] mb-4 w-24 md:w-48 bg-readmore"></div>
              <p className="mb-6 text-[18px] md:text-[23px] font-normal text-heading">
                Today’s events environment comes with an intricate set of
                challenging logistics. That is why a successful event requires a
                skilled team, experienced in handling operations – from simple
                events to the more complex.
              </p>
              <button className="text-readmore text-[20px] md:text-[23px] font-normal underline">
                Read more..
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 pb-28 md:pt-24 md:pb-24">
        <div className="flex justify-center container w-full mx-auto h-auto md:pt-0 lg:pb-32 md:pb-44 pt-12 pb-24  items-center xl:px-0 xl:w-full">
          <div className="w-full px-5 flex flex-col lg:flex-row justify-between items-start gap-[20px] md:gap-[30px] xl:gap-32 h-fit">
            {/* Text Section */}
            <div className="flex w-full lg:w-1/2 flex-col justify-start items-start gap-2.5">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-[#161712] text-[28px] md:text-[32px] font-medium font-['Poppins'] leading-9">
                  Who we are
                </h2>
                <div className="h-0.5 bg-[#af6245] rounded-full w-[60px] md:w-full"></div>
              </div>
              <p className="text-[#161712] text-[18px] md:text-[23px] font-normal font-['Poppins'] leading-9">
                Today’s events environment comes with an intricate set of
                challenging logistics. That is why a successful event requires a
                skilled team, experienced in handling operations – from simple
                events to the more complex.
              </p>
              <a
                href="#"
                className="text-[#af6245] text-[18px] md:text-[23px] font-normal font-['Poppins'] leading-9 hover:underline"
              >
                Read More...
              </a>
            </div>

            <div className="relative w-full lg:w-5/6 xl:w-1/2 max-w-[766px] h-auto grid grid-cols-2 gap-4 md:block md:pb-44 pb-0">
              <Image
                className="w-full max-w-[180px] sm:max-w-[220px] md:w-[200px] lg:w-[308.88px]  h-auto rounded-sm shadow-md border-4 border-white col-start-1 row-start-2 md:absolute md:left-[49.14px] md:top-[170.41px]"
                src={totalEvent}
                alt="Image 1"
              />
              <Image
                className="w-full max-w-[190px] sm:max-w-[230px]  md:w-[289px] lg:w-[309.77px]  h-auto rounded-sm shadow-md border-4 border-white col-start-2 row-start-1 md:absolute md:left-[260.41px] md:top-0"
                src={totalEvent}
                alt="Image 2"
              />
              <Image
                className="w-full max-w-[180px] sm:max-w-[220px] md:w-[288px] lg:w-[308.88px] h-auto rounded-sm shadow-md border-4 border-white col-start-2 row-start-2 md:absolute md:left-[337.26px] md:top-[155.37px]"
                src={totalEvent}
                alt="Image 3"
              />
              <Image
                className="w-full max-w-[170px] sm:max-w-[210px] md:w-[246px] lg:w-[266.61px]  h-auto rounded-sm shadow-md border-4 border-white col-start-1 row-start-1 md:absolute md:left-0 md:top-[9.95px]"
                src={totalEvent}
                alt="Image 4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
