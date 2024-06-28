import WebLayout from '@/components/WebLayout';
import Wrapper from '@/components/Wrapper'
import Banner from '@/components/Banner'
import BanquestImg from "../../../public/banquestbg.png"
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const contact = () => {
  return (
    <>
    <WebLayout>
      <Banner image={BanquestImg} title="Contact us" />
      <Wrapper>
        <div className='w-full mb-[200px] mt-[100px]  min-h-[100vh]'>

        <h2 className='font-bold cazelFont text-center mb-4 text-3xl'>GET IN TOUCH</h2>
        <div className="w-full flex flex-wrap  ">
        <div className='md:w-1/2 w-full flex justify-center flex-col'>
          <div className=' mx-auto w-2/3'>
          <div className=" w-full bg-[#F8F8F8] p-2 rounded-lg md:mx-0 flex flex-wrap items-center mt-10">
          <div className="px-2">
            <p className="bg-[#F00000] rounded-full p-1.5  text-xs text-white">
              <IoCallSharp className='' size={25}/>
            </p>
          </div>
          <div>
            <div className="flex py-2 font-semibold cazelFont text-2xl">
              Call us
            </div>
            <p className="text-[18px] w-48">91111111111</p>
          </div>
        </div>
        <div className=" w-full bg-[#F8F8F8] p-2 rounded-lg md:mx-0 flex flex-wrap items-center mt-10">
          <div className="px-2">
            <p className="bg-[#F00000] rounded-full p-1.5  text-xs text-white">
              <IoCallSharp className='' size={25}/>
            </p>
          </div>
          <div>
            <div className="flex py-2 font-semibold cazelFont text-2xl">
              Location
            </div>
            <p className="text-[18px]">Middle East Market 2054 San Pablo ave</p>
          </div>
        </div>
        <div className=" w-full bg-[#F8F8F8] p-2 rounded-lg md:mx-0 flex flex-wrap items-center mt-10">
          <div className="px-2">
            <p className="bg-[#F00000] rounded-full p-1.5  text-xs text-white">
              <IoCallSharp className='' size={25}/>
            </p>
          </div>
          <div>
            <div className="flex py-2 flex-col  text-2xl">
              <p className='cazelFont font-semibold '>Location</p>
            <p className="text-[18px] ">hashirvesir123@gmail.com</p>
            </div>
          </div>
        </div>
          <div className='mt-8'>
            <p className='text-3xl text-center font-bold'>Connect us</p>
            <div className='flex justify-center gap-2 mt-3'>
            <FaFacebook size={30} className='rounded-full w-[50px] h-[44px] p-2  hover:bg-[#F00000] hover:text-white hover:border-none border border-black' />
            <FaInstagram size={30} className='rounded-full w-[50px] h-[44px] p-2 hover:bg-[#F00000] hover:text-white hover:border-none border border-black' />
            <FaTwitter size={30} className='rounded-full w-[50px] h-[44px] p-2   hover:bg-[#F00000] hover:text-white hover:border-none border border-black' />
            </div>
          </div>
          </div>
        
        </div>
        <div className='md:w-1/2 w-full shadow-md '>
             <div className="mx-auto w-2/3">
                <form className="flex gap-1 mb-[10px] flex-col">
                  <label className="mt-3 font-semibold cazelFont" >Name</label>
                  <input className="bg-[#FAFAFA] p-3 rounded focus:outline-none" placeholder="Enter Name" type="text" />
                  <label className="mt-3 font-semibold cazelFont" >Email</label>
                  <input className="bg-[#FAFAFA] p-3 rounded focus:outline-none" placeholder="Enter Email" type="text" />
                  <label className="mt-3 font-semibold cazelFont">Select subject</label>
                  <select className="p-3 rounded focus:outline-none bg-[#FAFAFA] " name="" id="">
                    <option value="">Red</option>
                    <option value="">Blue</option>
                    <option value="">Green</option>
                  </select>
                  <label className="mt-3 font-semibold cazelFont" >Detail</label>
                  <textarea placeholder="Enter Detail" className="bg-[#FAFAFA]  p-3 rounded focus:outline-none"  name="" id="" cols="20" rows="3"></textarea>

                  <button className="bg-[#F00000] cazelFont rounded-lg cazelFont text-white font-semibold p-2 mt-3 hover:bg-[#f00000b5] ">SEND MESSAGE</button>
                </form>
             </div>
        </div>
      </div>
        </div>
      
      </Wrapper>
      </WebLayout>
    </>
  )
}

export default contact