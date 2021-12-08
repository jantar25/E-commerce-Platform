import styled from "styled-components";
import { mobile } from "../../Responsive";
import news from "../../Images/champ.jpg"

export const Container =styled.div`
height:60vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)), url(${news})  no-repeat center;
`
export const Title =styled.h1`
font-size:60px;
margin-bottom:20px;
color:orange;
`
export const Description =styled.div`
font-size:30px;
font-weight:300;
margin-bottom:20px;
color:#cacebf;
${mobile({textAlign:"center"})}
`
export const InputContainer =styled.div`
width:50%;
heigth:40px;
display:flex;
justify-content:space-between;
border:1px solid orange;
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
background:orange;
color:#fff;
`