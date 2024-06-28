import React from 'react'
import Image from 'next/image'

const Banner = ({image,title}) => {
  return (
    <div className=''>
          <div className="flex flex-col h-[400px] justify-between">
        <div className="relative w-full">
            <div className="absolute -z-10 w-full">
                <Image src={image} className="w-full md:h-[450px] h-[400px]" width={1000} height={1000} />
            </div>
           <div className='flex justify-center mt-[220px]'>
            <p className='text-white font-extrabold cazelFont tracking-widest text-center md:text-4xl text-2xl uppercase  '>{title}</p> 
           </div>
        </div>
    </div>    
    </div>
  )
}

export default Banner