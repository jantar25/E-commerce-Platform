import {Search, ShoppingCartOutlined,Spa} from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import decode from 'jwt-decode';
import { useEffect,useState } from 'react';
import { useHistory,useLocation } from 'react-router';
import {Container,Wrapper,Left,Rigth,Profile,Avatar,LogContainer,
    SearchContainer,Input,Logo,MenuItem} from './Style'
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
    const [user,setUser]=useState(JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser);
    

    const Logout=()=>{
        logoutDone(dispatch);
        history.push('/');
    }

    // useEffect(()=>{
    //     const token=JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser.accessToken;
    //    if(token){
    //        const decodedToken=decode(token);
    //        const today = new Date().getTime();
    //        const inToken=decodedToken.exp*1000;
    //        console.log(today,inToken)
    //     //    if (inToken< today){
    //     //         logout();
    //     //    }
           
    //    }

    //     setUser(JSON.parse(localStorage.getItem("persist:root")));
    // },[location])

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
                    <LogContainer>
                        {user?(
                        <Profile>
                            <Avatar></Avatar>
                                <MenuItem onClick={Logout}>Logout</MenuItem>
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
