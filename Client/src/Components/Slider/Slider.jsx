import React from "react"
import people from '../../Images/people.png'
import farmer from '../../Images/farmer.png'



const Slider = () => {


    return (
        <div className='flex flex-col lg:flex-row px-5 py-10 sm:px-20' id='Home'>
            <div className='flex-1 flex justify-center items-start flex-col mb-24 lg:mr-32'>
                <h1 className='text-transparent py-2 bg-clip-text bg-gradient-to-r from-[#5aff15] via-[#00b712] to-[#63d471] font-Manrope
                text-3xl md:text-5xl font-black'>
                    Keep you body healthier with organic products</h1>
                <p className='font-Manrope text-md md:text-lg text-[#00b712] mt-3'>
                    Farming Techniques that involves the cultivation of plants and rearing of animals in natural ways</p>
                <p className='font-Manrope text-sm md:text-md text-[#5aff15] mt-12'>
                    Get timely updates from your favorite products by subscribing to our newsletter</p>
                <div className='flex w-full mt-2 mb-4'>
                    <input className='bg-[#232B2B] rounded-l font-Manrope text-md md:text-lg text-white px-4 flex-2 w-full 
                    min-h-[40px] md:min-h-[50px]' type='Email' placeholder='Your Email'/>
                    <button className='flex-[1_1_60%] bg-[#04AA6D] min-h-[40px] md:min-h-[50px] px-4 w-full rounded-r font-Manrope 
                    font-bold text-white text-md md:text-lg' type='button'>Subscribe</button>
                </div>
                <div className='flex flex-col md:flex-row w-full justify-start items-center mt-8'> 
                    <img className='w-[181px] h-[38px]' src={people} alt="people" />
                    <p className='font-Manrope text-sm text-center text-white md:ml-4'>
                        2,135 people got subscribed in last 24 hours.</p>
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <img className='w-full h-full' src={farmer} alt="ai" />
            </div>
        </div>
    )
}

export default Slider
