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
  width: 90%;
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
  border: 1px solid #6a9113;
  `

  export const Select = styled.select`
  margin-bottom: 10px;
  height: 40px;
  border: 1px solid #6a9113;
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
