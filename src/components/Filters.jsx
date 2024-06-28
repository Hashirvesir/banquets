"use client"
import { motion } from "framer-motion"
import React from "react"
import { useState, useEffect,  } from 'react'


const Filters = () => {
    const cities = [
          {id:"1",city:"Karachi"},
          {id:"2",city:"Lahore"},
          
    ]
    const Areas = [
        {id:"1",cityid:"1",area:"Gulshan-e-Iqbal"},
        {id:"2",cityid:"1",area:"Clifton"},
        {id:"3",cityid:"1",area:"Shahrah-e-Faisal"},
        {id:"4",cityid:"1",area:"Gulshan-e-Maymar"},
        {id:"5",cityid:"1",area:"Abdullah Haroon Road"},
        {id:"6",cityid:"1",area:"DHA Phase 2 Extension"},
        {id:"7",cityid:"1",area:"Hatim Alvi Road"},
        {id:"8",cityid:"1",area:"Molvi Tamizuddin Khan Road"},
        {id:"9",cityid:"1",area:"Sakhi Hassan"},
        {id:"10",cityid:"1",area:"Saidabad"},
        {id:"11",cityid:"2",area:"Sakhi Hassan"},
        {id:"12",cityid:"2",area:"Sakhi Hassan"},
        {id:"13",cityid:"2",area:"Sakhi Hassan"},
        {id:"14",cityid:"2",area:"Sakhi Hassan"},
        {id:"15",cityid:"2",area:"Sakhi Hassan"},
        {id:"16",cityid:"2",area:"Sakhi Hassan"},
        
    ]
    const [city, setCity] = useState([])
    const [area, setArea] = useState([])
    useEffect(() => {
        setCity(cities)
        console.log(city)
    }, [])

    const handleCountry = (id)=>{
        const dt = Areas.filter(x => x.cityid === id)
        setArea(dt)
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
    <div className='w-full p-3 min-h-[20vh]  '>
        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.9}}
       
        className='content mb-5 flex items-center justify-between  '>
            <h1 className="text-lg md:text-2xl cazelFont font-bold uppercase">Best Marriage Banquets in Pakistan</h1>
            <p className="text-[13px] p-0 text-[#F00000]">Latest Searching</p>
        </motion.div>
        <hr className="w-fulltext-red-500"/>
        <motion.div 
        initial={{opacity:0,y:10}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.9}}
        className='filter mt-6 flex justify-center gap-4 flex-col-5 flex-wrap'>
            <div className="pr-4">
                <p className="font-light mb-4">City</p>
                <select className="icon text-center p-2  w-[200px]  h-[35px] rounded-md border-none focus:border-none bg-[#F8F8FA]" id="ddlCity" onChange={(e)=> handleCountry(e.target.value)} >
                    <option value="" >select</option>

                    {
                        city && 
                        city !== undefined ?
                        city.map((ctr,index)=>{
                            return(
                                <option key={index} value={ctr.id}>{ctr.city}</option> 
                                
                            )
                            
                        }) : <option>no country</option>
                    }
                </select>
            </div>
            <div className="pr-4">
                <p className="font-light mb-4">Area</p>
                <select className="icon text-center text-ellipsis p-1 w-[200px] h-[35px] rounded-md border-none focus:border-none bg-[#F8F8FA]"  id="ddlArea">
                    {
                        area && 
                        area !== undefined ?
                        area.map((ctr,index)=>{
                            return(
                                <option className=""  key={index} value={ctr.id}>{ctr.area}</option> 
                                
                            )
                            
                        }) : <option>no country</option>
                    }
                </select>
            </div>
            <div className="pr-4">
                <p className="font-light mb-4">Guest</p>
             <input type="number" className="contact text-center p-1  w-[200px]  h-[35px]    rounded-md border-none focus:border-none bg-[#F8F8FA]"  id="ddlArea"/>
            </div>
            
            <div className="pr-4">
                <p className="font-light mb-4">Event Date</p>
             <input type="date" className="contact text-center p-1  w-[200px]  h-[35px]rounded-md border-none focus:border-none bg-[#F8F8FA]"  id="ddlArea"/>
            </div>

            <div  className=" mt-8">
            <button
                  type="button"
                  className={`text-white cazelFont bg-[#F00000] md:block hover:bg-red-800 focus:outline-none  rounded-xl text-sm md:px-6 px-4 py-3 text-center me-2 mb-2 dark:bg--[#F00000] dark:hover:bg-red-700 dark:focus:ring-red-900`}
                >
                  Search
                </button>                                                                                           
            </div>

        </motion.div>
    </div>
    </>
  )
}

export default Filters