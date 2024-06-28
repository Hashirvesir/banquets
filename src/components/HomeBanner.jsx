"use client"
import React from "react";
import { IoIosPlayCircle } from "react-icons/io";
import Btn from "@/components/Btn";
import { motion } from "framer-motion";
const HomeBanner = () => {
  return (
    <>
      <div className="md:flex pt-56 pb-0 gap-10 justify-center">
        <motion.div 
        initial={{opacity:0,}}
        whileInView={{opacity:1,}}
        transition={{duration:0.6}}
        viewport={{once:false}}
        className="md:w-[500px]  h-[150px]">
          <p className="text-white cazelFont md:text-4xl text-3xl mb-3 tracking-widest font-bold">
            LOVE UNVEILED,
          </p>
          <p className="text-[#F00000] tracking-widest cazelFont text-3xl md:text-4xl font-bold">
            HALLS RESERVED
          </p>
        </motion.div>
        <motion.div 
        initial={{opacity:0,}}
        whileInView={{opacity:1,}}
        transition={{duration:0.6}}
        className="md:w-[500px] h-[150px]">
          <p className="text-[#FFFFFF]  mb-8 font-thin">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            exercitationem dignissimos totam neque iusto.
          </p>
          <div className="flex gap-10">
            <Btn label="Explore" />
            <div className="flex items-center  text-white">
              <div className="px-3 cursor-pointers">
                <IoIosPlayCircle />
              </div>
              <div className="cursor-pointers">play video</div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HomeBanner;
