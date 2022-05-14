import React,{useState,useEffect} from 'react'
import FarmerOrder from './FarmerOrder/FarmerOrder'
import { farmerRequest } from '../../requestMethode'
import { useSelector } from 'react-redux';



const FarmerOrders = () => {
    const [orders,setOrders] = useState([])
    const farmer=useSelector((state)=>state.farmer.currentFarmer);
    const farmerId = farmer?._id

    useEffect(() => {
        const getOrders = async ()=>{
            try {
              const res = await farmerRequest.get("/orders");
              setOrders(res.data);
            } catch (error) {
              console.log(error)
            }
           
          }
          getOrders();
    },[])

    const newOrders = orders?.sort(function(a, b) {
      return new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime();
    });

    
    const FarmerOrders = newOrders.filter(
    (order) => (order?.products.filter(
          (product) => product.product[0].farmer[0]._id === farmerId
        ).length) > 0
    );
    

  return (
    <div className='flex flex-col justify-center items-center p-4'>
    {FarmerOrders.length>0? 
    (<div className='flex justify-around items-center flex-wrap'>
        {FarmerOrders.map((order)=>(
        <div key={order._id} className='m-1'>
            <FarmerOrder order={order} />
        </div> ))}
    </div>) : 
    (<div>
        <p> There is no order yet</p>
    </div>)}
</div>
  )
}

export default FarmerOrders