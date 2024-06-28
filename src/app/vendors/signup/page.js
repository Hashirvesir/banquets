import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='flex flex-wrap '>
        <div className='md:w-1/2 w-full md:h-[100vh]  h-[50vh] border border-red-400'>
          <Image src='/login.png' width={1000} height={1000}  alt='login-img' className='w-full h-full' />
        </div>
        
        <div className='md:w-1/2 w-full md:h-[100vh] pt-0 p-10 min-h-[50vh]'>
            <div className=''> 
              <Image src='/logo.png' width={140} height={140} alt='logo' className='w-[140px] ' />
              <div className='flex flex-col  md:w-[80%] w-full '>
                <p className='cazelFont text-xl md:text-2xl font-extrabold'>Create your account</p>
                <div className='flex flex-col'>
                <label className='mt-2 text-[#565656]'>Name</label>
                <input type='text' className='border border-[#F00000] w-[90%] mt-2 p-2 rounded-md focus:outline-none' placeholder='Email '/>
                </div>
                <div className='flex flex-col'>
                <label className='mt-2 text-[#565656]'>Email</label>
                <input type='email' className='border border-[#F00000] w-[90%] mt-2 p-2 rounded-md focus:outline-none' placeholder='Email '/>
                </div>
                <div className='flex flex-col'>
                <label className='mt-2 text-[#565656]'>Password</label>
                <input type='password' className='border border-[#F00000] w-[90%] mt-2 p-2 rounded-md focus:outline-none' placeholder='Password '/>
                </div>
                <div className='flex flex-col'>
                <label className='mt-2 text-[#565656]'>Confirm Password</label>
                <input type='password' className='border border-[#F00000] w-[90%] mt-2 p-2 rounded-md focus:outline-none' placeholder='Password '/>
                </div>
                <div className='flex mt-4 gap-2'>
                    <input type='checkbox' className='accent-[#F00000]'/>
                    <p className='text-[#9A9AB0] '> I have read and agree to the Terms of Service</p>
                </div>
                <button className='bg-[#F00000] w-[90%] p-2 rounded-md text-white mt-6 hover:bg-[#f00000b5]'>Sign up</button>
                <p className='text-center w-[90%] text-[#9A9AB0] mt-1 mb-1'>Or</p>
                <button className='border-2 font-semibold hover:bg-[#F00000] hover:text-white transition ease-in-out delay-150 border-[#F00000] w-[90%] rounded-md p-2 text-[#F00000]'>sign up with Google</button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default page