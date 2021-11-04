import styled from "styled-components"

import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import PopularItems from "../Components/PopularItems/PopularItems"
import Footer from "../Components/Footer/Footer"
import Newsletter from "../Components/Newsletter/Newsletter"
import { mobile } from "../Responsive"


const Container = styled.div`

`
const Title = styled.h1`
margin:20px;
${mobile({margin:"20px 10px"})}
`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
`
const Filter = styled.div`
margin:20px;
${mobile({margin:"0px 15px",display:"flex",flexDirection:"column"})}
`
const FilterText = styled.span`
font-size:20px;
font-weight:700;
margin-right:20px;
${mobile({marginRight:"0px"})}
`
const Select = styled.select`
margin-right:20px;
padding:10px;
font-weight:600;
${mobile({margin:"5px 0px"})}
`
const Option = styled.option`
margin:20px;
`

const ProductList = () => {
    return (
        <Container>
           <Navbar />
           <Announcement />
           <Title>Fruits</Title>
           <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Turnary</Option>
                        <Option>Ready</Option>
                        <Option>Growing</Option>
                        <Option>Not Ready</Option>
                        <Option>Seed</Option>
                    </Select>   
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>Big</Option>
                        <Option>Medium</Option>
                        <Option>Small</Option>
                    </Select>             
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                <Select>
                        <Option selected>Newest</Option>
                        <Option>Price(Asc)</Option>
                        <Option>Price(Desc)</Option>
                    </Select> 
                </Filter>
           </FilterContainer>
           <PopularItems />
           <Newsletter />
           <Footer />
        </Container>
    )
}

export default ProductList