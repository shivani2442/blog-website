import React, { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { data } from "../data/data.js";
import { BsBookmark } from "react-icons/bs";


const Blog = () => {
  //   console.log(data);
  const [blogs, setBlogs] = useState(data);

  //   Filter Type arts,fitness etc
  const filterType = (category) => {
    setBlogs(
      data.filter((item) => {
        return item.category === category;
      })
    );
  }

  return (
    <div className="w-full flex-col px-8">
    <div className='sm:text-3xl md:text-5xl lg:text-6xl pt-3 font-bold text-center'>
      B L O G S
      </div>
    {/* <div className=" mx-auto px-5 py-3"> */}
      {/* Filter Row */}
      {/* <div className="flex flex-col justify-center"> */}
        {/* Fliter Type */}
        {/* <div> */}
          {/* <span className="font-bold text-gray-700">Filter Type</span> */}
          <div className="flex justify-center text-lg items-center  gap-10">
            <button
              onClick={() => setBlogs(data)}
              className=" border-none text-black hover:bg-black hover:text-white t rounded-full  py-2 px-6"
            >
              All
            </button>
            <button
              onClick={() => filterType("Technology")}
              className=" border-none text-black hover:bg-black hover:text-white  rounded-full   py-2 px-6"
            >
              Technology
            </button>
            <button
              onClick={() => filterType("Arts")}
              className="m-4 border-none text-black hover:bg-black hover:text-white  rounded-full  py-2 px-6"
            >
              Arts
            </button>
            <button
              onClick={() => filterType("Fitness")}
              className="m-4 border-none text-black hover:bg-black hover:text-white  rounded-full  py-2 px-6"
            >
              Fitness
            </button>
          </div>
        {/* </div> */}
     
        {/* Display blogs */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {blogs.map((item, index) => (
            <div
              key={index}
              className="border shadow-lg hover:scale-105 duration-300">
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-[300px] object-cover items-center"
              />
              <div className="flex justify-between items-center gap-6 px-3 py-4">
                <a href="#" className="font-semibold hover:text-red-400">{item.description}</a>
                <p>
                  <span className="bg-white text-gray-500 items-center gap-1 flex">
                    <MdFavorite size={20} className="" />
                    {item.likes}
                  </span>
                </p>
              </div>
              <div className="flex justify-between px-2 py-4">
                <h1 className="text-gray-500 text-sm">{item.category}</h1>
                <BsBookmark/>
              </div>
            </div>
          )
        )
          }
        </div>
      {/* </div> */}
    {/* </div> */}
    </div>
 );
};
export default Blog