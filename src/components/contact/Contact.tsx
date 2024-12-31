import React from "react";
import Email from "@/assets/svg/email.svg";
import Fax from "@/assets/svg/fax.svg";
import Phone from "@/assets/svg/phone.svg";

function Contact() {
  return (
    <div className="container mx-auto px-5 sm:py-24 sm:pb-32 pb-36 pt-12">
      <div className="flex flex-col md:flex-row xl:justify-evenly justify-between items-center gap-8">
        {/* Form Section */}
        <div className="w-full lg:w-2/4 xl:w-2/5">
          <div className="flex flex-col gap-10">
            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Get in <span className="text-[#af6245]">Touch</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 mt-2">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-6">
              {[
                { label: "Name", type: "text", name: "name" },
                { label: "Email", type: "email", name: "email" },
                { label: "Phone Number", type: "tel", name: "phone" },
                {
                  label: "Where did you find us?",
                  type: "text",
                  name: "source",
                },
              ].map((field, index) => (
                <input
                  key={index}
                  type={field.type}
                  name={field.name}
                  placeholder={`Enter ${field.label}`}
                  className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#af6245] outline-none"
                />
              ))}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#af6245] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#8f4f38] transition"
              >
                Contact
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            {[
              {
                icon: <Phone className="text-[#af6245]" />,
                label: "PHONE",
                value: "03 5432 1234",
              },
              {
                icon: <Fax className="text-[#af6245]" />,
                label: "FAX",
                value: "03 5432 1234",
              },
              {
                icon: <Email className="text-[#af6245]" />,
                label: "EMAIL",
                value: "contact@company.com",
              },
            ].map((contact, index) => (
              <div key={index} className="flex items-center flex-wrap gap-4">
                <div>{contact.icon}</div>
                <div>
                  <p className="text-sm font-bold text-gray-800">
                    {contact.label}
                  </p>
                  <p className="text-sm text-[#af6245]">{contact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-2/4 xl:w-2/5">
          <div className="relative w-full h-64 md:h-[520px] rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-full border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.487270076853!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAuNzEyOCwgNzQuMDA2NSJXQjUuMDA5MA!5e0!3m2!1sen!2sus!4v1638150588439!5m2!1sen!2sus"
              //   allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
