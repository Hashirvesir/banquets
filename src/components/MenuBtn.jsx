import { motion } from 'framer-motion'
import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const MenuBtn = ({ isActive, setIsActive }) => {
    return (
        <div onClick={() => { setIsActive(!isActive) }} className='h-[40px] w-[80px] cursor-pointer rounded-3xl  text-white overflow-hidden absolute top-0 right-0'>
            <motion.div 
            animate={{top:isActive? "-100%" : "0%"}}
            transition={{duration:0.5, ease:[0.76,0, 0.24 ,1]}}
            className='slider relative w-full h-full'>
                <div className='flex justify-center items-center w-full text-black h-[40px] bg-white'>
                    <p ><IoMenuSharp size={25}/></p>
                   
                </div>

                <div className='flex justify-center font-bold items-center h-full w-full absolute top-full bg-[#F00000] text-white'>
                    <p ><IoClose size={25} /></p>
                  
                </div>

            </motion.div>

        </div>
    )
}

export default MenuBtn

