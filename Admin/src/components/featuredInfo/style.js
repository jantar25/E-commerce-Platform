import styled from 'styled-components'

export const Container = styled.div `
width: 100%;
display: flex;
justify-content: space-between;
` 

export const Item = styled.div `
  flex: 1;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  background: rgb(233, 233, 241);
`

export const Title = styled.span `
    font-size: 20px;
`

export const MoneyContainer = styled.span `
    margin: 10px 0px;
    display: flex;
    align-items: center;
    `

export const Money = styled.div `
    font-size: 30px;
    font-weight: 600;
    `

export const MoneyRate = styled.div `
    display: flex;
    align-items: center;
    margin-left: 20px;
    `

export const Icon = styled.div `
    font-size: 14px;
    margin-left: 5px;
    color: green;
    `

export const Sub = styled.div `
    font-size: 15px;
    color: gray;
    `