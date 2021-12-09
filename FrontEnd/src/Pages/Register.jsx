import styled from "styled-components"
import RegisterImg from "../Images/local.jpg"
import { mobile } from "../Responsive"
import { useState } from "react"
import { publicRequest } from "../requestMethode"
import { useHistory } from "react-router"


const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)), url(${RegisterImg})  no-repeat center;
background-size: cover;
display:flex;
align-items:center;
justify-content:center;

`
const Wrapper = styled.div`
width:40%;
padding:20px;
background:whitesmoke;
${mobile({width:"80%"})}
`
const Title = styled.h1`
font-size:24px;
`
const Form = styled.form`
display:flex;
flex-wrap:wrap;

`
const Input = styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding:10px;
`
const Agreement = styled.span`
font-size:12px;
margin:20px 0px;
`
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background:teal;
color:whitesmoke;
cursor:pointer;
`


const Register = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [ConfirmPassword,setConfirmPassword] = useState("");
    const history = useHistory();

    const handleRegister=async (e)=>{
        e.preventDefault();
        if(password===ConfirmPassword){
            try {
                const res = await publicRequest.post("/auth/register",
                {username,password,email});
                history.push("/login");
                console.log(res)
            } catch(err){
                console.log(err)
            }
    } else {

    }

    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="UserName" onChange={(e)=>setUsername(e.target.value)} />
                    <Input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    <Input placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    <Input placeholder="Confirm-Password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <Agreement>By creating an account,I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                    <Button onClick={handleRegister}>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register