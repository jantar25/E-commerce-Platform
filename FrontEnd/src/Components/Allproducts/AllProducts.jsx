import {Container,Popular} from './Styles'
import Item from './Item/Item'
import { useState,useEffect } from 'react'
import axios from "axios"


const AllProducts = ({filters,sort}) => {
    const [products,setProducts] = useState([]);
    const [filteredProducts,setFilteredProducts] = useState([]);

    useEffect(()=>{
        const getProducts= async ()=>{
            try {
                const res = await axios.get("https://kivugree.herokuapp.com/api/products")
                setProducts(res.data);
            } catch(err){
                console.log(err)
            }
        };
        getProducts();  
    },[])


    useEffect(()=>{
        setFilteredProducts(
            products.filter(item=>Object.entries(filters).every(([key,value])=>
            item[key].includes(value)
                 )
            )
        );
    },[products,filters])

  useEffect(()=>{
      if(sort=== "newest"){
          setFilteredProducts((prev)=>
          [...prev].sort((a,b)=>a.createdAt - b.createdAt))
      } else if (sort=== "asc"){
        setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>a.price - b.price))
    } else {
        setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>b.price - a.price))
    }
  }, [sort])

    return (
        <Container>
            <Popular>
            {filters
            ? filteredProducts.map((item)=>(<Item item={item} key={item._id} />))
            : products.map((item)=>(<Item item={item} key={item._id} />))}
            </Popular>
        </Container>
    )
}

export default AllProducts




