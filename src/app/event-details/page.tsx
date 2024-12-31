import React from "react";
import EventDetails from "@/components/eventDetails/EventDetails";
import Bannar from "@/components/atom/OtherPageBanner";

function page() {
  return (
    <div>
      <Bannar />
      <EventDetails />
    </div>
  );
}

export default page;
