import React from "react";
import Image from "next/image";
import progessBG from "@/assets/homePage/progessBG.png";
import BannarImg from "@/assets/banner.jpeg";

function AboutMain() {
  const progessBGimg = `url(${progessBG.src})`;
  return (
    <div className="md:pt-8 md:pb-0 ">
      <div
        className="flex justify-center py-8 container w-full mx-auto h-auto lg:pt-24 lg:pb-44 sm:pt-10 sm:pb-28 md:pt-12 md:pb-32  bg-[#F5F5F5] items-center xl:px-0 xl:w-full"
        style={{
          backgroundImage: progessBGimg,
          backgroundSize: "75%",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full px-5 flex flex-col-reverse lg:flex-row justify-center sm:items-start items-center gap-[20px] md:gap-[30px] xl:gap-20 h-fit">
          {/* Image Section */}
          <div className="relative w-full lg:w-5/6 xl:w-2/5 max-w-[766px] h-auto grid grid-cols-2 gap-4 md:block md:pb-48 pb-0">
            <Image
              className="w-full max-w-[180px] m-auto sm:m-0 md:max-w-[240px] md:w-[200px] lg:w-[328.88px] h-auto rounded-sm shadow-md border-4 border-white col-start-1 row-start-2 md:absolute md:left-[69.14px] md:top-[130.41px]"
              src={BannarImg}
              alt="Image 1"
            />
            <Image
              className="w-full max-w-[180px] m-auto sm:m-0 md:max-w-[240px] md:w-[289px] lg:w-[329.77px] h-auto rounded-sm shadow-md border-4 border-white col-start-2 row-start-1 md:absolute md:left-[260.41px] md:top-0"
              src={BannarImg}
              alt="Image 2"
            />
            <Image
              className="w-full max-w-[180px] m-auto sm:m-0 md:max-w-[220px] md:w-[288px] lg:w-[308.88px] h-auto rounded-sm shadow-md border-4 border-white col-start-2 row-start-2 md:absolute md:left-[337.26px] md:top-[135.37px]"
              src={BannarImg}
              alt="Image 3"
            />
            <Image
              className="w-full max-w-[180px] m-auto sm:m-0 md:max-w-[210px] md:w-[246px] lg:w-[266.61px] h-auto rounded-sm shadow-md border-4 border-white col-start-1 row-start-1 md:absolute md:left-5 md:top-[9.95px]"
              src={BannarImg}
              alt="Image 4"
            />
          </div>

          {/* Text Section */}
          <div className="flex w-full lg:w-1/2 flex-col justify-start items-start lg:pr-20">
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
        </div>
      </div>
    </div>
  );
}

export default AboutMain;
