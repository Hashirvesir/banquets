import React from "react";
import Image from "next/image";
import BackgroundImg from "../../public/contactbg.png"
import Btn from "./Btn";

const ContactUs = () => {
  return (
    <>
    <div className="flex flex-col h-[700px] justify-between">
        <div className="relative w-full">
            <div className="absolute -z-10 w-full">
                <Image src={BackgroundImg} className="w-full md:h-[700px] h-[700px]" width={1000} height={1000} />
            </div>
            <div className="flex items-ends flex-col items-end gap-4 w-full">
                <div className="md:w-[450px] w-full h-[600px] justify-center items-center flex flex-col gap-6 ">
                  <p className="cazelFont md:text-3xl text-2xl font-bold">CONTACT <span className="text-[#F00000]">FORM</span></p>
                 <input className="md:w-[420px] w-[230px] p-2 rounded-md focus:outline-none focus:ring-0" type="text" placeholder="Name" />
                <input className="md:w-[420px] w-[230px] p-2 rounded-md focus:outline-none focus:ring-0" type="text" placeholder="Email" />
                <input className="md:w-[420px] w-[230px] p-2 rounded-md focus:outline-none focus:ring-0" type="text" placeholder="Number" />
                <input className="md:w-[420px] w-[230px] h-[100px] p-2 rounded-md focus:outline-none focus:ring-0" type="text" placeholder="Message" />
               <Btn label="SUBMIT"/>
                </div>
           </div>
        </div>
    </div>
    </>
  );
};

export default ContactUs;
