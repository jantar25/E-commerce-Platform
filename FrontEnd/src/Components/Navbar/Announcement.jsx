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
export const Container = styled.div`
height:30px;
color:#CCF07F;
display: flex;
align-items:center;
justify-content:center;
font-size:20px;
font-weight:400;
animation:${animation} 2s infinite;
${mobile({fontSize:"15px"})}
`

const Announcement = () => {
    return (
        <Container>
            Free shipping in 3 Months Period for all orders.
        </Container>
    )
}

export default Announcement
