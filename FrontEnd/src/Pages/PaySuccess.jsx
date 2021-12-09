import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethode";
import { useLocation } from "react-router"
import styled from "styled-components"
import { Link } from "react-router-dom";
import { mobile } from "../Responsive"

const Container = styled.div`
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`
const Wrap = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-bottom:20px;
`
const Logo = styled.h1`
font-size:70px;
background-color: #6a9113;
background-image: linear-gradient(to top, #6a9113 0%, #cacebf 100%);
background-size: 100%;
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;
margin-bottom:40px;
text-align:center;
${mobile({fontSize:"40px"})}
`
const TitleContainer = styled.div`
border: 2px solid gray;
width:50%;
height:60px;
display:flex;
justify-content:center;
align-items:center;
background:black;
margin-bottom:20px;
border-radius:10px;
`
const Title = styled.div`
font-size:40px;
color:#6a9113;
${mobile({fontSize:"20px"})}
`

const Desc = styled.span`
font-size:30px;
color:#cacebf;
text-align:center;
${mobile({fontSize:"15px"})}
`

const Span = styled.span`
font-weight:600;
color:black;
`
const Button = styled.button`
padding:10px;
margin-top:20px;
background:white;
border: 2px solid black;
font-size:20px;
color:#6a9113;
&:hover{
    background:gray; 
}
`

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
            userId: currentUser._id,
            products: cart.products.map((item) => ({
            productId: item._id,
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
        <Container>
            <Wrap>
                <Logo>KIVUGREEN</Logo>
                <TitleContainer><Title>SUCCESSFULL</Title></TitleContainer>
                {orderId
                ?  <Desc>Your order number <Span>{orderId}</Span> is being Prepared.Thanks for choosing KivuGreen Shop</Desc>
                :   <Desc>Your order is being Prepared.Thanks for choosing KivuGreen Shop</Desc>}
                <Link to="/" style={{textDecoration:"none"}}>
                    <Button>Go to Homepage</Button>
                </Link>
                
            </Wrap>
        </Container>

        )
}

export default PaySuccess





