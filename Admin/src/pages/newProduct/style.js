import styled from 'styled-components'


export const Container = styled.div`
flex: 4;
margin: 30px 50px;
`
export const Title = styled.h1`
margin-bottom: 20px;
`

export const Form = styled.form`
  margin-top: 10px;
  border: 2px solid #6a9113;
  border-radius: 10px;
  background: rgb(233, 233, 241);
  padding:20px;
  width:40%;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`

export const Item = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  `

  export const Label = styled.label`
  color: #000;
  font-weight: 600;
  margin-bottom: 10px;
  `

  export const Input = styled.input`
  padding: 10px;
  `

  export const Select = styled.select`
  padding: 10px;
  `
  export const Option = styled.option``

  export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  background-color: #6a9113;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover{
    background-color: #000;
  }
  `
