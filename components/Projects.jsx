import React from "react";
import fundmepreview from "../public/fundme.png";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import etheasepreview from '../public/ethease.png'

const Projects = () => {
  return (
    <div className="m-40">
      <div>
        <h1>
          <span className="font-mono font-thin text-[24px] text-[#64ffda]">
            03.{" "}
          </span>
          <span className="font-semibold text-[#ccd6f6] text-3xl">
            {" "}
            Some Things I have built
          </span>{" "}
        </h1>
      </div>
      <p className='w-[300px] relative bottom-2 left-[380px] border-[#243554] border-[1px]'></p>

      <div className="">
        <div className="flex justify-between text-right mx-12 my-20">
          <Link className="" href="https://funddme.netlify.app/" target="blank">
            <Image
              className="w-[600px] blur-sm hover:blur-none delay-1000 transition-transform"
              src={fundmepreview}
              alt="fundme"
            ></Image>
          </Link>
          <div className="">
            <h3 className="text-[#58e2c4] font-mono text-[13px]">
              Featured Project
            </h3>
            <Link href="https://funddme.netlify.app/" target="blank">
              <h1 className="text-2xl font-semibold text-[#ccd6f6] my-2">
                Fund Me
              </h1>
            </Link>
            <div className="w-[500px] bg-[#112240]  p-5 rounded-[4px] text-[#ccd6f6] text-[15px]">
              A decentralized application where user can donate ethereum for
              social cause through fundraiser using metamask wallet. They can
              even start their own fundraiser to raise fund.
            </div>
            <div className=" text-[#a7b2d0] text-[13px] my-4 font-mono">
              <ul className="flex justify-end">
                <li className="mx-2">React.js</li>
                <li className="mx-2">Solidity</li>
                <li className="mx-2">Ethers</li>
                <li className="ml-2">Tailwindcss</li>
              </ul>
            </div>
            <div className="grid place-items-end">
            <Link href="https://github.com/Harsh-Vardhan-Singh-Shekhawat/FundMe---A-fundraiser">
                <FiGithub className="text-xl text-[#8892b0] " />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between mx-12 my-40">
          <Link className="" href="https://eth-ease.netlify.app/" target="blank">
            <Image
              className="w-[600px] blur-sm hover:blur-none delay-1000 ease-in-out transition-transform"
              src={etheasepreview}
              alt="fundme"
            ></Image>
          </Link>
          <div className=" overflow-auto ">
            <h3 className="text-[#58e2c4] font-mono text-[13px]">
              Featured Project
            </h3>
            <Link href="https://eth-ease.netlify.app/" target="blank">
              <h1 className="text-2xl font-semibold text-[#ccd6f6] my-2">
                Eth Ease  
              </h1>
            </Link>
            <div className="w-[500px] bg-[#112240]  p-5 rounded-[4px] text-[#ccd6f6] text-[15px]">
              A decentralized application will allows you to send cryptocurrency on Sepolia network all over the world using metamask. 
            </div>
            <div className=" text-[#a7b2d0] text-[13px] my-4 font-mono">
              <ul className="flex ">
                <li className="mr-2">React.js</li>
                <li className="mx-2">Solidity</li>
                <li className="mx-2">Ethers</li>
                <li className="ml-2">Tailwindcss</li>
              </ul>
            </div>
            <div className="grid place-items-start">
              
              <Link href="https://github.com/Harsh-Vardhan-Singh-Shekhawat/Eth-Ease---A-smart-contract-app">
                <FiGithub className="text-xl text-[#8892b0] " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
