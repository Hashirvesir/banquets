"use client";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import GallerySlider from "./GallerySlider";
const Accordion = () => {
  const [OverViewOpen, setOverViewOpen] = useState(false);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);



  return (
    <>  
    <div className="flex gap-2 mt-5 ">
      <button className="w-[100px] p-2.5 rounded-lg  border border-[#EAEDF0] text-black transition-colors ease-in-out delay-75 hover:bg-black hover:text-white"  onClick={() => setOverViewOpen(!OverViewOpen)}>Overview</button>
      <button className="w-[100px] p-2.5 rounded-lg  border border-[#EAEDF0] text-black transition-colors ease-in-out delay-75 hover:bg-black hover:text-white"  onClick={() => setAmenitiesOpen(!amenitiesOpen)}>Amenities</button>
      <button className="w-[100px] p-2.5 rounded-lg  border border-[#EAEDF0] text-black transition-colors ease-in-out delay-75 hover:bg-black hover:text-white"  onClick={() => setLocationOpen(!locationOpen)}>Location</button>
      </div>    
      <div className="p-4  w-full rounded-lg">
      <div className="py-2">
        <button
          onClick={() => setOverViewOpen(!OverViewOpen)}
          className="flex border-b-2 py-2 border-[#EAEDF0] justify-between w-full"
        >
          <span className="font-bold cazelFont">Overview</span>
          <div>
            <IoIosArrowUp
              className={`transform origin-center transition duration-200 ease-out ${
                OverViewOpen && "!rotate-180"
              }`}
            />
          </div>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            OverViewOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden mt-3 text-black font-semibold">
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Illo soluta, eveniet voluptate sint sapiente nesciunt ipsam
            doloribus numquam assumenda explicabo, exercitationem deleniti
            magnam rerum provident aut nihil deserunt earum molestias dicta,
            praesentium magni eos possimus aperiam! Dolorem commodi possimus
            enim voluptatem, illo.</p>
            <div className="font-bold cazelFont mt-4 border-b-2 py-2 border-[#EAEDF0]">Rules</div>
            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorem exercitationem illo, commodi quidem deleniti? Quasi commodi suscipit nostrum repellat.</p>
          </div>
        </div>
      </div>

      <div className="py-2">
        <button
          onClick={() => setAmenitiesOpen(!amenitiesOpen)}
          className="flex border-b-2 py-2 border-[#EAEDF0] mb-4 justify-between w-full"
        >
          <span className="font-bold cazelFont">Amenities</span>
          <div>
            <IoIosArrowUp
              className={`transform origin-center transition duration-200 ease-out ${
                amenitiesOpen && "!rotate-180"
              }`}
            />
          </div>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            amenitiesOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="font-bold text-black"> commodi quidem deleniti? Quasi commodi suscipit nostrum repellat.</p>
          <div className="flex justify-between mt-4 border-b-2 py-2 mb-4 border-[#EAEDF0]">
            <div className="cazelFont text-black font-bold ">
            Gallery
            </div>
            <div>
              <select className="bg-[#F00000] p-1 md:p-2 focus:outline-none rounded-lg text-white">
                <option value="" selected >Filter theme</option>
                <option value="">red</option>
                <option value="">blue</option>
                <option value="">green</option>

              </select>
            </div>  
            </div>
          <GallerySlider/>

          </div>
        </div>
      </div>
      
      <div className="py-2 ">
        <button
          onClick={() => setLocationOpen(!locationOpen)}
          className="flex justify-between w-full border-b-2 py-2 border-[#EAEDF0]  "
        >
          <span className="font-bold cazelFont">Location</span>
          <div>
            <IoIosArrowUp
              className={`transform origin-center transition duration-200 ease-out ${
                locationOpen && "!rotate-180"
              }`}
            />
          </div>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            locationOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
          <div className="w-full">
      <iframe
        title="Google Map"
        width="100%"
        height="600"
   
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <a href="https://www.gps.ie/">gps trackers</a>
    </div>
          </div>
        </div>
      </div>
      </div>
   

    </>
  );
};

export default Accordion;
