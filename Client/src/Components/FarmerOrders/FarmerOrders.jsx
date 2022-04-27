import React,{useState,useEffect} from 'react'
import FarmerOrder from './FarmerOrder/FarmerOrder'
import { farmerRequest } from '../../requestMethode'



const FarmerOrders = () => {
    const [orders,setOrders] = useState([])

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


  return (
    <div className='flex flex-col justify-center items-center p-4'>
    {orders.length>0? 
    (<div className='flex justify-around items-center flex-wrap'>
        {orders.map((order)=>(
        <div key={order._id}>
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