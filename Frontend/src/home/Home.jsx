import React from 'react'
import '../index.css'
import Navbar from '../components/navbar'
import Banner from '../components/Banner'
import Footer from '../components/footer'
import Freebook from '../components/Freebook'
import Imageslider from '../components/Imageslider'

function Home() {
  return (
   <>
    <Navbar/>
    <Imageslider/>
    <Banner/>
   <Freebook/>
   
    <Footer/>
   </>
  )
}

export default Home
