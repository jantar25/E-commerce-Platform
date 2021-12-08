import styled from "styled-components";
import { mobile } from "../../../Responsive";

export const Container = styled.div`
flex:1;
margin:10px 0px;
height:40vh;
width:45vw;
position:relative;
&::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 40vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  ${mobile({width:"100%"})}
`
export const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height:"40vh"})}
`
export const Info = styled.div`
position:absolute;
bottom:10px;
left:10px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
export const Title = styled.h1`
color:#6a9113;
margin-bottom:20px;
z-index: 3;
`
