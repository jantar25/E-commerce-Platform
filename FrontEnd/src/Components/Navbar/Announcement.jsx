import styled, { keyframes } from "styled-components";
import {mobile} from "../../Responsive"


const animation = keyframes`
0%,100%{
    opacity:1;
}
50%{
    opacity:0;
}
`
const Container = styled.div`
height:30px;
color:#CCF07F;
display: flex;
align-items:center;
justify-content:center;
font-size:20px;
font-weight:200;
background:#577516;

${mobile({fontSize:"15px"})}
`
const Par = styled.div`
animation:${animation} 2s infinite;
`

const Announcement = () => {
    return (
        <Container>
            <Par>Free shipping in 3 Months Period for all orders</Par>.
        </Container>
    )
}

export default Announcement
