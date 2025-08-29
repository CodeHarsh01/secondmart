import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import BrowseCatagory from './components/BrowseCatagory'
import ActionCards from './components/ActionCards'
import MostSearchedBikes from './components/MostSearchBikes'
import OurTeam from './components/OurTeam'
import Footer from './components/Footer'
import Chooseus from './components/Chooseus'

export default function page() {
  return (
    <div>
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
