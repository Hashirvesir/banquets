"use client"
import { motion } from "framer-motion";
import React from "react";
import Btn from "./Btn";

const ProductCard = () => {
  const productData = [
    {
      id: 1,
      name: "Grand Ballroom",
      member: 500,
      starprice: 5000,
      img: "card1.png",
    },
    {
      id: 2,
      name: "Crystal Palace",
      member: 1000,
      starprice: 6000,
      img: "card2.png",    },
    {
      id: 3,
      name: "Royal Gardens",
      member: 500,
      starprice: 4500,
      img: "card3.png",
    },
    {
      id: 4,
      name: "Majestic Hall",
      member: 1000,
      starprice: 5500,
      img: "card4.png",
    },
    {
      id: 5,
      name: "Diamond Banquet",
      member: 500,
      starprice: 4800,
      img: "card5.png",
    },
    {
      id: 6,
      name: "Platinum Palace",
      member: 1000,
      starprice: 7000,
      img: "card6.png",
    },
    {
      id: 7,
      name: "Emerald Hall",
      member: 500,
      starprice: 4200,
      img: "card1.png",
    },
    {
      id: 8,
      name: "Golden Garden",
      member: 1000,
      starprice: 5800,
      img: "card2.png",
    },
    {
      id: 9,
      name: "Sapphire Banquet",
      member: 500,
      starprice: 5500,
      img: "card3.png",
    },
    {
      id: 10,
      name: "Regal Hall",
      member: 1000,
      starprice: 6200,
      img: "card4.png",
    },
    {
      id: 11,
      name: "Victorian Venue",
      member: 500,
      starprice: 5300,
      img: "card5.png",
    },
    {
      id: 12,
      name: "Enchanted Estate",
      member: 1000,
      starprice: 6500,
      img: "card6.png",
    }
  ];

  return (
    <>
      <div className="min-h-[50vh]">
        <div className="content flex flex-col justify-center items-center">
          <h2 className="text-4xl  font-bold tracking-wider text-center cazelFont">
            THE BEST <span className="text-[#F00000]">BANQUETS</span> FOR YOU
          </h2>
          <p className="mx-auto mt-10 md:w-[750px] text-center">
            These are some of the hotels that we highly recommend for you. we
            guarantee the quality of the service, the food, the hotel area and
            various other aspects.
          </p>
        </div>

        {/* card  */}
        <div className=" my-12  px-4 md:px-12">
          <div className="flex flex-wrap gap-10 md:gap-0 -mx-1 lg:-mx-4">
            {productData.map((e, i) => {
              return (
                <motion.div key={i} 
                initial={{opacity:0,y:20}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.9}}
                className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  {/* <!-- Article --> */}
                  <article className="overflow-hidden rounded-lg hover:shadow-lg hover:ease-in-out hover:duration-150">
                    <div >
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src={e.img}
                      />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="cazelFont font-bold text-[#F00000]"
                          href="#"
                        >
                         {e.name}
                        </a>
                      </h1>
                      <p className="membersIcon text-grey-darker text-sm">
                        {e.member}
                      </p>
                    </header>
                    <main className="px-4 text-[#828282] ">
                      <p>Starting From {e.starprice} PKR</p>
                    </main>
                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-[#F00000  ]"
                        href="#"
                      >
                        <p className="ml-2 mt-3 text-sm cazelFont font-bold text-[#F00000]">
                          BOOK NOW
                        </p>
                      </a>
                      <div className="bg-red-200 p-2 rounded-full " href="#">
                        <img src="productIcon.png" alt="" />
                      </div>
                    </footer>
                  </article>
                  {/* <!-- END Article --> */}
                </motion.div>
              );
            })}
          </div>
          <div className="flex justify-center mt-10">
          <Btn  label="View More"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
