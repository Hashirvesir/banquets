import React from "react";
import { FaStar } from "react-icons/fa";
import Accordion from "./Accordion";


const Detail = () => {

  return (
    <div className="w-full mt-[100px] mb-[200px] min-h-[100vh]">
      {/* header  */}
      <div className="w-full flex flex-wrap justify-between">
        <div className="mx-auto mt-2 p-2 md:mx-0">
          <div className="mb-2 flex gap-3">
            <h1 className="font-bold cazelFont text-xl text-[#F00000] md:text-2xl">
              THE GRAND BANQUET
            </h1>
          </div>
          <div className="flex md:gap-2 flex-wrap justify-between w-[250px] md:w-[400px]">
            <p className="text-xs  text-[#6B7385]">70 Bright St New York, USA</p>
            <p className="text-xs text-[#6B7385]">+02 2212223</p>
            <p className="text-xs text-[#6B7385]">alex@gmail.com</p>
          </div>
        </div>
        <div className="mx-auto border border-[#EAEDF0] p-2 rounded-lg md:mx-0 flex items-center mt-2">
          <div className="px-2">
            <p className="bg-[#F00000] rounded-full p-1.5  text-xs text-white">
              5.0
            </p>
          </div>
          <div>
            <div className="flex py-2 text-[#FFAA00]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="underline text-xs text-[#6B7385]">15 reviews</p>
          </div>
        </div>
        <hr className="w-full mt-2 h-2 text-[#6B7385]" />
      </div>
      <div className="flex p-3 justify-between"> 
      <div>
        <p className="font-light">Venue type</p>
        <p className="font-bold">Indoor</p>
      </div>
        <p>Starting From <span className=" font-bold text-[#F00000]">70,000 pkr</span></p>
      </div>
        <hr className="border border-[#EAEDF0] w-full"/>
      {/* form  */}
      <div className="flex flex-wrap">
      <div className="w-full md:mx-0 md:w-2/3">
            <Accordion/>
          </div>
          <div className=" w-full md:mx-0 md:w-1/3"> 
             <div className="">
                <form className="flex gap-1 flex-col p-6">
                  <h3 className="cazelFont font-bold text-center text-xl">Request for Availability</h3>
                  <span className="border-b-2 mt-3"></span>
                  <label className="mt-3 font-semibold" >Name</label>
                  <input className="bg-[#FAFAFA] p-3 rounded focus:outline-none" placeholder="Enter Name" type="text" />
                  <label className="mt-3 font-semibold" >Email</label>
                  <input className="bg-[#FAFAFA] p-3 rounded focus:outline-none" placeholder="Enter Email" type="text" />
                  <label className="mt-3 font-semibold" >Phone</label>
                  <input className="bg-[#FAFAFA] p-3 rounded focus:outline-none" placeholder="Enter Phone" type="number" />
                  <label className="mt-3 font-semibold" >Date</label>
                  <input className="bg-[#FAFAFA] p-3 rounded focus:outline-none" type="date" />
                  <label className="mt-3 font-semibold">Select Theme</label>
                  <select className="p-3 rounded focus:outline-none bg-[#FAFAFA] " name="" id="">
                    <option value="">Red</option>
                    <option value="">Blue</option>
                    <option value="">Green</option>
                  </select>
                  <label className="mt-3 font-semibold" >Detail</label>
                  <textarea placeholder="Enter Detail" className="bg-[#FAFAFA]  p-3 rounded focus:outline-none"  name="" id="" cols="20" rows="3"></textarea>

                  <label className="mt-3 font-semibold">Number Of Guest</label>
                  <div className="flex rounded-xl flex-wrap justify-center ">
                    <p className="p-3 hover:bg-[#F00000] text-black border border-gray-100 hover:text-white">500</p>
                    <p className="p-3 hover:bg-[#F00000] text-black border border-gray-100 hover:text-white">1000</p>
                    <p className="p-3 hover:bg-[#F00000] text-black border border-gray-100 hover:text-white">1500</p>
                    <p className="p-3 hover:bg-[#F00000] text-black border border-gray-100 hover:text-white">2000</p>
                    <p className="p-3 hover:bg-[#F00000] text-black border border-gray-100 hover:text-white">2000</p>
                  </div>
                  <div className="flex gap-4 items-center mt-3">
                  <input type="checkbox" className="accent-[#F00000]" />
                  <p className="text-[#6B7385] ">By click 'Book Now', I agree to DreamSport Privacy Policy and Terms & condition </p>
                  </div>
                  <button className="bg-[#F00000] rounded-lg cazelFont text-white font-semibold p-2 mt-3 hover:bg-[#f00000b5] ">Book Now</button>
                </form>
             </div>
          </div>
      </div>
         

      
  
    </div>
  );
};

export default Detail;
