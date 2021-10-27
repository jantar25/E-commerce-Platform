import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
`

export const Arrow = styled.div`
width:50px;
height:50px;
background-color:green;
border-radius:50%;
display: flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
left: ${ props=>props.direction==="left" && "10px"};
right: ${ props=>props.direction==="right" && "10px"};
opacity:0.5;
cursor:pointer;
z-index:2;
`

export const Wrapper = styled.div`
height:100%;
display:flex;
transition: all 2s ease;
transform:translateX(${props=>props.slideIndex * -100}vw);

`
export const Slide = styled.div`
height:100vh;
width:100vw;
display:flex;
align-items:center;
background-color: ${ props=>props.bg};
`
export const ImgContainer = styled.div`
flex:1;
height:100%;
`
export const InfoContainer = styled.div`
flex:1;
padding:50px;
`

export const Image = styled.img`
height:80%;
`
export const Title = styled.h1`
font-size:70px;
`
export const Description = styled.p`
margin:50px 0;
font-size:20px;
font-weigth:500;
letter-spacing:2px;
`
export const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor-pinter;
`