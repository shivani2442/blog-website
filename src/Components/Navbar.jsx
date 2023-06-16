import React, { useState } from "react";
import { SiCheckio } from "react-icons/si";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { HiPencilSquare } from "react-icons/hi2";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="w-full  h-20 py-2 flex justify-between items-center p-4 bg-white">
      <div className="flex items-center gap-3 ">
      <div className="cursor-pointer ">
        <SiCheckio size={40} />
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif">
        BELIZE
      </h1>
      </div>
      {/* Search Input */}
      <div className="bg-gray-200 rounded-full hidden md:flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search Blogs"
        />
      </div>
      <AiOutlineSearch className=" inline md:hidden" size={25} />

      {/* Cart button */}
      <div className="flex gap-6 items-center">

      <button className="bg-black text-white py-2 px-4 hidden md:flex items-center hover:bg-black/30 hover:text-black rounded-full">
        <HiPencilSquare size={20} className="" />
        Write
      </button>
      <HiPencilSquare size={20} className="inline md:hidden" />


      {/* <div className="flex items-center"> */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
      {/* </div> */}
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-3 top-3 cursor-pointer"
        />
        <div className="flex">
          <div className="cursor-pointer py-3 ml-1 flex">
            <SiCheckio size={40} />
          </div>
          <h1 className="text-3xl font-serif py-3 ml-2">BELIZE</h1>
        </div>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-2xl py-3 flex mr-4">Home</li>
            <li className="text-2xl py-3 flex mr-4">Blogs</li>
            <li className="text-2xl py-3 flex mr-4">Events</li>
            <li className="text-2xl py-3 flex mr-4">Our Story</li>
            <li className="text-2xl py-3 flex mr-4">Jobs</li>
            <li className="text-2xl py-3 flex mr-4">Contact Us</li>
            <li className="text-2xl py-3 flex mr-4">Community</li>
            <div className="flex justify-between my-5">
              <FaFacebook size={25} className="icon" />
              <FaTwitter size={25} className="icon" />
              <FaYoutube size={25} className="icon" />
              <FaPinterest size={25} className="icon" />
              <FaInstagram size={25} className="icon" />
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
