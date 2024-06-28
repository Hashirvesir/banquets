import VendorLayout from "@/components/vendorComponent/VendorLayout";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const banquetDetail = () => {
  return (
    <>
      <VendorLayout>
        <div className=" flex -mt-9 gap-1 items-center">
          <p className="text-sm text-gray-500">Pages </p>
          <p className="text-[#F00000]">/banquet detail</p>
        </div>
        <div>
          <p className="uppercase cazelFont text-[#F00000] text-2xl md:text-3xl font-extrabold mt-2 mb-4">
            banquet detail
          </p>
          <div className=" min-h-[50vh] w-full ">
            <div className="shadow-md flex items-center rounded-lg flex-wrap gap-3 border p-4">
              <div className="flex flex-col">
                <label className="cazelFont font-bold text-[#F00000] text-xl">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-[#F3F3F9] md:w-[200px] w-[150px] py-2 px-4 focus:outline-none rounded-xl"
                />
              </div>
            
              <div className="mt-7">
                <button className="bg-[#F00000] rounded-lg text-white cazelFont py-2 px-7"> Search</button>
              </div>


            </div>

            <div className="w-full flex flex-wrap gap-5 mt-10 justify-center">
               
                <div className="w-[350px] h-[250px] mt-5 md:mt-0 bg-[#F3F3F9] rounded-md  p-4">
                    <div className="flex justify-between items-center">
                        <div className="w-13 h-11 border rounded-xl border-red-500">
                                <img src="/cardlogo.png" className="w-full h-full" />
                            </div>
                            <div>
                            <HiOutlineDotsVertical size={25} className="cursor-pointer" />
                            </div>
                    </div>
                                <p className="cazelFont mt-3 text-lg md:text-xl font-bold">Elegance Heights Banquets</p>
                            <div className="mt-3 flex justify-between">
                                <div className="flex gap-2">
                                    <ul className="font-light md:text-sm text-xs capitalize">
                                        <li>Area</li>
                                        <li>Amount</li>
                                        <li>Status</li>
                                    </ul>
                                    <ul className="font-semibold md:text-sm text-xs capitalize">
                                        <li>Saddar</li>
                                        <li>50000</li>
                                        <li>active</li>
                                    </ul>
                                </div>

                                <div className="flex gap-2">
                                    <ul className="font-light capitalize md:text-sm text-xs">
                                        <li>City</li>
                                        <li>Member</li>
                                    </ul>
                                    <ul className="font-semibold capitalize md:text-sm text-xs">
                                        <li>karachi</li>
                                        <li>1000</li>
                                    </ul>
                                </div>
                            </div>
                            <button className="bg-[#F00000] w-full p-2 mt-4 rounded-xl hover:bg-[#f00000ba] text-white">edit</button>
                </div>
                <div className="w-[350px] h-[250px] mt-5 md:mt-0 bg-[#F3F3F9] rounded-md  p-4">
                    <div className="flex justify-between items-center">
                        <div className="w-13 h-11 border rounded-xl border-red-500">
                                <img src="/cardlogo.png" className="w-full h-full" />
                            </div>
                            <div>
                            <HiOutlineDotsVertical size={25} className="cursor-pointer" />
                            </div>
                    </div>
                                <p className="cazelFont mt-3 text-lg md:text-xl font-bold">Elegance Heights Banquets</p>
                            <div className="mt-3 flex justify-between">
                                <div className="flex gap-2">
                                    <ul className="font-light md:text-sm text-xs capitalize">
                                        <li>Area</li>
                                        <li>Amount</li>
                                        <li>Status</li>
                                    </ul>
                                    <ul className="font-semibold md:text-sm text-xs capitalize">
                                        <li>Saddar</li>
                                        <li>50000</li>
                                        <li>active</li>
                                    </ul>
                                </div>

                                <div className="flex gap-2">
                                    <ul className="font-light capitalize md:text-sm text-xs">
                                        <li>City</li>
                                        <li>Member</li>
                                    </ul>
                                    <ul className="font-semibold capitalize md:text-sm text-xs">
                                        <li>karachi</li>
                                        <li>1000</li>
                                    </ul>
                                </div>
                            </div>
                            <button className="bg-[#F00000] w-full p-2 mt-4 rounded-xl hover:bg-[#f00000ba] text-white">edit</button>
                </div>
                <div className="w-[350px] h-[250px] mt-5 md:mt-0 bg-[#F3F3F9] rounded-md  p-4">
                    <div className="flex justify-between items-center">
                        <div className="w-13 h-11 border rounded-xl border-red-500">
                                <img src="/cardlogo.png" className="w-full h-full" />
                            </div>
                            <div>
                            <HiOutlineDotsVertical size={25} className="cursor-pointer" />
                            </div>
                    </div>
                                <p className="cazelFont mt-3 text-lg md:text-xl font-bold">Elegance Heights Banquets</p>
                            <div className="mt-3 flex justify-between">
                                <div className="flex gap-2">
                                    <ul className="font-light md:text-sm text-xs capitalize">
                                        <li>Area</li>
                                        <li>Amount</li>
                                        <li>Status</li>
                                    </ul>
                                    <ul className="font-semibold md:text-sm text-xs capitalize">
                                        <li>Saddar</li>
                                        <li>50000</li>
                                        <li>active</li>
                                    </ul>
                                </div>

                                <div className="flex gap-2">
                                    <ul className="font-light capitalize md:text-sm text-xs">
                                        <li>City</li>
                                        <li>Member</li>
                                    </ul>
                                    <ul className="font-semibold capitalize md:text-sm text-xs">
                                        <li>karachi</li>
                                        <li>1000</li>
                                    </ul>
                                </div>
                            </div>
                            <button className="bg-[#F00000] w-full p-2 mt-4 rounded-xl hover:bg-[#f00000ba] text-white">edit</button>
                </div>
                <div className="w-[350px] h-[250px] mt-5 md:mt-0 bg-[#F3F3F9] rounded-md  p-4">
                    <div className="flex justify-between items-center">
                        <div className="w-13 h-11 border rounded-xl border-red-500">
                                <img src="/cardlogo.png" className="w-full h-full" />
                            </div>
                            <div>
                            <HiOutlineDotsVertical size={25} className="cursor-pointer" />
                            </div>
                    </div>
                                <p className="cazelFont mt-3 text-lg md:text-xl font-bold">Elegance Heights Banquets</p>
                            <div className="mt-3 flex justify-between">
                                <div className="flex gap-2">
                                    <ul className="font-light md:text-sm text-xs capitalize">
                                        <li>Area</li>
                                        <li>Amount</li>
                                        <li>Status</li>
                                    </ul>
                                    <ul className="font-semibold md:text-sm text-xs capitalize">
                                        <li>Saddar</li>
                                        <li>50000</li>
                                        <li>active</li>
                                    </ul>
                                </div>

                                <div className="flex gap-2">
                                    <ul className="font-light capitalize md:text-sm text-xs">
                                        <li>City</li>
                                        <li>Member</li>
                                    </ul>
                                    <ul className="font-semibold capitalize md:text-sm text-xs">
                                        <li>karachi</li>
                                        <li>1000</li>
                                    </ul>
                                </div>
                            </div>
                            <button className="bg-[#F00000] w-full p-2 mt-4 rounded-xl hover:bg-[#f00000ba] text-white">edit</button>
                </div>
                <div className="w-[350px] h-[250px] mt-5 md:mt-0 bg-[#F3F3F9] rounded-md  p-4">
                    <div className="flex justify-between items-center">
                        <div className="w-13 h-11 border rounded-xl border-red-500">
                                <img src="/cardlogo.png" className="w-full h-full" />
                            </div>
                            <div>
                            <HiOutlineDotsVertical size={25} className="cursor-pointer" />
                            </div>
                    </div>
                                <p className="cazelFont mt-3 text-lg md:text-xl font-bold">Elegance Heights Banquets</p>
                            <div className="mt-3 flex justify-between">
                                <div className="flex gap-2">
                                    <ul className="font-light md:text-sm text-xs capitalize">
                                        <li>Area</li>
                                        <li>Amount</li>
                                        <li>Status</li>
                                    </ul>
                                    <ul className="font-semibold md:text-sm text-xs capitalize">
                                        <li>Saddar</li>
                                        <li>50000</li>
                                        <li>active</li>
                                    </ul>
                                </div>

                                <div className="flex gap-2">
                                    <ul className="font-light capitalize md:text-sm text-xs">
                                        <li>City</li>
                                        <li>Member</li>
                                    </ul>
                                    <ul className="font-semibold capitalize md:text-sm text-xs">
                                        <li>karachi</li>
                                        <li>1000</li>
                                    </ul>
                                </div>
                            </div>
                            <button className="bg-[#F00000] w-full p-2 mt-4 rounded-xl hover:bg-[#f00000ba] text-white">edit</button>
                </div>
            </div>
          </div>
        </div>
      </VendorLayout>
    </>
  );
};

export default banquetDetail;
