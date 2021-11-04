import styled from "styled-components";
import { mobile } from "../../Responsive";


export const Container = styled.div`
display:flex;
${mobile({flexDirection:"column"})}
`
export const Left = styled.div`
flex:1;
display:flex;
flex-direction: column;
padding:20px;
`
export const Logo = styled.h2`
background-color: #6a9113;
background-image: linear-gradient(to top, #6a9113 0%, #cacebf 100%);
background-size: 100%;
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;
`
export const Description = styled.p`
margin:30px 10px;
color:gray;
`
export const SocialMedia = styled.div`
display:flex;
`
export const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50px;
background:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:10px;
`

export const Center = styled.div`
flex:1;
padding:20px;
`
export const Title = styled.h2`
margin-bottom: 30px;
`

export const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`

export const ListItem = styled.li`
width:50%;
color:gray;
margin-bottom: 10px;
cursor:pointer;

&:hover{
    color:#6a9113;
}
`

export const Right = styled.div`
flex:1;
padding:20px;
${mobile({background:"#eee"})}
`
export const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`
export const Payment = styled.img`
width:50%
`