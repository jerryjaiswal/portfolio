// "use client";
import './globals.css'
import { Inter } from 'next/font/google'
// import Head from "next/head"
// import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ronak Jaiswal',
  description: 'Personal Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head className='text-5xl selection:bg-[#858fac]'>
         <Link rel="shortcut icon" href="./logo.ico" />
      </Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
