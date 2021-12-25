import {Container,Popular} from './Styles'
import PopularsItem from './PopularItem/PopularItem'
import { useState,useEffect } from 'react'
import axios from "axios"


const PopularsItems = ({cat,filters,sort}) => {
    const [products,setProducts] = useState([]);
    const [filteredProducts,setFilteredProducts] = useState([]);

    useEffect(()=>{
        const getProducts= async ()=>{
            try {
                const res = await axios.get(cat?
                     `https://kivugree.herokuapp.com/api/products?category=${cat}` 
                : "https://kivugree.herokuapp.com/api/products")

                setProducts(res.data);
                // history.push("/paySuccess");
            } catch(err){
                console.log(err)
            }
        };
        getProducts();  
    },[cat])


    useEffect(()=>{
        cat && 
        setFilteredProducts(
            products.filter(item=>Object.entries(filters).every(([key,value])=>
            item[key].includes(value)
                 )
            )
        );
    },[products,cat,filters])

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
            {cat 
            ? filteredProducts.map((item)=>(<PopularsItem item={item} key={item._id} />))
                : products.slice(0,8).map((item)=>(<PopularsItem item={item} key={item._id} />))
                }
            </Popular>
        </Container>
    )
}

export default PopularsItems