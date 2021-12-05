import styled from "styled-components";


export const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:400px;
display:flex;
align-items:center;
justify-content:center;
background:whitesmoke;
overflow:hidden;
&:hover{
    background:orange; 
}
`


export const Card = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
height:100%;
width:100%;
`

export const ImgContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
z-index:2;
height:70%;
width:100%;
`


export const Info = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
z-index:2;
height:30%;
width:100%;
`

export const Title = styled.h1`
color:#7CFC00;
`
export const Price = styled.span`
color:#000;
font-size:15px;
`

export const Circular = styled.div`
width:150px;
height:150px;
border-radius:50%;
background:orange;
position: absolute;
`
export const Image = styled.img`
width:280px;
height:300px;
z-index:3;
`
export const Button = styled.button`
display:flex;
align-items:center;
justify-content:center;
width:250px;
padding: 5px 10px;
margin:10px;
font-size:15px;
background:#577516;
cursor:pointer;
border:none;
color:white;
border-radius:10px;
`
