import React from 'react'

const FarmerOrder = ({order}) => {
  return (
    <div className='my-2 p-4 w-full flex justify-between items-center bg-[#232B2B] rounded' >
        <p className='mr-1'>{order._id}</p>
        <div className='text-white bg-black rounded-lg ml-1'>
            <p className='px-2 py-1'>{order.status}</p>
        </div>
    </div>
  )
}

export default FarmerOrder