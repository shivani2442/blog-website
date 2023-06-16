import React from 'react';
import { SiCheckio } from "react-icons/si";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-200 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex justify-between items-center'>
        <div className="flex items-center gap-3">
      <div className="cursor-pointer ">
        <SiCheckio size={40} />
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif">
        BELIZE
      </h1>
      </div>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook size={30} className='icon cursor-pointer' />
            <FaTwitter size={30} className='icon cursor-pointer' />
            <FaYoutube size={30} className='icon cursor-pointer' />
            <FaPinterest size={30} className='icon cursor-pointer' />
            <FaInstagram size={30} className='icon cursor-pointer' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li className='px-3'>About</li>
            <li className='px-3'>Careers</li>
            <li className='px-3'>Blog tips</li>
            <li className='px-3'>Advertising</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li className='px-3'>Home</li>
            <li className='px-3'>Blogs</li>
            <li className='px-3'>Events</li>
            <li className='px-3'>Our Story</li>
            <li className='px-3'>Jobs</li>
            <li className='px-3'>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;