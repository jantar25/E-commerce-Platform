import React from 'react'
import FarmerProduct from './Farmerproduct/FarmerProduct'
import {useSelector} from 'react-redux';

const FarmerProducts = () => {
    const products = useSelector(state => state.product.products);
    const farmer=useSelector((state)=>state.farmer.currentFarmer);
    const farmerId = farmer?._id
    const farmerProduct = products?.filter(
        (product) => 
        product?.farmer[0]?._id === farmerId
      );

  return (
    <div className='flex flex-col justify-center items-center p-4'>
        {farmerProduct.length>0? 
        (<div className='flex justify-around items-center flex-wrap'>
            {farmerProduct.map((product)=>(
            <div key={product._id}>
                <FarmerProduct product={product} />
            </div> ))}
        </div>) : 
        (<div>
            <p> You don't have any Product yet</p>
        </div>)}
    </div>
  )
}

export default FarmerProducts