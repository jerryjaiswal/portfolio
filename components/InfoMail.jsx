import Link from 'next/link'
import React from 'react'

const InfoMail = () => {
  return (
    <div className="fixed  rotate-90 right-10 bottom-0 z-10">
      <Link className='relative top-10 text-[#8892b0] font-mono' href='mailto:ronakjaiswal0302@gmail.com' target='blank'>
          ronakjaiswal0302@gmail.com
      </Link>
      <div className=" h-[1.5px] w-28 bg-[#8892b0] mx-10 text-white"></div>
      </div>
  )
}

export default InfoMail
