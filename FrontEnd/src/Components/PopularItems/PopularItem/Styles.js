import styled from "styled-components";



export const Info = styled.div`
opacity:0;
position:absolute;
top:0;
let:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
z-index:3;
background:rgba(0,0,0,0.4);
transition: all 0.5s ease;
`
export const Icons = styled.div`
display:flex;
margin-bottom:30px;
`
export const Title = styled.h1`
color:#7CFC00;
`

export const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
position:relative;
background:whitesmoke;

&:hover ${Info}{
    opacity:1;
}
`

export const Circular = styled.div`
width:150px;
height:150px;
border-radius:50%;
background:#cacebf;
position: absolute;
`
export const Image = styled.img`
width:75%;
z-index:2;
`

export const Icon = styled.h1`
width:40px;
height:40px;
color:#6a9113;
background:black;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
cursor:pointer;
transition: all 0.5s ease;

&:hover{
    transform: scale(1.1);
}

`
