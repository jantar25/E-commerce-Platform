import React, { useState } from 'react'
import { Container,Input,Button,Title,Form,Error } from './styles'
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../../Redux/apiCalls'
import { useHistory } from 'react-router'


const LoginAdmin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const {isFetching,error} = useSelector((state)=> state.user)
    const HandleClick = (e) =>{
        e.preventDefault();
        login(dispatch,{username,password});
        history.push("/");
    };

    return (
        <Container>
            <Form>
                <Title>ADMIN LOGIN</Title>
                <Input required type='text' placeholder='username' onChange={e=>setUsername(e.target.value)} />
                <Input required type='password' placeholder='password' onChange={e=>setPassword(e.target.value)} />
                {error? <Error>{`*${error.payload.message}*`}</Error> : null}
                <Button onClick={HandleClick} >{isFetching? 'Logging ...' : 'Login'}</Button>
            </Form>
        </Container>
    )
}

export default LoginAdmin
