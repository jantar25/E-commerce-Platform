import styled from "styled-components"
import RegisterImg from "../Images/local.jpg"


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
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Name" />
                    <Input placeholder="LastName" />
                    <Input placeholder="UserName" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm-Password" />
                    <Agreement>By creating an account,I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register