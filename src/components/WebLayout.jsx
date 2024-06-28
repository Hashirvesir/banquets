import React from 'react'
import Header from './Header'
import Footer from './Footer'

const WebLayout = ({ children }) => {
  return (
    <>
    <Header/>
    {children}   
    <Footer/> 
    </>
  )
}

export default WebLayout