"use client"
import { motion } from "framer-motion";
import React from "react";
const CityCard = () => {
    const images =[
    {id:"1",url:"c1.png",title:"Karachi"},   
    {id:"2",url:"c2.png",title:"Lahore"},
    {id:"3",url:"c3.png",title:"Islamabad"},
    {id:"4",url:"c4.png",title:"Faislabad"},
    {id:"5",url:"c5.png",title:"Multan"},
    {id:"6",url:"c6.png",title:"Quetta"},
    ]

 
  
  return (
    <>
      <div className=" min-h-[50vh] mt-20">
    {/* {Heading} */}
        <div className="flex justify-center flex-wrap ">
          <div className="content  text-center">
            <h2 className="md:text-4xl text-3xl cazelFont font-bold">
              <span className="text-[#F00000]">BANQUETS</span> SEARCH BY
            </h2>
          </div>
          <div className="ml-2 ">
            <p className="md:text-4xl text-3xl text-center cazelFont font-bold"> CITIES</p>
            <hr className="h-2 bg-red-500 " />
          </div>
        </div>

        {/* {cards} */}
        <div className="flex gap-5 mt-28 justify-center flex-wrap">
        {images.map((e)=>{
            return(
                <motion.div
                key={e.id}
                initial={{opacity:0,y:20}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.9}}
                className="group  relative md:h-[326px] h-[250px] rounded-full w-[320px] my-10 md:w-[362px] overflow-hidden 0"
           
              >
                <div
                  style={{
                    backgroundImage: `url(${e.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
                ></div>
                <div className="absolute inset-0 z-10 grid place-content-center">
                  <p className=" text-3xl cazelFont font-black uppercase text-white ">
                  {e.title}
                  </p>
                </div>
              </motion.div>
            )
        })

        }
      
        </div>
      </div>
    </>
  );
};

export default CityCard;
