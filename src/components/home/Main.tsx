import React from "react";

function Main() {
  return (
    <div className="flex container py-24 mx-auto flex-col md:flex-row items-center gap-8 p-8">
      {/* Left Side - Text */}
      <div className="md:w-2/5">
        <h1 className="text-[32px] font-medium text-heading mb-2">
          Who we are
        </h1>
        <div className="h-[2px] mb-4 w-48 bg-readmore"></div>
        <p className="mb-6 text-[23px] font-normal text-heading">
          Today’s events environment comes with an intricate set of challenging
          logistics. That is why a successful event requires a skilled team,
          experienced in handling operations – from simple events to the more
          complex.
        </p>
        <button className="text-readmore text-[23px] font-normal underline">
          Read more..
        </button>
      </div>

      {/* Right Side - Video */}
      <div className="md:w-2/5 mx-auto">
        <video
          controls
          className="w-full rounded-lg shadow-lg"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Main;
