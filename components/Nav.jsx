import React from "react";
// import Image from "next/image";
import { BsHexagon } from "react-icons/bs";
import Link from "next/link";

const Nav = () => {

  return (
    <div className="navbar w-[1536px]  px-40 shadow-lg ">
      <div className="flex justify-between ">
        
        <a href="/" className="">
          <BsHexagon className="relative top-3 text-[#64ffda] text-5xl"/>
          <p className=" text-[#64ffda] relative left-[17px] bottom-[27px] font-semibold text-xl">R</p>
        </a>

        <div className="flex item-center font-mono relative right-10  ">
          <div className="flex items-center">
            <ul className="flex">
              <li className=" tracking-wide font-light text-[#ccd6f6] my-1 mx-4 transition duration-300 ease-in-out cursor-pointer text-sm hover:text-[#64ffda]">
                <span className=" text-[#64ffda]">01. </span><Link href='/about' >About</Link>
              </li>
              <li className="tracking-wide font-light text-[#ccd6f6] my-1 mx-4 transition duration-300 ease-in-out cursor-pointer text-sm hover:text-[#64ffda]">
                <span className="text-[#64ffda]">02. </span><Link href='/experience'>Experience</Link>
              </li>
              <li className="tracking-wide font-light text-[#ccd6f6] my-1 mx-4 transition duration-300 ease-in-out cursor-pointer text-sm hover:text-[#64ffda]">
                <span className="text-[#64ffda]">03. </span><Link href='/positionsofresponsibility'>POR</Link>
              </li>
              <li className="tracking-wide font-light text-[#ccd6f6] my-1 mx-4 transition duration-300 ease-in-out cursor-pointer  text-sm hover:text-[#64ffda]">
                <span className="text-[#64ffda]">04. </span><Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>

          <Link
            className="btnhover text-sm tracking-wide m-auto mx-2 cursor-pointer flex justify-center transition ease-in-out  hover:scale-90 duration-300 items-center rounded-[4px] border-[1px] w-20 h-10 text-center border-[#64ffda] text-[#64ffda]"
            href="/static/resume.pdf"
            target="_blank"
          >
            <p>Resume</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
