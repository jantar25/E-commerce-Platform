import {Search, ShoppingCartOutlined,Spa} from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import {Container,Wrapper,Left,Rigth,Center,Language,
    SearchContainer,Input,Logo,MenuItem} from './Style'



const Navbar = () => {
    const theme = createTheme({
        palette: {
            primary: {
            main: '#6a9113'
          }
        }
      });

    return (
        <MuiThemeProvider theme={theme}>
        <Container>
            <Wrapper>
                <Left><Logo>KIVUGREEN</Logo></Left>
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
