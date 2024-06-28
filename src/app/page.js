"use client"
import React from "react";
import WebLayout from "@/components/WebLayout";
import Wrapper from "@/components/Wrapper";
import HomeBanner from "@/components/HomeBanner";
import Slider from "@/components/Slider";
import Filters from "@/components/Filters";
import CityCard from "@/components/CityCard";
import Aboutus from "@/components/Aboutus";
import ProductCard from "@/components/ProductCard";
import BecomeSec from "@/components/BecomeSec";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactUs from "@/components/ContactUs";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Page = () => {
  const [showModal, setShowModal] =useState(false);
  const [showModalLogin, setshowModalLogin] = useState(false)
  const dropIn = {
    hidden:{
        y: "-100vh",
        opacity:0,
    },
    visible:{
        y:"0",
        opacity:1,
        transition:{
            duration:0.1,
            type:"spring",
            damping:25,
        }
    },
    exit:{
        y:"100vh",
        opacity:0
    }

}
const dropInLogin = {
  hidden:{
      y: "-100vh",
      opacity:0,
  },
  visible:{
      y:"0",
      opacity:1,
      transition:{
          duration:0.1,
          type:"spring",
          damping:25,
      }
  },
  exit:{
      y:"100vh",
      opacity:0
  }

}
const handleLoginClick = () => {
  setshowModalLogin(true);
  setShowModal(false); // Close sign-up modal
};
const handleSignupClick = () => {
  setShowModal(true); // Close sign-up modal
  setshowModalLogin(false);
};
  return (
    <>
    <div className="bg-[#F00000] text-white z-[100] flex items-center justify-center w-full min-h-7">
      <p className="text-sm pr-2">you are vendor or banquet owner </p>
    <button
        className="text-sm cursor-pointer hover:text-gray-300"
        type="button"
        onClick={() => setShowModal(true)}
      >
       Sign Up /
      </button>
      <button
        className="text-sm pl-1 cursor-pointer hover:text-gray-300"
        type="button"
        onClick={() => setshowModalLogin(true)}
      >
        Login
      </button>
    </div>
    <WebLayout>
      <div className="bg-img">
        <Wrapper>
        <HomeBanner />
        </Wrapper>
        <Slider />
          </div>
          <Wrapper>
          <Filters/>
          <CityCard/>
          <Aboutus/>
          
          <ProductCard/>
          <BecomeSec/>
        <TestimonialSlider/>
        </Wrapper>
       <ContactUs/>
    </WebLayout>


      {/* sign up  */}
       {showModal ? (
        <>
          <motion.div
            onClick={(e)=>e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          // animate={showModal ? "open" : "close"}
            className="modalscroll justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-96 ">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 pt-8  rounded-t">
                  <h3 className="uppercase cazelFont font-extrabold text-3xl">
                    Sign Up
                  </h3>
                  <button
                    className="p-1 float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black text-2xl ">
                    <IoCloseSharp className="font-extrabold"/>
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-9 pt-0 flex-auto">
                  <p className="text-gray-400">Enter To Continue And Explore Within Your Grasp.</p>
                  <div className=" w-full "> 
             <div className="">
                <form className="flex gap-1 flex-col ">
                  <label className="mt-3 font-semibold cazelFont" >Name</label>
                  <input className="bg-[#FAFAFA] p-3 rounded-xl focus:outline-none" placeholder="Enter Name" type="text" />
                  <label className="mt-3 font-semibold cazelFont" >Phone</label>
                  <input className="bg-[#FAFAFA] p-3 rounded-xl focus:outline-none" placeholder="Enter Phone" type="text" />
                  <label className="mt-3 font-semibold cazelFont" >Email</label>
                  <input className="bg-[#FAFAFA] p-3 rounded-xl focus:outline-none" placeholder="Enter Email" type="email" />
                  <label className="mt-3 font-semibold cazelFont" >Password</label>
                  <input className="bg-[#FAFAFA] p-3 rounded focus:outline-none" placeholder="Enter Password" type="password" />
                  <button className="bg-[#F00000] rounded-xl cazelFont text-white font-semibold p-4 mt-3 hover:bg-[#f00000b5] ">Sign up</button>
                </form>
             </div>
          </div>
                </div>
                {/*footer*/}
                <div className="flex p-6 gap-1">
                  <p>Already have an account ? </p>
                  <button onClick={handleLoginClick}

                  > Login in</button>
                
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-20 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    {/* login  */}
    {showModalLogin ? (
        <>
          <motion.div
            onClick={(e)=>e.stopPropagation()}
            variants={dropInLogin}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="modalscroll justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-[400px] ">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 pt-8  rounded-t">
                  <h3 className="uppercase cazelFont font-extrabold text-3xl">
                  Sign in
                  </h3>
                  <button
                    className="p-1 float-right"
                    onClick={() => setshowModalLogin(false)}
                  >
                    <span className=" text-black text-2xl ">
                    <IoCloseSharp className="font-extrabold"/>
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-9 pt-0 flex-auto">
                  <p className="text-gray-400">Enter To Continue And Explore Within Your Grasp.</p>
                  <div className=" w-full "> 
             <div className="">
                <form className="flex gap-1 flex-col ">
                  <label className="mt-6 font-semibold cazelFont" >Email</label>
                  <input className="bg-[#F2F2F2] mt-2 p-3 rounded-xl focus:outline-none" placeholder="Enter Email" type="email" />
                  <label className="mt-3 font-semibold cazelFont" >Password</label>
                  <input className="bg-[#F2F2F2] p-3 mt-2 rounded-xl focus:outline-none" placeholder="Enter Password" type="password" />
                  <button className="bg-[#F00000] rounded-xl cazelFont text-white font-semibold p-4 mt-3 hover:bg-[#f00000b5] ">Login to Continue</button>
                </form>
             </div>
          </div>
                </div>
                {/*footer*/}
                <div className="flex gap-1 p-6">
                  <p>Don’t have an account ?</p>
                  <button onClick={handleSignupClick}> Sign up</button>
                
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-20 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    

    </>
  );
};

export default Page;
