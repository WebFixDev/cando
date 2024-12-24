import graphicImage from "@/assets/homePage/banner.jpeg";
import logo from "@/assets/logo.png";
import Image from "next/image";
const graphic = `url(${graphicImage.src})`;

function TopBannarImg() {
  return (
    <div className="relative h-[38rem] flex justify-center items-center text-white">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.637), rgba(255, 255, 255, 0)), ${graphic}`,
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center">
        <div className="flex flex-row justify-center space-x-4 items-center">
          <Image
            alt="cando"
            src={logo}
            priority={true}
            width={221}
            height={80}
          />

          <h1 className="text-[32px] text-heading mb-5 font-normal">
            strives to be at the forefront
            <br />
            of innovative technologies.
          </h1>
        </div>

        <p className="text-center text-[23px] font-normal text-heading">
          Through passion and commitment, we are always aiming <br />
          for events that raise the bar in creativity and engineering.
        </p>
      </div>
    </div>
  );
}

export default TopBannarImg;
