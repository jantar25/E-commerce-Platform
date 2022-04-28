import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethode";
import { useLocation } from "react-router"
import { Link } from "react-router-dom";
import logoimage from '../Images/logo.png'


const PaySuccess = () => {
    const location = useLocation();
    
//in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
    const data = location.state.data;
    const cart = location.state.cart;
    const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);
    console.log(cart,data,currentUser);

    useEffect(() => {
    const createOrder = async () => {
        try {
        const res = await userRequest.post("/orders", {
            products: cart.products.map((item) => ({
            product: item,
            quantity: item._quantity,
            })),
            amount: cart.total,
            address: data.billing_details.address,
        });
        console.log(res)
        setOrderId(res.data._id);
        } catch {}
    };
    data && createOrder();
    }, [cart, data, currentUser]);

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-black">
            <div className="flex flex-col items-center justify-center">
                <div className='flex-1 flex items-center mb-4'>
                    <div className='mr-1 w-12'>
                        <img className='min-w-full' src={logoimage} alt="logo" />
                    </div>
                    <h1 className='flex text-3xl font-[800] font-Manrope text-transparent bg-clip-text 
                        bg-gradient-to-tr from-[#04AA6D] to-[#24FE41]'>KIVUGREEN</h1>
                 </div>
                <div className="border border-2 border-gray-500 rounded mb-4 py-4 px-8">
                    <h2 className="text-xl text-[#6a9113]">SUCCESSFULL</h2>
                </div>
                {orderId
                ?  <p className="text-center text-md text-gray-600">Your order number   
                <span className="text-[#04AA6D]">{orderId}</span>  is being Prepared.Thanks for choosing KivuGreen Shop</p>
                :   <p className="text-center text-md text-gray-600">Your order is being Prepared.Thanks for choosing KivuGreen Shop</p>}
                <Link to="/" style={{textDecoration:"none"}}>
                    <button className="text-[#04AA6D] mt-12">Go to Homepage</button>
                </Link>
            </div>
        </div>

        )
}

export default PaySuccess





