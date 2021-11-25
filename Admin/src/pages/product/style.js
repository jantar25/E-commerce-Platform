import styled from 'styled-components'


export const Container = styled.div`
flex: 4;
padding: 20px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
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

export const Top = styled.div`
display: flex;
`

export const TopLeft = styled.div`
flex: 1;
`

export const TopRight = styled.div`
flex: 1;
padding: 20px;
margin: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
background: rgb(233, 233, 241);
border-radius: 10px;
border: 2px solid #6a9113;
  `

export const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
margin-right: 20px;
`

export const InfoTop = styled.div`
display: flex;
align-items: center;
`

export const Name = styled.span`
font-weight: 600
`

export const InfoBottom = styled.div`
margin-top: 10px;
`

export const InfoItem = styled.div`
width: 150px;
display: flex;
justify-content: space-between;
`

export const InfoValue = styled.span`
font-weight: 400;
`
export const InfoKey = styled.span`
font-weight: 300;
`
 

// .productBottom {
//   padding: 20px;
//   margin: 20px;
//   -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
//   box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
// }

export const Form = styled.form`
display: flex;
justify-content: space-between;
`

export const FormRight = styled.div`
display: flex;
flex-direction: column;
`
export const FormLeft = styled.div``

// .productFormLeft > label {
//   margin-bottom: 10px;
//   color: gray;
// }

// .productFormLeft > input {
//   margin-bottom: 10px;
//   border: none;
//   padding: 5px;
//   border-bottom: 1px solid gray;
// }

// .productFormLeft >select{
//   margin-bottom: 10px;
// }

export const UploadImage = styled.img`
width: 100px;
height: 100px;
border-radius: 10px;
object-fit: cover;
margin-right: 20px;
`


// .productFormRight{
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// }

export const Upload = styled.div`
display: flex;
align-items: center;
`

// .productButton{
//   border: none;
//   padding: 5px;
//   border-radius: 5px;
//   background-color: darkblue;
//   color:white;
//   font-weight: 600;
//   cursor: pointer;
// }