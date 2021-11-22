import styled from 'styled-components'


export const Container = styled.div`
flex: 4;
margin: 30px 50px;
`
export const Title = styled.h1`
margin-bottom: 20px;
`

export const Form = styled.form`
display: flex;
flex-wrap: wrap;
align-items:center;
justify-content:center;
padding:20px;
border: 2px solid #6a9113;
background: rgb(233, 233, 241);
border-radius: 10px;
`

export const Item = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
  `

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #000;
`

export const Input = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  `

export const InputG = styled.input`
  margin-top: 15px;
`

export const LabelG = styled.label`
    margin: 10px;
    font-size: 18px;
    color: #555;
  `

export const Select = styled.select`
height: 40px;
border-radius: 5px;
`

export const Button = styled.button`
width: 200px;
border: none;
background-color: #6a9113;
color: white;
padding: 10px 20px;
font-weight: 600;
border-radius: 10px;
margin-top: 30px;
cursor: pointer;
&:hover{
  background-color: #000;
}
` 
