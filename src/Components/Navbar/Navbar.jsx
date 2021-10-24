import React from 'react'
import {Container,Wrapper,Left,Rigth,Center,Language,SearchContainer,Input,Logo,MenuItem} from './Style'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core'


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Logo>KIVUGREEN</Logo></Left>
                <Center>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined color="action" style={{color:'white',fontSize:20}}/>
                        </Badge>
                    </MenuItem>
                </Center>
                <Rigth>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:'red',fontSize:20}}/>
                    </SearchContainer>
                </Rigth>
            </Wrapper>
        </Container>
    )
}

export default Navbar
