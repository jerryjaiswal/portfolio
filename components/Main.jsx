"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";


const Main = () => {

  const [loopNum , setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false); 
  const toRotate = ["Product Enthusiast", "Android Devloper","Management Guy" ];
  const [text,setText] = useState('');
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 900;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <div className="py-2">
      <div className="mx-40 my-20 ">
        <p className="font-mono text-thin tracking-wide text-[#64ffda]">
          Hi, my name is{" "}
        </p>
        <div className="text-7xl font-semibold leading-tight">
          <h1 className="name w-[700px]">
            <span>Ronak </span>
            <span>Jaiswal.</span>
          </h1>
          <h1 className="text-[#8892b0]">{text}</h1>
        </div>
        <p className=" my-5 text-[#8892b0] leading-relaxed w-[540px]">
          Hi, I am a web developer and computer science undergraduate at the
          Indian Institute of Information Technology Vadodara. My passion for
          exploring the latest technology tools drives me to create innovative
          solutions and develop my skills in this field. I am always eager to
          learn new ways to improve my abilities as a developer.
        </p>
      </div>
      <div className="font-mono  mx-40 text-sm tracking-wide  rounded-[4px] border-[1px] flex justify-center items-center rounded-[4px] border-[1px] w-[150px] h-[50px] text-center cursor-pointer w-20 h-10 text-center border-[#64ffda] text-[#64ffda]  transition ease-in-out hover:scale-90 duration-300 ">
        <Link className="w-[200px]" href="mailto:ronakjaiswal0302@gmail.com">
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default Main;
