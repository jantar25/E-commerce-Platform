import styled from "styled-components"

import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import PopularItems from "../Components/PopularItems/PopularItems"
import Footer from "../Components/Footer/Footer"
import Newsletter from "../Components/Newsletter/Newsletter"
import { mobile } from "../Responsive"
import { useLocation } from "react-router"
import { useState } from "react"


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
    const location=useLocation();
    const cat = location.pathname.split("/")[2]; 
    const [filters,setFilters] = useState({});
    const [sort,setSort] = useState("Newest");

    const handleFilters = (e)=>{
        const value = e.target.value;
        setFilters({...filters,[e.target.name] : value})
    }

    return (
        <Container>
           <Navbar />
           <Announcement />
           <Title>Fruits</Title>
           <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select name="content" onChange={handleFilters}>
                        <Option disabled>Content</Option>
                        <Option>white</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                        <Option>orange</Option>
                        <Option>red</Option>
                    </Select>   
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>Size</Option>
                        <Option>big</Option>
                        <Option>medium</Option>
                        <Option>small</Option>
                    </Select>             
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                <Select onChange={(e)=>setSort(e.target.value)}>
                        <Option value ="newest">Newest</Option>
                        <Option value ="asc">Price(Asc)</Option>
                        <Option value ="desc">Price(Desc)</Option>
                    </Select> 
                </Filter>
           </FilterContainer>
           <PopularItems cat={cat} filters={filters} sort={sort} />
           <Newsletter />
           <Footer />
        </Container>
    )
}

export default ProductList