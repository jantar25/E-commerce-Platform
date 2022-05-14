import styled from "styled-components"


export const Container = styled.div`
flex:1;
display:flex;
flex-direction:column;
background:black;
margin:5px;
border-radius:10px;
width:300px;
`

export const Header = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:420px;
padding:5px 0px;
`
export const HeaderImg = styled.div`
flex:1;
height:33%;
width:100%;
`
export const OrderImg = styled.img`
height:100%;
width:100%;
object-fit:cover;
`
export const OrderInfo = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
padding:5px;
margin-left:5px;
color:gray;
`
export const Description = styled.p`
font-size:15px;
margin-top: 10px;
margin-bottom:10px;
`
export const Price = styled.p`
font-size:20px;
font-weight:700;
`
export const Specification = styled.div`
display:flex;
justify-content:space-between;
`
export const Content = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
export const Size = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:5px;
`
export const Quantity = styled.p`
font-weight:700;
`
export const Owner = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
background:gray;
color:black;
padding-left:5px;
padding-right:5px;
margin:1px;
`

export const ProductTurnary = styled.div`
width:20px;
height:20px;
border-radius:50%;
margin-right: 10px;
cursor:pointer;
background: ${props=>props.color}
`

export const OwnerImgContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
height:30px;
width:30px;
`
export const OwnerImg = styled.img`
height:100%;
width:100%;
border-radius:50%;
`

export const OwnerDescription = styled.div`
margin:5px;
font-size:15px;
`
export const Button = styled.div`
display:flex;
justify-content:center;
align-items:center;
background:#04AA6D;
color:black;
padding:3px;
border-radius:10px;
margin-bottom:5px;
margin-top:5px;
font-weight:700;
cursor:pointer;
`