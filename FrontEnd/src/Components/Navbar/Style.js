import styled from "styled-components";
import {mobile} from "../../Responsive"

export const Container = styled.div`
height:60px;
color:#fff;
${mobile({height:"50px"})}
`

export const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
${mobile({padding:"10px 5px"})}
`
export const Left = styled.div`
flex:1;
`
export const Rigth = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex:2,justifyContent:"center"})}
`

export const SearchContainer = styled.div`
display:flex;
align-items:center;
border: 1px solid #CCF07F;
margin-left:25px;
padding:1px;

`

export const Input = styled.input`
border: none;
${mobile({width:"50px"})}
`
export const Logo = styled.h1`
font-size: 40px;
text-decoration: none;
background-color: #6a9113;
background-image: linear-gradient(to top, #6a9113 0%, #cacebf 100%);
background-size: 100%;
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;
${mobile({fontSize:"20px"})}
`

export const MenuItem = styled.div`
font-size:20px;
cursor:pointer;
margin-left:25px;
color:#CCF07F;
transition: all 1s ease;

${mobile({fontSize:"15px",marginLeft:"10px"})}

&:hover{
    color:#cacebf;
}
`