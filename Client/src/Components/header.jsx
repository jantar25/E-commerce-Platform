import React from 'react'
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider'
import Announcement from './Navbar/Announcement'


const header = () => {
    return (
        <div>
            
            <div className='bg-gradient-to-r from-[#000000] to-[#434343]'>
                <Navbar />
                <Announcement />
                <Slider />
            </div>
        </div>
    )
}

export default header
