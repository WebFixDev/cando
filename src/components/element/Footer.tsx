import React from "react";
import footerLogo from "@/assets/footerLogo.png";
import Image from "next/image";
import facebookLogo from "@/assets/icon/facebook.png";
import linkedinLogo from "@/assets/icon/linkedin.png";
import slackLogo from "@/assets/icon/slack.png";
import emailLogo from "@/assets/icon/gmail.png";
import instagramLogo from "@/assets/icon/instagram.png";
import rightArrow from "@/assets/svg/arrow-right.svg?url";
import Link from "next/link";

import Contact from "./Contact";

function Footer() {
  return (
    <footer className=" body-font relative">
      <div className="absolute -top-[18%] md:-top-[12%] left-0 w-full  flex justify-center items-center text-white">
        <Contact />
      </div>
      <div className="bg-[#161616]  md:pt-6 pt-24">
        <div className=" container pt-12 pb-3 border-b border-[#2C2C2C] mx-auto">
          <div className="flex flex-wrap md:text-left justify-evenly text-center py-4 mt-8">
            {/* Logo and description */}
            <div className="lg:w-2/6 md:w-1/2 w-full px-4 sm:mb-8 mb-0 border-r border-[#2C2C2C] flex flex-col items-center">
              <nav className="list-none mb-10 px-2 space-y-4 text-center">
                <Image src={footerLogo} width={221} height={80} alt="Cando" />
                <p className="text-white text-base text-left sm:text-lg md:text-xl font-normal">
                  strives to be at the forefront of <br />
                  innovative technologies
                </p>
              </nav>
            </div>

            {/* Quick links */}
            <div className="lg:w-2/6 md:w-1/2 w-full px-4 sm:mb-8 mb-0 border-r border-[#2C2C2C]">
              <nav className="list-none mb-10 px-4 space-y-2">
                <h2 className="title-font font-semibold text-2xl text-gold-400 tracking-widest mb-3">
                  Quick link
                </h2>
                <li>
                  <Link
                    href="/"
                    className="text-white text-base sm:text-lg md:text-xl font-normal"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="about-us"
                    className="text-white text-base sm:text-lg md:text-xl font-normal"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="our-work"
                    className="text-white text-base sm:text-lg md:text-xl font-normal"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="contact-us"
                    className="text-white text-base sm:text-lg md:text-xl font-normal"
                  >
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>

            {/* Newsletter Subscription */}
            <div className="lg:w-2/6 md:w-1/2 w-full px-4 mb-8 md:mb-0">
              <div className="px-4">
                <h2 className="title-font font-semibold text-2xl text-gold-400 tracking-widest mb-3">
                  Subscribe to Newsletter
                </h2>

                <div className="flex xl:flex-nowrap w-full md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                  <div
                    className="relative sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2"
                    style={{ width: "inherit" }}
                  >
                    <input
                      type="text"
                      id="footer-field"
                      name="footer-field"
                      className="w-full border bg-transparent rounded-xl border-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />

                    {/* Arrow Button (Image instead of SVG) */}
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2  text-white rounded-full p-2">
                      <Image
                        src={rightArrow} // Use the imported image as the source
                        alt="Right Arrow"
                        width={24} // Set a fixed width for the image
                        height={24} // Set a fixed height for the image
                      />
                    </button>
                  </div>
                </div>
                {/* Social Media Icons */}
                <ul className="flex flex-row justify-center md:justify-start space-x-2 mt-6 ">
                  <li>
                    <Image
                      src={facebookLogo}
                      height={48}
                      width={47}
                      alt="facebook"
                    />
                  </li>
                  <li>
                    <Image
                      src={instagramLogo}
                      height={48}
                      width={47}
                      alt="instagram"
                    />
                  </li>
                  <li>
                    <Image
                      src={linkedinLogo}
                      height={48}
                      width={47}
                      alt="linkedin"
                    />
                  </li>
                  <li>
                    <Image src={slackLogo} height={48} width={47} alt="slack" />
                  </li>
                  <li>
                    <Image src={emailLogo} height={48} width={47} alt="email" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact section with 50% height */}

        {/* Footer Bottom */}
        <div className="bg-[#161616]">
          <div className="container px-5 py-4 mx-auto flex justify-center flex-row">
            <p className="text-lg font-normal text-center text-[#A9A9A9] sm:ml-6 sm:mt-0 mt-4">
              © 2024 CanDo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
