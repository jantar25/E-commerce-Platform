import React,{ useState,useEffect } from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Announcement from "../../Components/Navbar/Announcement"
import Footer from "../../Components/Footer/Footer"
import { useLocation } from "react-router"
import { farmerRequest } from '../../requestMethode'
import OrderedProduct from './OrderedProduct/OrderedProduct'


const Order = () => {
    const [order,setOrder] = useState()
    const location=useLocation();
    const orderId = location.pathname.split("/")[2]; 
    const orderData = order?order[0]: null;
    const date= new Date(orderData?.createdAt)
    const orderDate = date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();
    const orderedProducts = orderData?.products
    console.log(orderedProducts)

    useEffect(() => {
        const getOrder = async ()=>{
  
            try {
              const res = await farmerRequest.get(`/orders/find/${orderId}`);
              setOrder(res.data);
            } catch (error) {
              console.log(error)
            }
           
          }
          getOrder();
    },[])

   
  return (
      <>
      {orderData &&
            <div className='bg-black'>
            <Navbar />
            <Announcement />
            <div className='px-2 md:px-8 py-8 min-h-[50vh]'>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='flex items-center m-2'>
                        <span className='hidden sm:flex mr-1 text-gray-500'>OrderID:</span>
                        <p className='text-lg text-green-500'>{orderData._id}</p>
                    </div>
                    <div className='flex items-center m-2'>
                        <span className='mr-1 text-gray-500'>Status:</span>
                        <p className='px-4 py-2 rounded-lg bg-pink-300'>{orderData.status}</p>
                    </div>
                    <div className='flex items-center m-2'>
                        <span className='mr-1 text-gray-500'>Ordered On:</span>
                        <p className='px-4 py-2 rounded-lg bg-[#232B2B] text-white '>{orderDate}</p>
                    </div>
                </div>  
                <div className='text-white m-2'>
                    <h3 className='my-4 text-gray-300 text-lg'>Products Ordered</h3>
                    <div className=' bg-[#232B2B]'>
                        {orderedProducts &&(
                            <div className='flex justify-around items-center flex-wrap m-2 p-2'>
                                {orderedProducts.map((orderedProduct)=>(
                                <div key={orderedProduct._id}>
                                    <OrderedProduct orderedProduct={orderedProduct} />
                                </div> ))}
                            </div>
                        )}       
                    </div>
                </div>             
            </div>
            <Footer />
        </div>
      }
      </>
  )
}

export default Order