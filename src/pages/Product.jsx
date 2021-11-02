import styled from "styled-components"
import Cabbage from "../Images/cabbage.png"
import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import Footer from "../Components/Footer/Footer"
import Newsletter from "../Components/Newsletter/Newsletter"


const Container = styled.div`

`
const Wrapper = styled.div`
display:flex;
padding:50px;
`
const ImageConainter = styled.div`
flex:1;
`
const Image = styled.img`
width:100%;
height:80hv;
object-fit:cover;
`
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
`
const Title = styled.h1`
font-weight:400;
`
const Description = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-weigth:200;
font-size:40px;
`


const Product = () => {
    return (
        <Container>
           <Navbar />
           <Announcement />
           <Wrapper>
                <ImageConainter>
                    <Image src={Cabbage} />
                </ImageConainter>
                <InfoContainer>
                    <Title>Cabbage</Title>
                    <Description>We guarantees that at least 95% of the ingredients of agricultural origin come from organic farming.</Description>
                    <Price>Frw 200</Price>
                </InfoContainer>
           </Wrapper>
           <Newsletter />
           <Footer />
        </Container>
    )
}

export default Product