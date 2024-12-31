import React from "react";
import eventImg from "@/assets/images/event.jpeg";
import event2Img from "@/assets/images/event2.jpeg";
import Image from "next/image";

function EventDetails() {
  return (
    <div className="container mx-auto px-5 sm:py-24 pb-36 pt-12">
      <div>
        <h1 className="sm:text-[32px] text-3xl  font-medium text-heading mb-2">
          Event Name
        </h1>
        <div className="h-[2px] mb-4 w-[190px] bg-readmore"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        {/* Large Picture */}
        <div className="w-full md:w-[70%] h-96 md:h-[660px] rounded-lg overflow-hidden shadow-lg">
          <Image
            priority={false}
            quality={100}
            src={eventImg}
            alt="Large Picture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Small Pictures */}
        <div className="w-full md:w-[30%] grid grid-cols-1 sm:grid-rows-1 gap-4">
          {[1, 2, 3].map((pic) => (
            <div
              key={pic}
              className="w-full h-40 sm:h-[210px] rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={event2Img}
                priority={false}
                quality={100}
                alt={`Small Picture ${pic}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="py-12">
        <div className="text-[#161712] text-[32px] font-medium font-['Poppins'] leading-9">
          Event Details
        </div>
        <div className="h-[2px] mb-4 mt-1 w-[200px] line-clamp-2 bg-readmore"></div>

        <div className="self-stretch text-[#161712] text-[23px] font-normal font-['Poppins'] leading-9">
          Today’s events environment comes with a intricate set of challenging
          logistics. That is why a successful event requires a skilled team,
          experienced in handling operations – from simple events to the more
          complex.
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
