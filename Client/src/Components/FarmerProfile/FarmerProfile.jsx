import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../../Images/avatar.png'

const FarmerProfile = ({farmer}) => {
  return (
    <div>
         <div className='py-8 px-5 sm:px-20'>
            <div className='flex flex-col p-8 bg-gradient-to-tr from-[#04AA6D] to-[#24FE41]'>
             <div>
                <h1 className='text-2xl font-[700]'>Welcom !</h1>
             </div>
             <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                 <div className='flex-1 flex flex-col items-center justity-center'>
                     <h1 className='text-xl md:text-3xl font-[600] mt-4'>{farmer.username}</h1>
                     <div className='flex mb-8'>
                        <p className='text-sm md:text-md'>{farmer.title} at</p>
                        <h4 className='text-sm md:text-md ml-2 font-[600]'>{farmer.company}</h4>
                     </div>
                     <p className='text-[12px] md:text-sm text-center mb-4 font-[600]'>{farmer.description}</p>
                    <Link to={`profile/${farmer.username}`}>
                        <span className='text-white cursor-pointer'>View your profile</span>
                    </Link>
                 </div>
                 <div className='flex-1 flex items-center justify-center mt-4 md:mt-0'>
                     <div className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] my-4 md:ml-4'>
                        <img src={farmer.img || avatar} alt='profileImg' className='w-full h-full rounded-full object-cover ring-2 ring-black' />
                     </div>
                 </div>
             </div>
         </div>
        </div>
    </div>
  )
}

export default FarmerProfile