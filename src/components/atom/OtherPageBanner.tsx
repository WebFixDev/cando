import graphicImage from "@/assets/homePage/banner.jpeg";
import logo from "@/assets/logo.png";
import Image from "next/image";

const graphic = `url(${graphicImage.src})`;

function OtherPageBanner() {
  return (
    <div className="relative md:h-[22rem] h-[22rem]  flex justify-center items-center text-white">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.637), rgba(255, 255, 255, 0)), ${graphic}`,
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center mt-20 px-4">
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-4 items-center">
          <Image
            alt="cando"
            src={logo}
            priority={true}
            width={200}
            height={70}
            className="w-[150px] md:w-[200px] mb-4 md:mb-0"
          />

          <h1 className="text-[24px] md:text-[28px] lg:text-[32px] text-heading font-normal leading-snug">
            strives to be at the forefront
            <br className="hidden md:block" />
            of innovative technologies.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default OtherPageBanner;
