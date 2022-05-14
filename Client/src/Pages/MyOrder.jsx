import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import Footer from "../Components/Footer/Footer"

const MyOrder = () => {
  return (
    <div className='bg-black'>
        <Navbar />
        <Announcement />
        <div className='h-[50vh]'>

        </div>
        <Footer />
    </div>
  )
}

export default MyOrder