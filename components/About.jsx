import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai'

const About = () => {
  return (
    <div className='m-40' id='about'>
      <div>
        <h1>
          <span className='font-mono font-thin text-[24px] text-[#64ffda]'>01. </span>
          <span className='font-semibold text-[#ccd6f6] text-3xl'>About Me</span>
        </h1>
      </div>
      <p className='w-[300px] relative bottom-2 left-[200px] border-[#243554] border-[1px]'></p>
      <div className='text-[#8892b0] w-[900px]'>
        <p className='my-10'>
          Hi, I am Ronak Jaiswal, a Computer Science Engineering graduate from IIIT Vadodara. I am passionate about leveraging technology to drive innovation and create impactful solutions. My skills include programming in C, Java, and Kotlin, as well as expertise in Web 3.0, CRM systems, and design tools like Photoshop and Figma. I thrive in roles requiring strong communication, financial acumen, and leadership.
        </p>
        <p>Here are a few technologies I have been working with recently:</p>
        <div>
          <ul className='w-1/2 mt-4 grid leading-loose tracking-wide grid-rows-4 mx-4 font-mono text-sm list:text-[#8892b0] grid-flow-col'>
            <li className='flex'>
              <span className='text-[#64ffda] mt-1.5'>
                <AiFillCaretRight className='text-sm' />
              </span>
              <span className='font-thin'>Figma</span>
            </li>
            <li className='flex'>
              <span className='text-[#64ffda] mt-1.5'>
                <AiFillCaretRight className='text-sm' />
              </span>
              <span>Jira</span>
            </li>
            <li className='flex'>
              <span className='text-[#64ffda] mt-1.5'>
                <AiFillCaretRight className='text-sm' />
              </span>
              <span>Adobe Photoshop</span>
            </li>
            <li className='flex'>
              <span className='text-[#64ffda] mt-1.5'>
                <AiFillCaretRight className='text-sm' />
              </span>
              <span>C</span>
            </li>
            <li className='flex'>
              <span className='text-[#64ffda] mt-1.5'>
                <AiFillCaretRight className='text-sm' />
              </span>
              <span>Java</span>
            </li>
            <li className='flex'>
              <span className='text-[#64ffda] mt-1.5'>
                <AiFillCaretRight className='text-sm' />
              </span>
              <span>Odoo</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
