import styled from 'styled-components'

export const Container = styled.div`
height:100vh;
display:flex;
justify-content:center;
align-items: center;
background-color: #63d471;
background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);

`

export const Form = styled.form`
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
width: 40%;
border: 2px solid white;
padding:20px;
`
export const Title = styled.span`
font-size:30px;
margin-bottom:30px;
color:white;
font-weight:600;
`

export const Input = styled.input`
margin-bottom:20px;
width: 80%;
padding: 8px;
`

export const Button = styled.button`
width: 70%;
border-radius: 10px;
padding: 8px 10px;
color:#000;
font-weight:600;
background-color: #00b712;
background-image: linear-gradient(315deg, #00b712 0%, #5aff15 74%);
border:none;
margin-bottom:10px;
&:hover{
background-color: #f9ea8f;
background-image: linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%);
}
`

export const Error = styled.p`
color:red;
margin-bottom:10px;
`