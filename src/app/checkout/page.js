"use client";
import WebLayout from "@/components/WebLayout";
import React from "react";
import Wrapper from "@/components/Wrapper";
import Banner from "@/components/Banner";
import BanquestImg from "../../../public/banquestbg.png";
import { useState } from "react";

const checkout = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [paymentOption, setPaymentOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
const handlePaymentChange = (e)=>{
  setPaymentOption(e.target.value)
  console.log(setPaymentOption)
}
  return (
    <>
    <WebLayout>

   
      <Banner image={BanquestImg} title="checkout" />
      <Wrapper>
        <form>
        <div className="w-full mb-[200px] mt-[100px]  min-h-[100vh]">
          <div className="w-full gap-7 justify-center flex flex-wrap  ">
            {/* Box1  */}
            <div className="md:w-[55%] rounded-xl w-full shadow-md ">
            <h3 className="text-2xl cazelFont font-bold">BILLING DETAILS</h3>
              <div className="flex p-11 gap-1  flex-col">
                <label className="mt-3 font-bold cazelFont">Name</label>
                <input
                  className="bg-[#FAFAFA] p-3 rounded-xl focus:outline-none"
                  placeholder="Enter Name"
                  type="text"
                />
                <label className="mt-3 font-bold cazelFont">Email</label>
                <input
                  className="bg-[#FAFAFA] p-3 rounded-xl focus:outline-none"
                  placeholder="Enter Email"
                  type="text"
                />
                <label className="mt-3 font-bold cazelFont">
                  Select subject
                </label>
                <input
                  className="bg-[#FAFAFA] p-3 rounded-xl focus:outline-none"
                  type="date"
                />
                <label className="mt-3 font-bold cazelFont">
                  Select subject
                </label>
                <select
                  className="p-3 rounded-xl focus:outline-none bg-[#FAFAFA] "
                  name=""
                  id=""
                >
                  <option value="">Red</option>
                  <option value="">Blue</option>
                  <option value="">Green</option>
                </select>
                <label className="mt-3 font-bold cazelFont">Detail</label>
                <textarea
                  placeholder="Enter Detail"
                  className="bg-[#FAFAFA]  p-3 rounded-xl focus:outline-none"
                  name=""
                  id=""
                  cols="20"
                  rows="3"
                ></textarea>

                <label className="mt-3 font-bold cazelFont">
                  Number of Guest
                </label>
                <div className="flex rounded-xl flex-wrap mt-3 ">
                  <p className="p-3 hover:bg-[#F00000] text-black border cursor-pointer border-gray-100 hover:text-white">
                    500
                  </p>
                  <p className="p-3 hover:bg-[#F00000] text-black border cursor-pointer border-gray-100 hover:text-white">
                    1000
                  </p>
                  <p className="p-3 hover:bg-[#F00000] text-black border cursor-pointer border-gray-100 hover:text-white">
                    1500
                  </p>
                  <p className="p-3 hover:bg-[#F00000] text-black border cursor-pointer border-gray-100 hover:text-white">
                    2000
                  </p>
                  <p className="p-3 hover:bg-[#F00000] text-black border cursor-pointer border-gray-100 hover:text-white">
                    2000
                  </p> 
                </div>
                <div>
                  <div className="flex mt-3 gap-4 mb-2 w-full border border-[#EAEDF0] p-2 rounded-xl">
                  <input
                        type="radio"
                        name="options"
                        value="option1"
                        checked={selectedOption === "option1"}
                        className="accent-[#F00000] cursor-pointer"
                        onChange={handleOptionChange} cursor-pointer
                      />
                    <label className="font-bold">
                     10% Advanced Booking
                    </label>
                   
                  </div>
                  <div className="flex gap-4  w-full border border-[#EAEDF0] p-2 rounded-xl">
                  <input
                      type="radio"
                      name="options"
                      value="option2"
                      className="accent-[#F00000] cursor-pointer"
                      checked={selectedOption === "option2"}
                      onChange={handleOptionChange}
                    />
                    <label className="font-bold">
                    Full Payment
                    </label>
                   
                  </div>
                </div>
              </div>
            </div>
            {/* Box2  */}
            <div className="md:w-1/3 w-full rounded-xl h-[700px] shadow-md ">
                <h3 className="text-2xl font-bold cazelFont text-center">YOUR ORDER</h3>
              <div className=" mx-auto w-[90%]">
                <div className=" min-h-[600px]">
                  <div className="md:p-3">
                    <div className="flex justify-between font-extrabold cazelFont">
                      <p>PRODUCT</p>
                      <p>SUBTOTAL</p>
                    </div>
                      <div className="border-b-2 mt-2 border-gray-200"></div>
                      <div className="mt-4">
                          <div className="flex justify-between">
                              <p className="text-[#818181] text-sm font-semibold uppercase  w-40">THE GRAND BANQUET</p>
                              <p className="font-extrabold cazelFont">70,000</p>
                          </div>                          
                            <p className="font-semibold text-sm mt-2">Date & Time: <span className="text-[#818181]">2024-01-31 - 08:00 pm</span> </p>
                            <p className="font-semibold text-sm mt-2">Details: <span className="text-[#818181]">Indoor , 500 Members</span> </p>
                      </div>
                      <div className="border-b-2 mt-4 border-gray-200"></div>
                      <div className="mt-2">
                        <div className="flex justify-between">
                        <p className="text-sm font-extrabold uppercase cazelFont w-40">SUBTOTAL</p>
                              <p className="font-extrabold cazelFont">70,000</p>
                        </div>
                        <div className="flex justify-between mt-2">
                        <p className="text-sm font-extrabold uppercase  cazelFont w-40">tax</p>
                              <p className="font-extrabold cazelFont">5000</p>
                        </div>
                        <div className="border-b-2 mt-4 border-gray-200"></div>
                        <div className="flex justify-between mt-2">
                        <p className="text-sm font-extrabold uppercase  cazelFont w-40">total</p>
                              <p className="font-extrabold cazelFont">75,000</p>
                        </div>
                        <div className="border-b-2 mt-2 border-gray-200"></div>
                        <div className="mt-4">
                          <p className="uppercase cazelFont font-bold text-md">select Payment method</p>
                          <div className="flex mt-3 gap-4 mb-2 w-full border border-[#EAEDF0] p-2 rounded-xl">
                            <input
                                  type="radio"
                                  value="EasyPaisa"
                                  name="option"
                                  checked={paymentOption === "EasyPaisa"}
                                  className="accent-[#F00000] cursor-pointer"
                                  onChange={handlePaymentChange}
                                />
                              <label className="font-bold">
                              Easy Paisa
                              </label>
                            
                            </div>
                            <div className="flex mt-3 gap-4 mb-2 w-full border border-[#EAEDF0] p-2 rounded-xl">
                            <input
                                  type="radio"
                                  value="JazzCash"
                                  name="option"
                                  checked={paymentOption === "JazzCash"}
                                  className="accent-[#F00000] cursor-pointer"
                                  onChange={handlePaymentChange}
                                />
                              <label className="font-bold">
                              Jazz Cash
                              </label>
                            
                            </div>
                            <div className="flex mt-3 gap-4 mb-2 w-full border border-[#EAEDF0] p-2 rounded-xl">
                            <input
                                  type="radio"
                                  value="CreditCard"
                                  name="option"
                                  checked={paymentOption === "CreditCard"}
                                  className="accent-[#F00000] cursor-pointer"
                                  onChange={handlePaymentChange}
                                />
                              <label className="font-bold">
                             Credit Card
                              </label>
                            
                            </div>
                            
                  <button className="bg-[#F00000] w-full cazelFont rounded-lg cazelFont text-white font-semibold p-2 mt-3 hover:bg-[#f00000b5] ">PROCEED</button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
      </Wrapper>
      </WebLayout>
    </>
  );
};

export default checkout;
