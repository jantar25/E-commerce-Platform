import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import decode from 'jwt-decode';
import { useEffect,useState } from 'react';
import { useHistory,useLocation } from 'react-router';
import {Container,Wrapper,Left,Rigth,Profile,Image,LogContainer,
    SearchContainer,Input,Logo,MenuItem,Loggedout} from './Style'
import { logoutDone } from '../../Redux/apiCalls'; 




const Navbar = () => {
    const theme = createTheme({
        palette: {
            primary: {
            main: '#CCF07F'
          }
        }
      });

    const quantity = useSelector(state=>state.cart.quantity)
    const dispatch=useDispatch();
    const history= useHistory();
    const location= useLocation();

    const Logout=()=>{
        logoutDone(dispatch);
        history.push('/');
    }

    useEffect(()=>{
        const token=JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?.accessToken;
       if(token){
           const decodedToken=decode(token);
           const today = new Date().getTime();
           const inToken=decodedToken.exp*1000;
           if (inToken < today) {
            logoutDone(dispatch);
            history.push('/');
           }
                  }
    },[location])

    
    const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;


    return (
        <MuiThemeProvider theme={theme}>
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <Logo>KIVUGREEN</Logo>
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
                    <LogContainer>
                        {user?(
                        <Profile>
                            <Image src={user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} />
                            <Loggedout onClick={Logout}>Logout</Loggedout>
                        </Profile>)
                        :(
                        <Link to="/login" style={{textDecoration:"none"}}>
                            <MenuItem>Login</MenuItem>
                        </Link>)}
                    </LogContainer>
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
