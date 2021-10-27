import styled from "styled-components";

export const Container = styled.div`
height:30px;
background: #6a9113;
color:#fff;
display: flex;
align-items:center;
justify-content:center;
font-size:20px;
font-weight:800;
`

const Announcement = () => {
    return (
        <Container>
            Free shipping for order beyong 100K Frw.
        </Container>
    )
}

export default Announcement
