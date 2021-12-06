import {Search, ShoppingCartOutlined,Spa} from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {Container,Wrapper,Left,Rigth,
    SearchContainer,Input,Logo,MenuItem} from './Style';





const Navbar = () => {
    const theme = createTheme({
        palette: {
            primary: {
            main: '#CCF07F'
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
                        <Logo><Spa style={{color:'#6a9113',fontSize:40}}/>KIVUGREEN</Logo>
                    </Link>
                 </Left>
                <Rigth>
                    <Link to="/cart" >
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                    <Link to="/login" style={{textDecoration:"none"}}>
                        <MenuItem>Login</MenuItem>
                    </Link>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{color:'#577516',fontSize:20}}/>
                    </SearchContainer>
                </Rigth>
            </Wrapper>
        </Container>
        </MuiThemeProvider>
    )
}

export default Navbar
