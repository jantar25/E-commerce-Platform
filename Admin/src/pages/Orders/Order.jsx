import React,{ useState,useEffect } from 'react'
import { useLocation } from "react-router"
import { userRequest } from '../../requestMethode'
import OrderedProduct from './OrderedProduct/OrderedProduct'
import { Page,Container,Header,Intro,ProductsContainer,Products,Customer } from './Style'


const Order = () => {
    const [order,setOrder] = useState()
    const location=useLocation();
    const orderId = location.pathname.split("/")[2]; 
    const orderData = order?order[0]: null;
    const date= new Date(orderData?.createdAt)
    const orderDate = date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();
    const orderedProducts = orderData?.products
    const deliveryAddress = orderData?.address

    useEffect(() => {
        const getOrder = async ()=>{
  
            try {
              const res = await userRequest.get(`/orders/find/${orderId}`);
              setOrder(res.data);
            } catch (error) {
              console.log(error)
            }
           
          }
          getOrder();
    },[])

   
  return (
      <Page>
      {orderData &&
            <div>
            <Container>
                <div>
                    <Header>
                        <span className='hidden sm:flex mr-1 text-gray-500'>OrderID:</span>
                        <Intro className='text-lg text-green-500'>{orderData._id}</Intro>
                    </Header>
                    <Header>
                        <span className='mr-1 text-gray-500'>Status:</span>
                        <Intro className='px-4 py-2 rounded-lg bg-pink-300'>{orderData.status}</Intro>
                    </Header>
                    <Header>
                        <span className='mr-1 text-gray-500'>Ordered On:</span>
                        <Intro className='px-4 py-2 rounded-lg bg-[#232B2B] text-white '>{orderDate}</Intro>
                    </Header>
                </div>  
                <ProductsContainer>
                    <h3>Products Ordered</h3>
                    <div>
                        {orderedProducts &&(
                            <Products>
                                {orderedProducts.map((orderedProduct)=>(
                                <div key={orderedProduct._id}>
                                    <OrderedProduct orderedProduct={orderedProduct} />
                                </div> ))}
                            </Products>
                        )}       
                    </div>
                </ProductsContainer>
                <div>
                    <h3>Delivery Address</h3>
                    <Customer>
                        <Header>
                            <span className='text-gray-400'>Name:</span>
                            <Intro>{deliveryAddress.name}</Intro>
                        </Header>
                        <Header>
                            <span className='text-gray-400'>Phone:</span>
                            <Intro>{deliveryAddress.phone}</Intro>
                        </Header>
                        <Header>
                            <span className='text-gray-400'>Email:</span>
                            <Intro>{deliveryAddress.email}</Intro>
                        </Header>
                        <Header>
                            <span className='text-gray-400'>Country:</span>
                            <Intro>{deliveryAddress.address.country}</Intro>
                        </Header>
                        <Header>
                            <span className='text-gray-400'>City:</span>
                            <Intro>{deliveryAddress.address.city}</Intro>
                        </Header>
                    </Customer>
                </div>             
            </Container>
        </div>
      }
      </Page>
  )
}

export default Order