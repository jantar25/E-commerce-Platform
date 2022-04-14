import React from 'react'
import FarmerProduct from './Farmerproduct/FarmerProduct'
import {useSelector} from 'react-redux';

const FarmerProducts = () => {
    const products = useSelector(state => state.product.products);
    const farmer=useSelector((state)=>state.farmer.currentFarmer);

    const farmerProduct = products.filter(
        (product) => product.farmer[0]?._id === farmer._id
      );

  return (
    <div className='flex flex-col justify-center items-center p-4'>
        <div className='flex justify-around items-center flex-wrap'>
            {farmerProduct.map((product)=>(
            <div key={product._id}>
                <FarmerProduct product={product} />
            </div> ))}
        </div>
    </div>
  )
}

export default FarmerProducts