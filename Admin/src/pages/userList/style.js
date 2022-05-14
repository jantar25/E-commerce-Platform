import styled from 'styled-components'

export const Container = styled.div`
flex: 4;
background: rgb(233, 233, 241);
`
export const ListUser = styled.div`
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  `

export const Button = styled.button`
border: none;
border-radius: 10px;
padding: 5px 10px;
background-color: #3bb077;
color: white;
cursor: pointer;
margin-right: 20px;
`
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`

export const ButtonTop = styled.button`
  width: 100px;
  border: none;
  padding: 10px;
  background-color: black;
  border-radius: 5px;
  cursor: pointer;
  color: #6a9113;
  font-size: 20px;
  font-weight:600;
  `