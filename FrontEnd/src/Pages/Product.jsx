import styled from "styled-components"
import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import Footer from "../Components/Footer/Footer"
import Newsletter from "../Components/Newsletter/Newsletter"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../Responsive"
import { useLocation } from "react-router"
import { useState,useEffect } from "react"
import {publicRequest} from "../requestMethode"


const Container = styled.div`

`
const Wrapper = styled.div`
display:flex;
padding:50px;
${mobile({padding:"10px",flexDirection:"column"})}
`
const ImageConainter = styled.div`
flex:1;
`
const Image = styled.img`
width:100%;
height:80hv;
object-fit:cover;
${mobile({height:"40vh"})}
`
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
${mobile({padding:"10px"})}
`
const Title = styled.span`
font-size:40px;
font-weight:600;
color:teal;
`
const Description = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-weigth:200;
font-size:40px;
`
const FilterContainer = styled.div`
width:70%;
display:flex;
justify-content:space-between;
margin:30px 0px;
${mobile({width:"100%"})}
`
const Filter = styled.div`
display:flex;
align-items:center;
`
const FilterTitle = styled.span`
font-weigth:200;
font-size:20px;
`
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background: ${props=>props.color};
margin:0px 5px;
cursor:pointer;
`
const FilterSize = styled.select`
margin-left:10px;
padding:5px;
`
const FilterOption = styled.option`
`
const AddContainer = styled.div`
width:70%;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({width:"100%"})}
`
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
`
const Amount = styled.span`
width:30px;
height:30px;
border:1px solid teal;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
margin:0px 10px;
`
const Button = styled.button`
padding:15px;
background:white;
border:3px solid teal;
cursor:pointer;
font-weight:700;

&: hover{
    background:whitesmoke;
}
`

const Product = () => {
    const location=useLocation();
    const id = location.pathname.split("/")[2];
    const [product,setProduct] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [content,setContent] = useState("");
    const [size,setSize] = useState("");
    

    useEffect(()=>{
        const getProduct= async ()=>{
            try {
                const res = await publicRequest.get("/products/find/" +id)
                setProduct(res.data);               
            } catch (error) {
                console.log(error)
            }
        }
        getProduct();
    },[id])

    const handleQuantity = (type)=>{
        if(type==="dec"){
           quantity >1 && setQuantity(quantity-1)
        } else {
            setQuantity(quantity+1)
        }
    }
    return (
        <Container>
           <Navbar />
           <Announcement />
           <Wrapper>
                <ImageConainter>
                    <Image src={product.img} />
                </ImageConainter>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Description>{product.description}</Description>
                    <Price>Rwf {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Content:</FilterTitle>
                            {product.content?.map((c)=>(
                                <FilterColor color={c} key={c} onClick={()=>setContent(c)} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize onChange={(e)=>setSize(e.target.value) } >
                            {product.size?.map((s)=>(
                                <FilterOption key={s}>{s}</FilterOption>
                            ))}
                            </FilterSize>
                        </Filter>
                   </FilterContainer>
                   <AddContainer>
                       <AmountContainer>
                           <Remove onClick={()=> handleQuantity("dec")} />
                           <Amount>{quantity}</Amount>
                           <Add onClick={()=> handleQuantity("inc")} />
                       </AmountContainer>
                       <Button>ADD TO CART</Button>
                   </AddContainer>
                </InfoContainer>
           </Wrapper>
           <Newsletter />
           <Footer />
        </Container>
    )
}

export default Product