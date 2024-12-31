import React from "react";
import Bannar from "@/components/atom/OtherPageBanner";
import Progress from "@/components/home/Progress";
import EventSlider from "@/components/element/EventSlider";

function page() {
  return (
    <div>
      <Bannar />
      <div className="py-24 md:pb-24 pb-40 ">
        <div className="">
          <Progress />
        </div>

        <EventSlider heading="Natinal Events" />
        <EventSlider heading="Product Launches" />
        <EventSlider heading="Sports Events" />
        <EventSlider heading="Music Events" />
      </div>
    </div>
  );
}

export default page;
