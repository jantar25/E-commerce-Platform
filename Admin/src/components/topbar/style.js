import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 50px;
background-color: white;
position: sticky;
top: 0;
z-index: 999;
background: black;
`

export const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.span`
font-size: 30px;
text-decoration: none;
background-color: #6a9113;
background-image: linear-gradient(to top, #6a9113 0%, #cacebf 100%);
background-size: 100%;
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;
cursor: pointer;
`

export const Left = styled.div`
    display: flex;
    align-items: center;
`

export const Right = styled.div`
    display: flex;
    align-items: center;
`

export const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 20px;
  color: #cacebf;
`

export const IconBadge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -8px;
    right: -3px;
    background-color: #6a9113;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`

export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`