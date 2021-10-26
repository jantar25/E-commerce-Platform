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
border: 1px solid #6a9113;
margin-left:25px;
padding:1px;
`

export const Input = styled.input`
border: none;
`
export const Logo = styled.h1`
background-color: #6a9113;
background-image: linear-gradient(to top, #6a9113 0%, #cacebf 100%);
background-size: 100%;
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;

`

export const MenuItem = styled.div`
font-size:20px;
cursor:pointer;
margin-left:25px;
color:#6a9113;
transition: all 1s ease;

&:hover{
    color:#cacebf;
}
`