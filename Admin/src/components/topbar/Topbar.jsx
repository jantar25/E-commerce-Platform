import React from "react";
import {Container,Wrapper,Logo,Right,Left,IconContainer,IconBadge,Image} from './style';
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
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
          <Image src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Image"/>
        </Right>
      </Wrapper>
    </Container>
  );
}
