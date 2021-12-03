import styled from "styled-components";


export const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:400px;
display:flex;
align-items:center;
justify-content:center;
background:whitesmoke;

&:hover{
    background:orange; 
}
`


export const Card = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
`

export const ImgContainer = styled.div`
z-index:2;
`


export const Info = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
z-index:2;
`

export const Title = styled.h1`
color:#7CFC00;
`
export const Price = styled.span`
color:#000;
font-size:15px;
`

export const Circular = styled.div`
width:150px;
height:150px;
border-radius:50%;
background:orange;
position: absolute;
`
export const Image = styled.img`
width:280px;
height:300px;
`

