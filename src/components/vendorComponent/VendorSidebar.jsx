"use client"
import React, { useState} from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { CiViewTable } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { TbLayoutKanban } from "react-icons/tb";
import { HiOutlineCalendar } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const VendorSidebar = () => {
    const [open, setOpen] = useState(true);
    
    const menus = [
        { name: "Dashboard", link: "/vendors/dashboard", icon: MdOutlineDashboard },
        { name: "Banquet Detail", link: "/vendors/dashboard/banquetDetail", icon:TbLayoutKanban  },
        { name: "Add Banquets", link: "/vendors/dashboard/addBanquet", icon:IoMdAddCircle  }, 
        { name: "Calender", link: "/vendors/dashboard/calender", icon:HiOutlineCalendar  }, 
        { name: "Author Table", link: "/vendors/dashboard/authorTable", icon:CiViewTable  }, 
      ];

    

    return (
        <section className="flex gap-6">
        <div
          className={`bg-black min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-between">
            <Image src="/logo.png" className={`${open ? "block" : "hidden" }`} height={120} width={120} alt="logo" />
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                href={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div className="bg-[#F00000] p-1 rounded-lg" >{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                 
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden z-40 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          <div className="absolute top-[450px] bottom-2">
                    <button className={`bg-[#F00000] ${open ? "block" : "hidden"} px-5 py-3 font-light rounded-xl mt-4`}>Logout</button>
          </div>
          </div>
        </div>
        
      </section>
    );
};

export default VendorSidebar;

      