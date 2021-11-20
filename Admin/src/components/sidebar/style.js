import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.div`
flex: 1;
height: calc(100vh - 50px);
background: black;
position: sticky;
top: 50px;
`
export const StyledLink = styled(Link)`
text-decoration: none;
color: #555;
&:focus, &:hover, &:visited, &:link, &:active {
  text-decoration: none;
}
`

export const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`

export const Menu = styled.div`
  margin-bottom: 10px;
`

export const Title = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`

export const List = styled.ul`
  list-style: none;
  padding: 5px;
`

export const ListItems = styled.li`
  padding: 5px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover,&:active {
    background-color: rgb(46, 45, 45);
  }
`


