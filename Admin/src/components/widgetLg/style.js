import styled from 'styled-components'

export const Container = styled.div`
flex: 2;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
padding: 20px;
background: rgb(233, 233, 241);
border-radius:10px;
`

export const Title = styled.h3`
font-size: 22px;
font-weight: 600;
`

export const Table = styled.table`
width: 100%;
border-spacing: 20px;
`

export const Tr = styled.tr``

export const Th = styled.th`
text-align: left;
`
export const Td = styled.td`
display: flex;
align-items: center;
font-weight: 600;
`

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  `
export const Name = styled.span``

export const Date = styled.td`
font-weight: 300;
`

export const Amount = styled.td`
font-weight: 300;
`

export const Btn = styled.button`
padding: 5px 7px;
border: none;
border-radius: 10px;
background: ${ props=>props.type==="Approved"? "#e5faf2" : 
props.type==="Declined"? "#fff0f1" :  "#ebf1fe" };

color:${ props=>props.type==="Approved"? "#3bb077" : 
props.type==="Declined"? "#d95087" :  "#2a7ade" };
`


