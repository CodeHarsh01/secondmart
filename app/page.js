"use client"
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import BrowseCatagory from './components/BrowseCatagory'
import ActionCards from './components/ActionCards'
import MostSearchedBikes from './components/MostSearchBikes'
import OurTeam from './components/OurTeam'
import Footer from './components/Footer'
import Chooseus from './components/Chooseus'
import TermsPage from './components/Termspopup'
export default function Page() {
  const [Loading, setLoading] = useState(true)
  const [termspopup, settermspopup] = useState(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  
    function closePopup() {
      settermspopup(false)
    }
  if(Loading) {
    return <div className='h-screen flex items-center justify-center'>
      <video
        src="car.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-56"
      />
    </div>
  }
  else{
    return (
      <div className='relative'>
        {
        termspopup &&
        <div className='fixed inset-0 flex items-center justify-center z-50 '>
          <TermsPage closePopup={closePopup}/>
        </div>
        }
        <Navbar/>
        <Herosection/>
        <div className='mx-4 md:mx-5 lg:mx-38'>
        <BrowseCatagory/>
        <ActionCards/>
        <MostSearchedBikes/>
        <Chooseus/>
        <OurTeam/>
        </div>
        <Footer/>
      </div>
    )
  }
}
