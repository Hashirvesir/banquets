import React from 'react'
import WebLayout from '@/components/WebLayout'
import Wrapper from '@/components/Wrapper'
import Banner from '@/components/Banner'
import Aboutus from '@/components/Aboutus'
import BannerImg from "../../../public/aboutBanner.png"
import AboutSec from '@/components/AboutSec'
import TestimonialSlider from '@/components/TestimonialSlider'
import ContactUs from '@/components/ContactUs'

const page = () => {
  return (
    <>
    <WebLayout>
      <Banner image={BannerImg} title="ABOUT"/>
      <Wrapper>
      <div className='mt-[100px] mb-[100px]'>
      <Aboutus/>
      </div>
      </Wrapper>
      <AboutSec/>
      <Wrapper>
      <TestimonialSlider/> 
      </Wrapper>
        <ContactUs/>               
    </WebLayout>
    </>
  )
}

export default page