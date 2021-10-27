import {Search, ShoppingCartOutlined,Spa} from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import {Container,Wrapper,Left,Rigth,Center,Language,SearchContainer,Input,Logo,MenuItem} from './Style'



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Logo>KIVUGREEN <Spa style={{color:'#6a9113',fontSize:30}} /></Logo></Left>
                <Center>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Center>
                <Rigth>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:'#6a9113',fontSize:20}}/>
                    </SearchContainer>
                </Rigth>
            </Wrapper>
        </Container>
    )
}

export default Navbar
