import React, { useState } from 'react'
import { Container } from './styles'
import {useDispatch} from 'react-redux'
import {login} from '../../Redux/apiCalls'

const LoginAdmin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const HandleAdminLogin = (e) =>{
        e.preventDefault();
        login(dispatch,{username,password})
    };
    return (
        <Container>
            <input type='text' placeholder='username' onChange={e=>setUsername(e.target.value)} />
            <input type='password' placeholder='password' onChange={e=>setPassword(e.target.value)} />
            <button onClick={HandleAdminLogin} >LOGIN</button>
        </Container>
    )
}

export default LoginAdmin
