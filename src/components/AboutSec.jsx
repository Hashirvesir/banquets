import React from 'react'
import Btn from '@/components/Btn'
import Wrapper from './Wrapper'

const AboutSec = () => {
  return (
    <>
      <div className='w-full gap-1 flex aboutpagebgcard1 flex-col justify-center items-center min-h-[100vh] border-2  '>
        <div className='flex gap-1 flex-wrap justify-center w-full'>
          <div className='md:w-[400px] rounded-lg w-[350px]  md:h-[300px'>
            <img src='hallfront1.png' className='w-full'/>
          </div>
          <div className='md:w-[400px] rounded-lg w-[350px] h-[300px] bg-white p-5'>
            <img src="online-order.png" className='w-16 mx-auto'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sint, ad neque eligendi sequi voluptate porro amet sit similique ipsam!</p>
            <div className='mt-4'>
           <Btn  label="contact us"/>
            </div>
          </div>
        </div>
        <div className='flex gap-1 flex-wrap-reverse justify-center  w-full'>
        <div className='md:w-[400px] rounded-lg w-[350px] h-[300px] bg-white p-5'>
            <img src="pickup.png" className='w-16 mx-auto'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sint, ad neque eligendi sequi voluptate porro amet sit similique ipsam!</p>
            <div className='mt-4'>
           <Btn  label="contact us"/>
            </div>
          </div>
        <div className='md:w-[400px] rounded-lg w-[350px]  md:h-[300px]'>
            <img src='hallfront2.png' className='w-full'/>
          </div>
          
        </div>
      </div>

      <div className='w-full mt-3 min-h-[60vh] aboutpagebgcard2'>
        <Wrapper>
        <div className=' mt-1flex w-full'>
        <div className='rounded-lg md:p-10 p-6 '>
        <h2 className='md:text-4xl text-3xl  mb-3 font-bold cazelFont trackin'>WHO WE ARE</h2>
         <p >  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vero modi quas. Temporibus,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus error at in assumenda exercitationem ullam quis animi repellat unde quo.</p>
          </div>
        </div>
            <div className='w-full'>
                <div className=' flex justify-center gap-5 flex-wrap'>
                    <div className=' rounded-xl overflow-hidden mt-12  w-[300px] h-[400px] '>
                        <img src="https://images.unsplash.com/photo-1525772764200-be829a350797?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full' alt="" />
                    </div>
                    <div className='w-[300px] h-[400px] rounded-xl overflow-hidden  '>
                        <img src="https://plus.unsplash.com/premium_photo-1664304118366-216dbb7c76cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-full' alt="" />
                    </div>
                </div>
            </div>
        </Wrapper>
       
        </div>    
    </>
  )
}

export default AboutSec