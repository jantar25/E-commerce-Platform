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

export const Top = styled.div`
display: flex;
`

export const TopLeft = styled.div`
flex: 1;
`

export const TopRight = styled.div`
padding: 20px;
margin: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
background: rgb(233, 233, 241);
border-radius: 10px;
border: 2px solid #6a9113;
  `

export const Image = styled.img`
width: 80px;
height: 70px;
border-radius: 50%;
object-fit: cover;
margin-right: 20px;
`

export const InfoTop = styled.div`
display: flex;
align-items: center;
margin-bottom:20px;
`

export const Name = styled.span`
font-weight: 600;
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
font-weight: 600;
margin-bottom: 10px;
`
export const InfoKey = styled.span`
font-weight: 300;
margin-bottom: 10px;
`
 

export const Bottom = styled.div`
padding: 20px;
margin: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
background: rgb(233, 233, 241);
border-radius: 10px;
border: 2px solid #6a9113;
`

export const Form = styled.form`
display: flex;
justify-content: space-between;
`

export const FormRight = styled.div`
display: flex;
flex-direction: column;

`
export const FormLeft = styled.div`
display: flex;
flex-direction: column;

`

export const Label = styled.label`
margin-bottom: 5px;
font-size: 14px;
font-weight:600;
`



export const LeftInput = styled.input`
margin-bottom: 10px;
padding: 5px;
width: 250px;
height: 30px;
border: 1px solid #6a9113;
`


export const LeftSelect = styled.select`
  margin-bottom: 10px;
  height: 30px;
  border: 1px solid #6a9113;
  `

export const UploadImage = styled.img`
width: 150px;
height: 150px;
border-radius: 10px;
object-fit: cover;
margin-right: 20px;
`

export const Upload = styled.div`
display: flex;
align-items: center;
`

export const ButtonUpdate = styled.button`
border-radius: 5px;
border: none;
padding: 15px;
cursor: pointer;
background-color: #6a9113;
color: white;
font-weight: 600;
margin-top:10px;
`

