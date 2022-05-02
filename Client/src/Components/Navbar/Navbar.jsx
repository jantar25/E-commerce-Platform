import React,{useState} from 'react';
import {ShoppingCartOutlined} from '@material-ui/icons'
import {RiCloseLine,RiMenu4Line} from 'react-icons/ri'
import { Badge } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import decode from 'jwt-decode';
import { useEffect} from 'react';
import { useHistory,useLocation } from 'react-router';
import { logoutDone } from '../../Redux/apiCalls'; 
import logoimage from '../../Images/logo.png'



const Navbar = () => {
    const [toggle,setToggle] = useState(false);
    const theme = createTheme({
        palette: {
            primary: {
            main: '#24FE41'
          }
        }
      });

    const quantity = useSelector(state=>state.cart.quantity)
    const dispatch=useDispatch();
    const history= useHistory();
    const location= useLocation();
    const user=useSelector((state)=>state.user.currentUser);

    const Logout= ()=>{
        logoutDone(dispatch);
        history.push('/');
    }

    useEffect(()=>{
        const currentToken = localStorage.getItem("persist:root");
        const token =currentToken? 
        JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accessToken : "";  
         
       if(token){
           const decodedToken=decode(token);
           const today = new Date().getTime();
           const inToken=decodedToken.exp*1000;
           if (inToken < today) {
            logoutDone(dispatch);
            history.push('/');
           }
                  }
    },[location,dispatch,history])


    return (
        <MuiThemeProvider theme={theme}>
        <div className='h-[60px]'>
            <div className='h-full w-full px-4 py-2 flex items-center justify-between'>
                <Link to="/" style={{textDecoration:"none"}}>
                <div className='flex-1 flex items-center'>
                        <div className='mr-1 w-12'>
                            <img className='min-w-full' src={logoimage} alt="logo" />
                        </div>
                        <h1 className='hidden sm:flex text-3xl font-[800] font-Manrope text-transparent bg-clip-text 
              bg-gradient-to-tr from-[#04AA6D] to-[#24FE41]'>KIVUGREEN</h1>
                 </div>
                 </Link>
                <div className='flex-2 flex items-center justify-end px-2'>
                    <Link to="/cart" >
                        <div className='text-[#04AA6D] hover:text-[#24FE41]'>
                            <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                            </Badge>
                        </div>
                    </Link>
                    <div className='ml-6 hidden md:flex text-[16px]'>
                        {user?(
                        <div className='flex items-center justify-center' >
                            <div className='w-[32px] h-[32px] mr-2'>
                                <img className='w-full h-full rounded-full' src={user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} />
                            </div>
                            <p className='text-[#04AA6D] hover:text-[#24FE41]' onClick={Logout}>Sign Out</p>
                        </div>)
                        :(
                        <Link to="/login" style={{textDecoration:"none"}}>
                            <p className='bg-[#04AA6D] text-black font-[600] rounded py-1 px-2 hover:bg-[#24FE41] 
                        text-xl ml-4 hidden md:flex text-[16px]'>Sign In</p>
                        </Link>)}
                    </div>
                    <div className='flex md:hidden ml-8 relative'>
                        {toggle ?
                        <RiCloseLine style={{cursor:'pointer'}} color="#04AA6D" size={27} onClick={()=>{setToggle(false)}}/>
                    : <RiMenu4Line style={{cursor:'pointer'}} color="#04AA6D" size={27} onClick={()=>{setToggle(true)}}/>}
                    {toggle && (
                        <div className="flex justify-end items-center flex-col bg-black text-left p-4 absolute
                        top-8 right-0 mt-4 min-w-[210px] rounded shadow-lg shadow-[#04AA6D] z-10 text-[16px]">
                            <div className='flex text-left '>
                                {user?(
                                <div className='flex justify-center items-center'>
                                    <div className='w-[32px] h-[32px] mr-2'>
                                         <img className='w-full h-full rounded-full' src={user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} />
                                    </div>
                                    <p className='bg-[#04AA6D] text-black font-[600] rounded py-1 px-2 hover:bg-[#24FE41] 
                                text-xl mt-4' onClick={Logout}>Sign Out</p>
                                </div>)
                                :(
                                <Link to="/login" style={{textDecoration:"none"}}>
                                    <p className='bg-[#04AA6D] text-black font-[600] rounded py-1 px-2 hover:bg-[#24FE41] 
                                text-xl mt-4'>Sign In</p>
                                </Link>)}
                            </div>
                        </div>
                    )}
                </div>       
            </div>
        </div>
        </div>
        </MuiThemeProvider>
    )
}

export default Navbar
