import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container =styled.div`
height:60vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background: green;
`
export const Title =styled.h1`
font-size:60px;
margin-bottom:20px;
`
export const Description =styled.div`
font-size:30px;
font-weight:300;
margin-bottom:20px;
${mobile({textAlign:"center"})}
`
export const InputContainer =styled.div`
width:50%;
heigth:40px;
display:flex;
justify-content:space-between;
border:1px solid #000;
${mobile({width:"80%"})}
`
export const Input =styled.input`
border:none;
flex:8;
paddin-left:20px;
`
export const Button =styled.button`
flex:1;
border:none;
background:teal;
color:#fff;
`