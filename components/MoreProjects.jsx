import React from "react";
import { FiFolder, FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import projects from "../static/ProjectData";
const MoreProjects = () => {
  return (
    <div className="text-center mb-40 mx-40 mt-[-100px]">
      <div>
        <h3 className="font-semibold text-[#ccd6f6]  mb-20 text-3xl">
          More Projects
        </h3>
        <div className="mx-24 py-4 grid grid-cols-3 grid-flow-row gap-10">
        
          {/* <Link
            className="transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none"
            href="/"
          > */}
            <div className="w-[325px] h-[350px] text-start bg-[#112240] transition delay-75 hover:-translate-y-3 ease-in-out rounded-[4px] p-6 ">
              <div className="flex items-center justify-between my-2">
                <span className="">
                  <FiFolder className="text-4xl text-[#64ffda]" />
                </span>
                <div className="w-[50px] flex justify-between">
                  <Link
                    href="https://github.com/Harsh-Vardhan-Singh-Shekhawat/personal-portfolio"
                    target="blank"
                  >
                    <FiGithub className="text-xl text-[#ccd6f6]" />
                  </Link>
                  <Link href="/" target="blank">
                    <FaExternalLinkAlt className="text-[#ccd6f6]" />
                  </Link>
                </div>
              </div>
              <div className="">
                <h1 className="text-2xl text-[#ccd6f6] my-2 font-semibold">
                  Personal Portfolio
                </h1>
                <p className="text-[#a8b2d1] my-2">
                  A personal portfolio has been developed and designed to
                  showcase my professional background
                </p>
                <div>
                  <ul className="w-[150px] font-mono grid gap-2 grid-flow-col text-xs my-6 text-[#a7b2d0]">
                    <li>Next.js</li>
                    <li>Tailwindcss</li>
                  </ul>
                </div>
              </div>
            </div>
          {/* </Link> */}

          {/* <Link
            className="transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none"
            href="https://funddme.netlify.app/"
          > */}
            <div className="w-[325px] h-[350px] text-start bg-[#112240] transition delay-75 hover:-translate-y-3 overflow-x-visible rounded-[4px] p-6 ">
              <div className="flex items-center justify-between my-2">
                <span className="">
                  <FiFolder className="text-4xl text-[#64ffda]" />
                </span>
                <div className="flex w-[50px] justify-between">
                <Link
                  href="https://github.com/Harsh-Vardhan-Singh-Shekhawat/FundMe---A-fundraiser"
                  target="blank"
                >
                  <FiGithub className="text-xl text-[#ccd6f6]" />
                </Link>
                <Link href="https://funddme.netlify.app" target="blank">
                  <FaExternalLinkAlt className="text-[#ccd6f6]" />
                </Link>
                </div>
              </div>
              <div className="">
                <h1 className="text-2xl text-[#ccd6f6] my-2 font-semibold">
                  Fund Me
                </h1>
                <p className="text-[#a8b2d1] my-2">
                  A decentralized fundraising app on the Sepolia network enables
                  Ethereum-based fundraising and donations, ensuring secure and
                  transparent transactions within a trustless environment.
                </p>
                <div>
                  <ul className="flex grid gap-2 grid-flow-col font-mono text-xs my-6 text-[#a7b2d0]">
                    <li>React.js</li>
                    <li>Solidity</li>
                    <li>Hardhat</li>
                    <li>Tailwindcss</li>
                  </ul>
                </div>
              </div>
            </div>
          {/* </Link> */}

          {/* <Link
            className="transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none"
            href="https://eth-ease.netlify.app/"
          > */}
            <div className="w-[325px] h-[350px] text-start transition delay-75 hover:-translate-y-3 bg-[#112240] rounded-[4px] p-6 ">
              <div className="flex items-center justify-between my-2 pr-2">
                <span className="">
                  <FiFolder className="text-4xl text-[#64ffda]" />
                </span>
                <div className="w-[50px] flex justify-between">
                  <Link
                    href="https://github.com/Harsh-Vardhan-Singh-Shekhawat/Eth-Ease---A-smart-contract-app"
                    target="blank"
                  >
                    <FiGithub className="text-xl text-[#ccd6f6]" />
                  </Link>
                  <Link href="https://eth-ease.netlify.app/" target="blank">
                    <FaExternalLinkAlt className="text-[#ccd6f6]" />
                  </Link>
                </div>
              </div>
              <div className="">
                <h1 className="text-2xl text-[#ccd6f6] my-2 font-semibold">
                  Eth Ease
                </h1>
                <p className="text-[#a8b2d1] my-2">
                  A decentralized blockchain application for sending ethereum using metamask through out the world.
                </p>
                <div>
                  <ul className="w-[250px] font-mono grid gap-2 grid-flow-col text-xs my-6 text-[#a7b2d0]">
                    <li>Next.js</li>
                    <li>Solidity</li>
                    <li>Hardhat</li>
                    <li>Tailwindcss</li>
                  </ul>
                </div>
              </div>
            </div>
          {/* </Link> */}

          {/* <Link
            className="transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none"
            href="https://googledoc.netlify.app"
          > */}
            <div className="w-[325px] h-[350px] text-start bg-[#112240] transition delay-75 hover:-translate-y-3 rounded-[4px] p-6 ">
              <div className="flex items-center justify-between my-2">
                <span className="">
                  <FiFolder className="text-4xl text-[#64ffda]" />
                </span>
                <div className="w-[50px] flex justify-between">
                <Link
                  href="https://github.com/Harsh-Vardhan-Singh-Shekhawat/GoogleDocsClone"
                  target="blank"
                >
                  <FiGithub className="text-xl text-[#ccd6f6]" />
                </Link>
                <Link href="https://googledoc.netlify.app/" target="blank">
                  <FaExternalLinkAlt className="text-[#ccd6f6]" />
                </Link>
                </div>
              </div>
              <div className="">
                <h1 className="text-2xl text-[#ccd6f6] my-2 font-semibold">
                  Google Docs Clone
                </h1>
                <p className="text-[#a8b2d1] my-2">
                  A Google Docs alternative that replicates its features,
                  allowing users to create and edit document files along with
                  dowloading.
                </p>
                <div className="relative bottom-0">
                  <ul className="w-[140px] flex grid gap-1 grid-flow-col font-mono text-xs my-6 text-[#a7b2d0]">
                    <li>React.js</li>
                    <li>Tailwindcss</li>
                  </ul>
                </div>
              </div>
            </div>
          {/* </Link> */}
{/* 
          <Link
            className="transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none"
            href="https://github.com/Harsh-Vardhan-Singh-Shekhawat/AAVE-Liquidity-Protocol"
          > */}
            <div className="w-[325px] h-[350px] text-start bg-[#112240] transition delay-75 hover:-translate-y-3 rounded-[4px] p-6 ">
              <div className="flex items-center justify-between my-2">
                <span className="">
                  <FiFolder className="text-4xl text-[#64ffda]" />
                </span>
                <Link
                  href="https://github.com/Harsh-Vardhan-Singh-Shekhawat/AAVE-Liquidity-Protocol"
                  target="blank"
                >
                  <FiGithub className="text-xl text-[#ccd6f6]" />
                </Link>
              </div>
              <div className="">
                <h1 className="text-2xl text-[#ccd6f6] my-2 font-semibold">
                  AAVE Liquidity Protocol
                </h1>
                <p className="text-[#a8b2d1] my-2">
                  A smart contract built for lending and borrowing
                  cryptocurrency in lieu of interest earn on them.
                </p>
                <div>
                  <ul className="flex justify-start grid gap-2 grid-flow-col font-mono text-xs my-6 text-[#a7b2d0]">
                    <li>Solidity</li>
                    <li>@aave/core-v3</li>
                  </ul>
                </div>
              </div>
            </div>
          {/* </Link> */}

          {/* <Link
            className="transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none"
            href="https://github.com/Harsh-Vardhan-Singh-Shekhawat/mySubGraph"
          > */}
            <div className="w-[325px] h-[350px] text-start bg-[#112240] transition delay-75 hover:-translate-y-3 rounded-[4px] p-6 ">
              <div className="flex items-center justify-between my-2 pr-2">
                <span className="">
                  <FiFolder className="text-4xl text-[#64ffda]" />
                </span>
                <Link
                  href="https://github.com/Harsh-Vardhan-Singh-Shekhawat/mySubGraph"
                  target="blank"
                >
                  <FiGithub className="text-xl text-[#ccd6f6]" />
                </Link>
              </div>
              <div className="">
                <h1 className="text-2xl text-[#ccd6f6] my-2 font-semibold">
                  mySubGraph
                </h1>
                <p className="text-[#a8b2d1] my-2">
                  A subgraph using GrapghQl for fetching blockchain data
                  basis on requirement on subgraph studio using polygon network.
                </p>
                <div>
                  <ul className="flex justify-start grid gap-2 grid-flow-col relative bottom-[-20px] font-mono text-xs my-6 text-[#a7b2d0]">
                    <li>Solidity</li>
                    <li>Typescript</li>
                    <li>@graphprotocol</li>
                  </ul>
                </div>
              </div>
            </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
