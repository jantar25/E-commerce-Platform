import styled from "styled-components";
import {mobile} from "../../Responsive"

export const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
${mobile({display:"none"})}
`

export const Arrow = styled.div`
width:50px;
height:50px;
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
height:90vh;
width:100vw;
display:flex;
align-items:center;
`
export const ImgContainer = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
height:100%;
position:relative;
`
export const InfoContainer = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:50px;
`

export const Image = styled.img`
height:80%;
width:80%;
z-index:2;
position:absolute;
top:0;
`
export const Title = styled.span`
font-size:60px;
font-weight:700;
background-color: #577516;
background-image: linear-gradient(to right, #29301a 0%, #c7e674 100%);
background-size: 100%;
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;
`

export const Intro = styled.span`
font-size:30px;
font-weight:500;
background-color: #737966;
background-image: linear-gradient(to top, #243109 0%, #2f3d08 100%);
background-size: 100%;
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;
`

export const Description = styled.p`
margin:30px 0 50px;
font-size:20px;
font-weigth:500;
letter-spacing:2px;
`
export const Button = styled.a`
display:flex;
align-items:center;
justify-content:center;
padding:10px 20px;
font-size:20px;
background:#577516;
text-decoration:none;
color:white;
border-radius:10px;
width:30%;
`