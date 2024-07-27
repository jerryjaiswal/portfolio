import Image from 'next/image'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import  Main  from '../components/Main'
// import About from '../app/about/page'
// import Contact from '../app/contact/page'
// import Projects from '../app/project/page'
import Info from '../components/Info'
import Experience from '../components/Experience'
import PositionsOfResponsibility from '../components/PositionsOfResponsibility'
// import InfoMail from '../components/InfoMail'
import Link from 'next/link'

import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className=" selection:bg-[#858fac] bg-[#0a192f] ">
      <Nav />
      <Main />
      <About  />
      <Experience />
      <PositionsOfResponsibility />
      <Contact />
      <Info />
      {/* <InfoMail /> */}
      
      <footer className='foot text-center text-sm py-6 animate-pulse font-mono text-[#8892b0] '>
        <Link className='hover:text-[#64ffda] transition ease-in-out  hover:scale-90 duration-300 ' href='https://github.com/jerryjaiswal'>
          Designed & Built by Ronak Jaiswal
        </Link>
      </footer>
    </main>
  )
}
