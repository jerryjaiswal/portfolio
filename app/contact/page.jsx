import React from "react";

const Contact = () => {
  return (
    <div className="text-center overflow-visible m-40">
      <div >
        <p className="text-[#64ffda]  tracking-wide font-mono">04. What is Next?</p>
        <h1 className="text-5xl m-4 overflow-visible text-[#ccd6f6] font-bold">Get In Touch</h1>
      </div>
      <div className="w-[600px] m-auto tracking-wide leading-relaxed py-6 text-[#707b97]">
        I am actively seeking new opportunities to enhance my skills and grow as
        a professional. If you think I would be a good fit for your team or have any
        questions, please feel free to contact me. I will make sure to respond as
        soon as possible. Thank you for considering me!
      </div>

      <a className="w-[150px]" href="mailto:ronakjaiswal0302@gmail.com" target="blank">
        <p className="font-mono w-[150px] text-sm relative top-10 tracking-wide m-auto rounded-[4px] border-[1px] flex justify-center items-center rounded-[4px] border-[1px] w-40 h-[50px] text-center h-10  border-[#64ffda] text-[#64ffda]">
          Mail Me Here
        </p>
      </a>
    </div>
  );
};

export default Contact;
