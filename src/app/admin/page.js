import React from 'react'
import Image from 'next/image'

const login = () => {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='md:w-1/2 w-full md:h-[100vh]  h-[50vh] border border-red-400'>
        <Image src='/login.png' width={1000} height={1000}  alt='login-img' className='w-full h-full' />
        </div>
        
        <div className='md:w-1/2 w-full md:h-[100vh] p-10 min-h-[50vh]'>
            <div className=''> 
            <Image src='/logo.png' width={140} height={140} alt='logo' className='w-[140px] ' />
              <div className='flex flex-col  md:w-[80%] w-full '>
                <p className='cazelFont text-xl md:text-2xl font-extrabold'>Sign in to Dashboard</p>
                <div className='flex flex-col'>
                <label className='mt-4 text-[#565656]'>Email</label>
                <input type='email' className='border border-[#F00000] w-[90%] mt-2 p-2 rounded-md focus:outline-none' placeholder='Email '/>
                </div>
                <div className='flex flex-col'>
                <label className='mt-4 text-[#565656]'>Password</label>
                <input type='password' className='border border-[#F00000] w-[90%] mt-2 p-2 rounded-md focus:outline-none' placeholder='Password '/>
                </div>
                <p className='flex justify-end w-[90%] text-sm mt-2 text-[#565656] '>Forget password?</p>
                <button className='bg-[#F00000] w-[90%] p-2 rounded-md text-white mt-16 hover:bg-[#f00000b5]'>Sign in</button>
             
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default login