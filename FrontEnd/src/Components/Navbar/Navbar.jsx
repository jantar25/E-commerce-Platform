import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {Container,Wrapper,Left,Rigth,Center,Language,
    SearchContainer,Input,Logo,MenuItem} from './Style';





const Navbar = () => {
    const theme = createTheme({
        palette: {
            primary: {
            main: '#6a9113'
          }
        }
      });

    const quantity = useSelector(state=>state.cart.quantity)

    return (
        <MuiThemeProvider theme={theme}>
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <Logo>KIVUGREEN</Logo>
                    </Link>
                 </Left>
                <Center>
                    <Link to="/register" style={{textDecoration:"none"}}>
                        <MenuItem>Register</MenuItem>
                    </Link>
                    <Link to="/login" style={{textDecoration:"none"}}>
                        <MenuItem>Login</MenuItem>
                    </Link>
                    <Link to="/cart" >
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Center>
                <Rigth>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{color:'#6a9113',fontSize:20}}/>
                    </SearchContainer>
                </Rigth>
            </Wrapper>
        </Container>
        </MuiThemeProvider>
    )
}

export default Navbar
