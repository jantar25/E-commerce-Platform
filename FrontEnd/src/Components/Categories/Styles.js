import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div`
display:flex;
flex-direction:column;
padding:20px;
`

export const Title = styled.span`
display:flex;
font-size:60px;
margin:20px;
justify-content:center;
color:orange;
${mobile({fontSize:"30px"})}
`

export const Cat = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
flex-wrap:wrap;
${mobile({flexDirection:"column",padding:"0px"})}
`