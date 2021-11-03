import styled from "styled-components"
import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import Footer from "../Components/Footer/Footer"

const Container = styled.div`

`
const Wrapper = styled.div`
padding:20px;
`
const Title = styled.h1`
text-align:center;
font-weight:400;

`
const Top = styled.div`

`
const Bottom = styled.div`

`

const Cart = () => {
    return (
        <Container>
           <Navbar />
           <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top></Top>
                <Bottom></Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart