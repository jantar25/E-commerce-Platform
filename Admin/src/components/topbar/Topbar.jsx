import React from "react";
import decode from 'jwt-decode';
import {useDispatch} from 'react-redux';
import { useEffect,useState } from 'react';
import { useHistory,useLocation } from 'react-router';
import { logoutDone } from '../../Redux/apiCalls'; 
import {Container,Wrapper,Logo,Right,Left,IconContainer,IconBadge,Image,Button} from './style';
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {

  const dispatch=useDispatch();
  const history= useHistory();
  const location= useLocation();
  const currentToken=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
  const [user,setUser]=useState(currentToken);

  const Logout=()=>{
    logoutDone(dispatch);
    history.push('/');
    setUser(null);
}

useEffect(()=>{
  const token=JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?.accessToken;
 if(token){
     const decodedToken=decode(token);
     const today = new Date().getTime();
     const inToken=decodedToken.exp*1000;
     if (inToken < today) Logout();
            }
  setUser(currentToken)
},[location])

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>KIVUGREEN</Logo>
        </Left>
        <Right>
          <IconContainer>
            <NotificationsNone />
            <IconBadge>4</IconBadge>
          </IconContainer>
          <IconContainer>
            <Language />
            <IconBadge>2</IconBadge>
          </IconContainer>
          <IconContainer>
            <Settings />
          </IconContainer>
          <Button onClick={Logout}>LOG OUT</Button>
          <Image src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Image"/>
        </Right>
      </Wrapper>
    </Container>
  );
}
