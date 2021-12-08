import styled from "styled-components";
import { mobile } from "../../Responsive";

export const AboutContent = styled.section`
  overflow: hidden;
  background: #fff;
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin: 20px;
  padding: 0px 20px;
  ${mobile({flexDirection:"column",margin:"0px",padding:"0px"})}
`;

export const AboutColumn1 = styled.div`
  padding: 0 16px;
`;
export const AboutColumn2 = styled.div`
  padding: 0 10px;
`;
export const Text = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 20px;
`;
export const Question = styled.div`
  color: #737966;
  font-size: clamp(0.6rem, 8vw, 1.3rem);
  font-weight: 600;
  margin-bottom: 0;
`;

export const Heading = styled.h1`
  color: #243109;
  margin-bottom: 24px;
  font-weight: 400;
  font-size: clamp(1.5rem, 8vw, 3rem);
  border-bottom: 5px solid orange;
`;

export const Description = styled.div`
  max-width: 440px;
  margin-bottom: 24px;
  font-size: clamp(0.4rem, 8vw, 0.9rem);
  color: #555555;
`;
export const Title = styled.h4`
  font-size: clamp(0.5rem, 8vw, 1.2rem);
  color: orange;
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  margin: 0 0 10px 0;
  object-fit: cover;
  width: 100%;
`;