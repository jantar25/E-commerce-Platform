import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect } from "react";
import AboutImage from "../../Images/y.jpg";
import {
  AboutContent,
  AboutWrapper,
  AboutRows,
  AboutColumn1,
  AboutColumn2,
  Question,
  Heading,
  Description,
  Title,
  Text,
  ImgWrap,
  Img,
} from "./style";

const About = () => {

  useEffect(() => {
    AOS.init({duration:500});
  }, [])
  return (
    <AboutContent>
      <AboutWrapper >
          <AboutColumn1 data-aos="fade-right">
            <Text>
              <Question>What to know about KIVUGREEN</Question>
              <Heading>Feeding the World with healthy food is our concern</Heading>
              <Description>
                <Title>KIVUGREEN</Title> is an association and a big comunity of 
                farmers and agricultures with the mission of feeding the world wide 
                population with healhty food. We use virious organic technics
                during our cultivation and farming system.
                 <br/>Our mission is to censibilize and promote the use of organics technics
                 and fight against the use of pestiside and other chemical substances as farming
                 technics.<br/><br/>We give trainning, we cultivate and we made an extended community of 
                 farmers which has the same ideology of safety first.
              </Description>
            </Text>
          </AboutColumn1>
          <AboutColumn2 data-aos="fade-left">
            <ImgWrap>
              <Img src={AboutImage} alt="AboutImage" />
            </ImgWrap>
          </AboutColumn2>
      </AboutWrapper>
    </AboutContent>
  );
};

export default About;