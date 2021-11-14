import styled from "styled-components"
import StripeCheckout from 'react-stripe-checkout'
import axios from "axios"
import {useState,useEffect} from "react"
import {useHistory} from "react-router"
import Brocoli from "../Images/brocoli.png"

const Container = styled.div`
height:100vh;
display:flex;
justify-content:center;
align-items:center;

`
const Button = styled.button`
padding: 20px 40px;
font-size:30px;
background:black;
color:white;
border:none;
border-radius:10px;

`

const KEY="pk_test_51JvPoqKBZkT4LPtBKI5yrAmM7dYnethOIG6riguwYBfTc4yQ9DHQipmpeR4JIownTniFF0hoOuResqlkqWwLQ4qB00vvd4Q7X3"

const Pay = () => {

    const [stripeToken,setStripeToken]= useState(null);
    const history = useHistory();
    const onToken=(token)=>{
        // console.log(token);
        setStripeToken(token);
    }

    useEffect(()=>{
        const makeRequest= async ()=>{
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment",
                {tokenId:stripeToken.id,amount:2000})

                console.log(res.data)
                history.push("/paySuccess");
            } catch(err){
                console.log(err)
            }
        };
        stripeToken && makeRequest();  
    },[stripeToken,history])


    return (

        <Container>
            {stripeToken? (
            <span>Processing.Please wait...</span>
            ) : (
                <StripeCheckout 
                    name="KivuGreen Shop"
                    image={Brocoli}
                    billingAddress
                    shippingAddress
                    description="your tottal is 20$"
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <Button>Pay Now</Button>
                </StripeCheckout>  
                        )}       
        </Container>

        )
}

export default Pay