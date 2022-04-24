import {useSelector} from 'react-redux';
import styled from "styled-components"
import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import Footer from "../Components/Footer/Footer"
import { Add, Remove } from "@material-ui/icons"
import logo from "../Images/logo.png"
import { useState,useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import {userRequest} from '../requestMethode'
import {useHistory} from "react-router"
import { decreaseProductQuantity, deleteProduct,IncreamentProductQuantity } from '../Redux/cartRedux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';





const ProductTurnary = styled.div`
width:20px;
height:20px;
border-radius:50%;
background: ${props=>props.color}
`

const KEY="pk_test_51JvPoqKBZkT4LPtBKI5yrAmM7dYnethOIG6riguwYBfTc4yQ9DHQipmpeR4JIownTniFF0hoOuResqlkqWwLQ4qB00vvd4Q7X3"

const Cart = () => {
    const [img,setImg] = useState('')
    const cart = useSelector(state=>state.cart)
    const [stripeToken,setStripeToken]= useState(null);
    const history = useHistory();
    const dispatch = useDispatch();
    const onToken=(token)=>{
        setStripeToken(token);
    }

    useEffect(()=>{
        const makeRequest= async ()=>{
            try {
                const res = await userRequest.post("/checkout/payment",
                {tokenId:stripeToken.id,amount:cart.total});
                history.push("/paySuccess",{data:res.data,cart});
            } catch(err){
                console.log(err)
            }
        };
        stripeToken && cart.total>=1 && makeRequest();  
    },[stripeToken,cart.total,history,cart])

    const RemoveCartItem = (product) =>{
        dispatch(deleteProduct(product))
    }

    const decrementQuantity = (product) =>{
        dispatch(decreaseProductQuantity(product))
    }

    const incrementQuantity = (product) =>{
        dispatch(IncreamentProductQuantity(product))
    }

    const HandleSubmit = () =>{

    }

    return (
        <div className='bg-black'>
           <Navbar />
           <Announcement />
            <div className='p-4 text-gray-500'>
                <h1 className='text-center text-2xl text-[#04AA6D]'>YOUR BAG</h1>
                <div className='text-center p-8'>
                    <Link to="/products/All" style={{textDecoration:"none"}} > 
                        <button className='text-white p-2 font-[600] border border-2 border-[#04AA6D]'>
                            CONTINUE SHOPPING</button >
                    </Link>
                </div>
                <div className='flex justify-between flex-col lg:flex-row'>
                    <div className='flex-auto'>
                        {cart.products.map(product=>(
                        <div  key={product._id}>
                            <div className=' flex justify-between flex-col md:flex-row' >
                                <div className='flex-6 flex justify-between items-center flex-col sm:flex-row'>
                                    <img className='w-[200px] h-[30vh]' src={product.img} />
                                    <div className='flex flex-col p-4'>
                                        <div className='flex items-center'><b>Product:</b>
                                        <p className='text-[#04AA6D] ml-2 text-lg'>{product.title}</p></div>
                                        <ProductTurnary color= {product.content} />
                                        <span><b>Size:</b>{product.size}</span>
                                    </div>
                                </div>
                                <div className='flex-3 flex flex-col justify-center items-center'>
                                    <div className='flex items-center mb-[20px]'>
                                        <Remove onClick={()=> decrementQuantity(product)} />
                                        <span className='w-[30px] h-[30px] flex justify-center items-center 
                                        border rounded m-2 border-[#04AA6D] text-xl'>{product.quantity}</span>
                                        <Add onClick={()=> incrementQuantity(product)} />   
                                    </div>
                                    <span className='text-[30px] font-[800]'>
                                        Rwf {product.price * product.quantity}</span>
                                </div>
                                <div className='flex-3 flex justify-center items-center p-8'>
                                    <span className='font-[700] text-red-700 cursor-pointer' 
                                    onClick={()=>RemoveCartItem(product)}>REMOVE</span>
                                </div>
                            </div>
                        <hr className='' />
                        </div>
                        ))}
                        
                    </div>
                    <div className='mt-4'>
                    <h1 className='text-white text-3xl lg:text-xl text-center'>Choose your payment modal</h1>
                    <div className='flex flex-col md:flex-row lg:flex-col justify-between items-center mt-2'>
                        <div className='w-full flex-1 h-max border border-[#04AA6D] p-4 rounded m-4'>
                            <p className='text-md text-white'>Order here with</p>
                            <h1 className='text-2xl text-[#04AA6D] font-[400]'>CREDIT CARD</h1>
                            <div className='flex justify-between my-8'>
                                <h3>Subtotal:</h3>
                                <p>Rwf {cart.total}</p>
                            </div>
                            <div className='flex justify-between my-8'>
                                <h3>Shiping fees:</h3>
                                <p>Rwf 2000</p>
                            </div>
                            <div className='flex justify-between my-8'>
                                <h3>Discount:</h3>
                                <p>Rwf -2000</p>
                            </div>
                            <div className='flex items-center justify-between my-8'>
                                <h3>Currency:</h3>
                                <p>1$ = 1000 rwf</p>
                            </div>
                            <div className='flex items-center justify-between my-8'>
                                <h3>Adding curency:</h3>
                                <p>Rwf {cart.total}/1000</p>
                            </div>
                            <div className='flex text-[#04AA6D] items-center justify-between my-8'>
                                <h3 className='text-[24px] font-[600] mr-2'>Pay Total</h3>
                                <p className='text-[24px] font-[600]'>$ {cart.total/1000}</p>
                            </div>
                            {stripeToken? (
                            <span>Processing.Please wait...</span>
                            ) : (
                                <StripeCheckout 
                                    name="KivuGreen Shop"
                                    image={logo}
                                    billingAddress
                                    shippingAddress
                                    description={`Your total to be paid is ${cart.total/1000} $`}
                                    amount={cart.total/10}
                                    token={onToken}
                                    stripeKey={KEY}
                                >
                                    <button className='w-full text-[#000] bg-[#04AA6D] p-2 rounded-lg font-[700]'
                                    >CHECKOUT NOW</button>
                            </StripeCheckout> 
                            )}
                        </div>
                        <div className='w-full flex-1 h-max border border-orange-500 p-4 rounded m-4'>
                            <p className='text-md text-white'>Order here with</p>
                            <h1 className='text-2xl text-orange-500 font-[400]'>MOBILE MONEY</h1>
                            <div className='flex justify-between my-8'>
                                <h3>Subtotal:</h3>
                                <p>Rwf {cart.total}</p>
                            </div>
                            <div className='flex justify-between my-8'>
                                <h3>Shiping fees:</h3>
                                <p>Rwf 2000</p>
                            </div>
                            <div className='flex justify-between my-8'>
                                <h3>Discount:</h3>
                                <p>Rwf -2000</p>
                            </div>
                            <div className='flex items-center justify-between my-8'>
                                <h3>Pay on this Number:</h3>
                                <p>0786120934</p>
                            </div>
                            <div className='flex items-center justify-between my-8'>
                                <h3>Attach Payment Proof:</h3>
                                <div>
                                    <input type="file" accept='Image/*' style={{display:'none'}} id="file" onChange={(e)=>setImg(e.target.files[0])} />
                                    <label htmlFor="file"><p className='font-[300] text-orange-400 cursor-pointer'>Choose File</p></label>
                                </div>
                            </div>
                            <div className='flex text-orange-400 items-center justify-between my-8'>
                                <h3 className='text-[24px] font-[600] mr-2'>Pay Total</h3>
                                <p className='text-[24px] font-[600]'>Rwf {cart.total}</p>
                            </div>
                            <button className='w-full text-[#000] bg-orange-400 p-2 rounded-lg font-[700]' onClick={HandleSubmit}>
                                ORDER NOW</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart