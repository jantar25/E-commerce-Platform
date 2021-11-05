import styled from "styled-components"
import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import Footer from "../Components/Footer/Footer"
import Cabbage from "../Images/cabbage.png"
import Anana from "../Images/ananas.png"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../Responsive"

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
border: ${props=>props.type==="filled" ? "none" : "2px solid teal"};
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
flex:2;
display:flex;
`
const Image = styled.img`
width:200px;
height:25vh;
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
flex:1;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
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


const Cart = () => {
    return (
        <Container>
           <Navbar />
           <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Your Bag(2)</TopText>
                        <TopText>Your Tea(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={Cabbage} />
                                <Details>
                                    <ProductName><b>Product:</b> CABBAGE</ProductName>
                                    <ProductId><b>ID:</b> 26465637</ProductId>
                                    <ProductTurnary color="green" />
                                    <ProductSize><b>Size:</b> MEDIUM</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>5</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>Frw 1000</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src={Anana} />
                                <Details>
                                    <ProductName><b>Product:</b> PINEAPLE</ProductName>
                                    <ProductId><b>ID:</b> 26465640</ProductId>
                                    <ProductTurnary color="green" />
                                    <ProductSize><b>Size:</b> BIG</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>Frw 2000</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummayTitle>ORDER SUMMARY</SummayTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Frw 3000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shiping</SummaryItemText>
                            <SummaryItemPrice>Frw 5000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>Frw -300</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>Frw 3000</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart