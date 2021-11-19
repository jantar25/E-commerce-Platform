import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import LoginImg from "../Images/Chemical.jpg"
import { login } from "../Redux/apiCalls"
import { mobile } from "../Responsive"


const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)), url(${LoginImg})  no-repeat center;
background-size: cover;
display:flex;
align-items:center;
justify-content:center;

`
const Wrapper = styled.div`
width:30%;
padding:20px;
background:whitesmoke;
${mobile({width:"80%"})}
`
const Title = styled.h1`
font-size:24px;
`
const Form = styled.form`
display:flex;
flex-direction: column;

`
const Input = styled.input`
flex:1;
min-width:40%;
margin: 10px 0px;
padding:10px;
`
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background:teal;
color:whitesmoke;
cursor:pointer;
margin-bottom:10px;
&:disabled{
    color:teal;
    cursor:not-allowed;
}
`

const Link = styled.a`
font-size:12px;
margin:10px 0px;
text-decoration:underline;
cursor:pointer;
`
const Error = styled.span`
color:red;
`


const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {isFetching,error} = useSelector((state)=> state.user)
    const dispatch = useDispatch();
    
    const handleClick = (e)=>{
        e.preventDefault();
        login(dispatch,{password,username});
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" onChange={(e)=> setUsername(e.target.value)} />
                    <Input placeholder="Password" type="password" onChange={(e)=> setPassword(e.target.value)} />
                    <Button onClick={handleClick} disabled={isFetching} >LOGIN</Button>
                    { error && <Error>Something went wrong</Error>}
                    <Link>Don't you remember your password?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login