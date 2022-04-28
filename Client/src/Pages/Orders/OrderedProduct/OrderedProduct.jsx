import React from 'react'
import { ProductTurnary } from './style';
import avatar from '../../../Images/avatar.png'

const OrderedProduct = (orderedProduct) => {

  const product=orderedProduct.orderedProduct.product[0];
  const productOwner=product.farmer[0]

  return (
    <div className=' flex-1 flex flex-col bg-black m-1 max-w-[280px] rounded'>              
    <div className=" flex flex-col w-full h-[400px]">
        <div className="flex-1 w-full h-1/3 justify-center items-center">
            <img className="w-full h-full object-cover" src={product.img} alt='itemImg' />
        </div>
        <div className="flex-1 flex flex-col justify-center ml-2 p-2 ">
                <h1 className="text-lg text-orange-500 mb-2 font-[500]">{product.title}</h1>
                <p className="text-[11px] mb-2 text-neutral-400">{product.description.split(' ').splice(0, 15).join(' ')}...</p>
                <p className="font-[900] text-[#04AA6D]">Rwf {product.price}</p>
                <div className=" flex flex-row justify-between text-neutral-600 text-sm">
                    <div className=" flex items-center my-2">
                        <h3 className="font-[600] mr-1">Content:</h3>
                        <ProductTurnary color={product.content} />    
                    </div>
                    <div className="flex items-center">
                        <h3 className="font-[600] mr-1">Size:</h3>
                        <p className="bg-slate-300 rounded" >
                        {product.size}
                        </p>
                    </div>
                 </div>
                <div className='flex my-2 justify-center items-center bg-[#04AA6D] px-2 rounded'>
                  <span>Quantity:</span> 
                  <p className='ml-1 font-[600] text-black'>{product.quantity}</p>
                </div>
                <div className='flex mb-1 p-1 justify-between items-center rounded bg-gray-700'>
                  <div className='flex items-center w-[20px] h-[20px]'> 
                    <img src={avatar || productOwner.img} alt='owner image' className='w-full h-full rounded-full' />
                  </div>
                  <div className='flex text-[10px] flex-col'>
                    <p className='font-[600] text-white'>{productOwner.company}</p>
                    <p className='text-white'>{productOwner.title}</p>
                  </div>
                  <div className='flex text-[10px] flex-col'>
                    <p className='text-white'>{productOwner.username}</p>
                    <p className='font-[600] text-white'>{productOwner.telephone}</p>
                  </div>
                </div>
        </div>
    </div>
</div>
  )
}

export default OrderedProduct