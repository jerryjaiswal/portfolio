import React from 'react'
import {AiFillCaretRight} from 'react-icons/ai'
const About = () => {

  return (
    <div className='m-40 h-screen'>
      <div className='flex '>
        <h1 className=''><span className='font-mono font-thin text-[24px] text-[#64ffda]'>01. </span><span className='font-semibold text-[#ccd6f6] text-3xl'> About Me</span>  </h1> 
      </div>
      <p className='w-[300px] relative bottom-2 left-[200px] border-[#243554] border-[1px]'></p>
      <div className='text-[#8892b0] w-[900px]'>
        <p className='my-10'>
        Hi, I am Harsh, and I am passionate about exploring the intersection of finance and technology. My focus is on web development and blockchain development, and I have built several web applications using various technologies. Currently, I am directing my attention towards blockchain development in the DeFi space.
        </p>
        <p>Here are a few technologies I have been working with recently:</p>
        <div>
            <ul className='w-1/2 mt-4 grid leading-loose tracking-wide grid-rows-4 mx-4 font-mono text-sm  list:text-[#8892b0]  grid-flow-col'> 
                <li className='flex '><span className='text-[#64ffda] mt-1.5  '><AiFillCaretRight className='text-sm' /></span><span className='font-thin'>Javascript</span></li>

                <li className='flex '><span className='text-[#64ffda] mt-1.5  '><AiFillCaretRight className='text-sm' /></span><span>React.js</span></li>

                <li className='flex '><span className='text-[#64ffda] mt-1.5  '><AiFillCaretRight className='text-sm' /></span><span>Solidity</span></li>
                
                <li className='flex '><span className='text-[#64ffda] mt-1.5  '><AiFillCaretRight className='text-sm' /></span><span>Typescript</span></li>
                
                <li className='flex '><span className='text-[#64ffda] mt-1.5  '><AiFillCaretRight className='text-sm' /></span><span>Node.js</span></li>
                
                <li className='flex '><span className='text-[#64ffda] mt-1.5  '><AiFillCaretRight className='text-sm' /></span><span>Web3</span></li>  
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
