import { useLocation } from "react-router"
import styled from "styled-components"

const Container = styled.div`
display:flex;
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
`

const Desc = styled.span`
font-size:30px;
color:#cacebf;
text-align:center;
`

const PaySuccess = () => {
    const location = useLocation();
    console.log(location);

    return (
        <Container>
            <Wrap>
                <Logo>KIVUGREEN</Logo>
                <TitleContainer><Title>SUCCESSFULL</Title></TitleContainer>
                <Desc>Your Order is being Prepared.Thanks for choosing KivuGreen Shop</Desc>
            </Wrap>
        </Container>

        )
}

export default PaySuccess