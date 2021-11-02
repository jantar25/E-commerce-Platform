import styled from "styled-components";

export const Container = styled.div`
flex:1;
margin:5px;
height:70vh;
position:relative;
background: linear-gradient(to bottom,rgba(0,0,0, 0),rgba(0,0,0, 100));
`
export const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`
export const Info = styled.div`
position:absolute;
top:0;
let:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
export const Title = styled.h1`
color:#6a9113;
margin-bottom:20px;

`
export const Button = styled.button`
border:none;
padding:10px;
background:orange;
color:green;
font-weight:600;
cursor:pointer;
`