"use client";
import React, { useState } from "react";

const AdminTopBar = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <div className="flex justify-end gap-1 flex-wrap-reverse  p-3">
       
       <div className="flex  items-center gap-3">
         {/* <div class="relative">
           <span class="absolute inset-y-0 left-0 flex items-center pl-2">
             <button
               type="submit"
               className="p-1 focus:outline-none focus:shadow-outline"
             >
               <IoIosSearch />
             </button>
           </span>
           <input
             type="search"
             name="q"
             className="  bg-gray-200 py-2 rounded-xl w-[150px] md:w-[200px] text-sm text-whiterounded-md pl-7 md:pl-10 focus:outline-none "
             placeholder="Search..."
             autocomplete="off"
           />
         </div> */}
      
         <div
     className={`  flex justify-center z-50 items-center relative ${open ? 'border-indigo-700 transform transition duration-300' : 'border-transparent'}`}
     onClick={() => setOpen(!open)}
   >
     <div className="flex justify-center items-center space-x-3 cursor-pointer">
       <div className="w-9 h-9 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
         <img src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" className="w-full h-full object-cover" />
       </div>
       
     </div>
     {open && (
       <div className="absolute w-28 px-6 py-3 z-50 dark:bg-black bg-white rounded-lg shadow border dark:border-transparent mt-40 mr-32">
         <ul className="space-y-3 dark:text-white">
           <li className="font-medium">
             <a href="#" className="flex items-center justify-center text-sm hover:text-gray-300">
               <div className="mr-3">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
               </div>
               Account
             </a>
           </li>
           <li className="font-medium">
             <a href="#" className="flex items-center justify-center text-sm hover:text-gray-300">
               <div className="mr-3">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
               </div>
               Setting
             </a>
           </li>
           <hr className="dark:border-gray-700" />
           <li className="font-medium">
             <a href="#" className="flex items-center justify-center text-sm hover:text-gray-300">
               <div className="mr-3 text-red-600">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
               </div>
               Logout
             </a>
           </li>
         </ul>
       </div>
     )}
   </div>
       </div>
     </div>
    </>
  )
}

export default AdminTopBar