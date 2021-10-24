import styled from "styled-components";

export const Container = styled.div`
height:60px;
background: #000;
color:#fff;
`

export const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`
export const Left = styled.div`
flex:1;

`
export const Center = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
`
export const Rigth = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`
export const Language = styled.span`

`
export const SearchContainer = styled.div`
display:flex;
align-items:center;
border: 1px solid red;
margin-left:25px;
padding:3px;
`

export const Input = styled.input`
border: none;
outlined: none;
`
export const Logo = styled.h1`
font-weight:bolder;
font-size:2rem;
`

export const MenuItem = styled.div`
font-size:20px;
cursor:pointer;
margin-left:25px;
`