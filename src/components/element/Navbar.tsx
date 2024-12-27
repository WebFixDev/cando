"use client";
import { useState, useEffect, useRef } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const scrollPosition = useRef<number>(0); // Using useRef to keep track of scroll position
  const [isOpen, setIsOpen] = useState<boolean>(false); // For mobile menu toggle

  const handleScroll = () => {
    // Check the current scroll position
    if (window.scrollY > 20 && scrollPosition.current <= 20) {
      setIsSticky(true);
    } else if (window.scrollY <= 20 && scrollPosition.current > 20) {
      setIsSticky(false);
    }
    // Update the scroll position stored in the ref
    scrollPosition.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-white/90 p-4 px-6 ${
        isSticky
          ? "fixed top-0 left-0 w-full z-50"
          : "absolute top-[20px] rounded-2xl sm:w-[80%] w-[90%] z-50 left-1/2 transform -translate-x-1/2"
      } transition-all`}
    >
      <div className="flex items-center justify-between">
        <Image
          alt="cando"
          src={Logo}
          priority={true}
          width={120}
          height={100}
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-black text-[20px] font-medium hover:text-hv"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-black text-[20px] font-medium hover:text-hv"
          >
            About Us
          </Link>
          <Link
            href="/our-work"
            className="text-black text-[20px] font-medium hover:text-hv"
          >
            Our Work
          </Link>
          {/* Golden Contact Us Button */}

          <Link
            href="contact-us"
            className="text-white px-6 py-2 text-[20px] font-medium rounded-xl transition-all"
            style={{
              background: "linear-gradient(90deg, #B46044 0%, #E5AA76 100%)",
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={toggleMenu} // Toggle menu visibility
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`md:hidden py-11 ${
          isOpen ? "block" : "hidden"
        } transition-all ease-in-out duration-300`}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link
            href="/"
            className="text-black text-[20px] font-medium hover:text-hv"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-black text-[20px] font-medium hover:text-hv"
          >
            About Us
          </Link>
          <Link
            href="/our-work"
            className="text-black text-[20px] font-medium hover:text-hv"
          >
            Our Work
          </Link>
          {/* Golden Contact Us Button */}
          <Link
            href="/contact-us"
            className="text-white px-6 py-2 text-[20px] font-medium rounded-xl transition-all"
            style={{
              background: "linear-gradient(90deg, #B46044 0%, #E5AA76 100%)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
