import React from "react";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import odooImage from '../../public/odoo-img.png'; // Replace with the correct path to the Odoo image
import taczclubImage from '../../public/productmanager.png'; // Replace with the correct path to the Taczclub image
import Image from "next/image";

const Experience = () => {
  return (
    <div className="m-40">
      <div>
        <h1>
          <span className="font-mono font-thin text-[24px] text-[#64ffda]">
            03.{" "}
          </span>
          <span className="font-semibold text-[#ccd6f6] text-3xl">
            Experience
          </span>{" "}
        </h1>
      </div>
      <p className='w-[300px] relative bottom-2 left-[380px] border-[#243554] border-[1px]'></p>

      <div className="">
        <div className="flex justify-between text-right mx-12 my-20">
          <Link href="https://www.odoo.com/" target="_blank">
            <Image
              className="w-[400px] blur-sm hover:blur-none delay-1000 transition-transform"
              src={odooImage}
              alt="Odoo"
            />
          </Link>
          <div className="">
            <h3 className="text-[#58e2c4] font-mono text-[13px]">
              Sales Business Advisor - Odoo | SDR Intern
            </h3>
            <h1 className="text-2xl font-semibold text-[#ccd6f6] my-2">
              January 2024 - Present | In-Office
            </h1>
            <div className="w-[500px] bg-[#112240] p-5 rounded-[4px] text-[#ccd6f6] text-[15px]">
              <ul className="list-disc list-inside">
                <li>Direct Sales Leader: Consistently exceeded NRR and MRR targets through client consultations and effective product demos.</li>
                <li>Client Success Champion: Leveraged follow-up strategies to understand client needs, propose Odoo solutions, and drive sales growth.</li>
                <li>Partnership Builder: Secured 3 new Odoo partners (1 base, 2 medium), boosting lead generation and client acquisition efforts. Communicated Odoo’s partnership program effectively, on-boarding new clients and building valuable partnerships.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse justify-between mx-12 my-35">
          <Link href="https://www.taczclub.com/" target="_blank">
            <Image
              className="w-[430px] blur-sm hover:blur-none delay-1000 transition-transform"
              src={taczclubImage}
              alt="Taczclub"
            />
          </Link>
          <div className=" overflow-auto ">
            <h3 className="text-[#58e2c4] font-mono text-[13px]">
              TACZCLUB PVT. LTD. | Product Manager Intern
            </h3>
            <h1 className="text-2xl font-semibold text-[#ccd6f6] my-2">
              May 2023 – Aug 2023 | Remote
            </h1>
            <div className="w-[500px] bg-[#112240] p-5 rounded-[4px] text-[#ccd6f6] text-[15px]">
              <ul className="list-disc list-inside">
                <li>Spearheaded Cohesive Development: Led a team of 3 skilled developers to successfully deliver a unified web and mobile application for a new product.</li>
                <li>Market-Driven Project Champion: Championed a project with a strong market fit. Conducted thorough market research to ensure the product addressed a growing market need.</li>
                <li>Bridge Between Teams: Fostered seamless communication across all teams and upper management. Delivered clear and consistent reports throughout the project lifecycle.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
