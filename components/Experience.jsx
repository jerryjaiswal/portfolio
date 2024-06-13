import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";
const Experience = () => {
  return (
    <div className="px-40  relative left-80" id='experience'>
      <div className="my-10">
        <h1 >
          <span className="font-mono font-thin text-[24px] text-[#64ffda]">
            02.{" "}
          </span>
          <span className="font-semibold text-[#ccd6f6] text-3xl">
            Where I have Worked
          </span>{" "}
        </h1>
      </div>
      <p className='w-[300px] relative bottom-12 left-[330px] border-[#243554] border-[1px]'></p>


      <div className="text-left">
        <div className="flex pb-2">
          <h1 className="font-medium text-[#ccd6f6] text-[20px]">
            Full Stack Developer{" "}
          </h1>
          <span>
            <Link
              className="text-[#64ffda] font-semibold text-[20px]"
              href="https://www.fosterreads.com/"
            >
              @ Foster Reads
            </Link>
          </span>
        </div>
          <p className="text-xs pb-2 font-mono text-[#a7b2d0]">May 2023 - present</p>
        <div className="w-[600px]">
          <ul className="text-left">
            <li className="text-[15px] text-[#8892b0]">
              <span><AiFillCaretRight className="text-sm text-[#64ffda]" /></span>
              Developed a responsive and user-friendly website using React for
              the frontend, providing an intuitive and seamless experience
              across different devices.
            </li>
            <li className="text-[15px] text-[#8892b0]">
              <AiFillCaretRight className="text-sm text-[#64ffda]" />
              Implemented a feature-rich video module for mathematics, allowing
              users to access educational content and enhance their learning.
            </li>
            <li className="text-[15px] text-[#8892b0]">
              <AiFillCaretRight className="text-sm text-[#64ffda]" />
              Utilized Node.js for the backend, ensuring efficient handling of
              concurrent requests and providing a scalable and robust server
              architecture.
            </li>
            <li className="text-[15px] text-[#8892b0]">
              <AiFillCaretRight className="text-sm text-[#64ffda]" />
              Integrated MongoDB Atlas as the database management system, facilitating
              the storage and retrieval of data related to user profiles, video
              modules, and other content, ensuring smooth data management.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
