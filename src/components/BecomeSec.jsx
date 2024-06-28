import React from 'react'

const BecomeSec = () => {
  return (
    <>
    <div className='min-h-[60vh]'>
    <div className='min-h-[40vh] flex justify-center flex-wrap mt-20'>
        <div className='w-[550px] p-5 md:p-10 text-white h-[400px] bg-[#F00000] '>
            <p className='font-sans mb-2 font-extralight text-xl'>ARE YOU A VENDOR?</p>
            <h2 className='cazelFont mb-4 md:mb-8 text-2xl'>BECOME A MEMBER NOW.</h2>
            <p className='font-sans font-extralight mb-4 md:mb-8 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue, sapien non efficitur sollicitudin, ex risus semper.</p>
            <button
                  type="button"
                  className={`text-white font-sans bg-[#F00000] border border-white md:block hover:bg-red-600 focus:outline-none  rounded-md text-sm md:px-10 font-extralight px-8 py-3 text-center me-2 mb-2 dark:bg--[#F00000] dark:hover:bg-red-600 dark:focus:ring-red-900`}
                >
                  FIND OUT MORE
                </button> 
        </div>
        <div className='w-[550px] h-[400px] overflow-hidden'>
            <img src="NoPath.png" className="h-full w-full" alt="" />
        </div>
    </div>
    </div>
   
    </>
  )
}

export default BecomeSec
