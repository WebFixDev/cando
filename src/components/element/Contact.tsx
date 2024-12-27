import React from "react";

function Contact() {
  return (
    <div
      className="container p-6 px-4 sm:px-8 md:px-12 flex mx-auto justify-center items-center rounded-[20px]"
      style={{
        background: "linear-gradient(90deg, #B46044 0%, #E5AA76 100%)",
      }}
    >
      {/* Form container */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        {/* Name field */}
        <div className="flex flex-col w-full  md:w-[30%] p-2">
          <input
            type="text"
            name="name"
            className="p-3 bg-white w-full text-black border outline-none border-gray-200 rounded-xl"
            placeholder="Enter your name"
          />
        </div>

        {/* Email field */}
        <div className="flex flex-col w-full  md:w-[30%] p-2">
          <input
            type="email"
            name="email"
            className="p-3 w-full bg-white text-black border outline-none border-gray-200 rounded-xl"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone number field */}
        <div className="flex flex-col w-full md:w-[30%] p-2">
          <input
            type="tel"
            name="phone"
            className="p-3 w-full bg-white text-black border outline-none border-gray-200 rounded-xl"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Contact button */}
        <div className="flex items-center justify-center  p-2">
          <button className="bg-black text-xl text-white py-3 px-6 rounded-xl hover:bg-gray-800 focus:outline-none">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
