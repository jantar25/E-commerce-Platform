import {useSelector} from 'react-redux';
import styled from "styled-components"
import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import Footer from "../Components/Footer/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../Responsive"
import Brocoli from "../Images/brocoli.png"
import { useState,useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import {userRequest} from '../requestMethode'
import {useHistory} from "react-router"
import { decreaseProductQuantity, deleteProduct,IncreamentProductQuantity } from '../Redux/cartRedux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`

`
const Wrapper = styled.div`
padding:20px;
${mobile({padding:"10px"})}
`
const Title = styled.h1`
text-align:center;
font-weight:400;

`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border: ${props=>props.type==="filled" ? "none" : "2px solid orange"};
background: ${props=>props.type==="filled" ? "teal" : "transparent"};
color: ${props=>props.type==="filled" && "white"};
`
const TopTexts = styled.div`
display:flex;
${mobile({display:"none"})}
`
const TopText = styled.div`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`
const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}
`
const Info = styled.div`
flex:3;
`
const Product = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}
`
const ProductDetail = styled.div`
flex:6;
display:flex;
`
const Image = styled.img`
width:200px;
height:25vh;
${mobile({width:"150px"})}
`
const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
${mobile({display:"none"})}
`
const ProductTurnary = styled.div`
width:20px;
height:20px;
border-radius:50%;
background: ${props=>props.color}
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
flex:3;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const RemoveProduct = styled.div`
flex:1;
display:flex;
padding:30px;
`

const Clear = styled.span`
color:red;
cursor:pointer;
font-weight:700;
`

const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
const ProductAmount = styled.div`
width:30px;
height:30px;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
font-size:24px;
margin:5px;
border:2px solid orange;
${mobile({margin:"5px 20px"})}
`
const ProductPrice = styled.div`
font-size:35px;
font-weight:800;
${mobile({marginBottom:"20px"})}
`
const Hr = styled.hr`
background:#eee;
border:none;
height:2px;
`
const Summary = styled.div`
flex:1;
border: 1px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`
const SummayTitle = styled.h1`
font-weight:200;
color:teal;
`
const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content: space-between;
font-weight: ${props=>props.type==="total" && "600"};
font-size: ${props=>props.type==="total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
width:100%;
padding:10px;
background:teal;
font-weight:600;
color:white;
border:none;
border-radius:5px;
`

const KEY="pk_test_51JvPoqKBZkT4LPtBKI5yrAmM7dYnethOIG6riguwYBfTc4yQ9DHQipmpeR4JIownTniFF0hoOuResqlkqWwLQ4qB00vvd4Q7X3"

const Cart = () => {

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
    },[stripeToken,cart.total,history])

    const RemoveCartItem = (product) =>{
        dispatch(deleteProduct(product))
    }

    const decrementQuantity = (product) =>{
        dispatch(decreaseProductQuantity(product))
    }

    const incrementQuantity = (product) =>{
        dispatch(IncreamentProductQuantity(product))
    }

    return (
        <Container>
           <Navbar />
           <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <Link to="/productItems/all" style={{textDecoration:"none"}} > 
                        <TopButton>CONTINUE SHOPPING</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>Your Bag(2)</TopText>
                        <TopText>Your Tea(0)</TopText>
                    </TopTexts>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product=>(
                            <div key={product._id}>
                            <Product >
                            <ProductDetail>
                                <Image src={product.img} />
                                <Details>
                                    <ProductName><b>Product:</b>{product.title}</ProductName>
                                    <ProductId><b>ID:</b>{product._id}</ProductId>
                                    <ProductTurnary color= {product.content} />
                                    <ProductSize><b>Size:</b>{product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove onClick={()=> decrementQuantity(product)} />
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Add onClick={()=> incrementQuantity(product)} />   
                                </ProductAmountContainer>
                                <ProductPrice>Rwf {product.price * product.quantity}</ProductPrice>
                            </PriceDetail>
                            <RemoveProduct><Clear onClick={()=>RemoveCartItem(product)}>REMOVE</Clear> </RemoveProduct>
                        </Product>
                        <Hr />
                        </div>
                        ))}
                        
                    </Info>
                    <Summary>
                        <SummayTitle>ORDER SUMMARY</SummayTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Rwf {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shiping</SummaryItemText>
                            <SummaryItemPrice>Rwf 300</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>Rwf -300</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>Rwf {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        {stripeToken? (
                        <span>Processing.Please wait...</span>
                        ) : (
                            <StripeCheckout 
                                name="KivuGreen Shop"
                                image={Brocoli}
                                billingAddress
                                shippingAddress
                                description={`Your tottal is ${cart.total}`}
                                amount={cart.total}
                                token={onToken}
                                stripeKey={KEY}
                            >
                                <Button>CHECKOUT NOW</Button>
                        </StripeCheckout> 
                         )}
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart