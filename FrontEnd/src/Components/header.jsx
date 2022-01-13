import React from 'react'
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider'
import Announcement from './Navbar/Announcement'


const header = () => {
    return (
        <div>
            <Announcement />
            <div className='bg-gradient-to-r from-[#434343] to-[#000000]'>
                <Navbar />
                <Slider />
            </div>
        </div>
    )
}

export default header
