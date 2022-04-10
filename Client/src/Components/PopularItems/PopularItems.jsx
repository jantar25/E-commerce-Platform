import PopularsItem from './PopularItem/PopularItem'
import { useState,useEffect } from 'react'
import axios from "axios"


const PopularsItems = ({cat,filters,sort}) => {
    const [products,setProducts] = useState([]);
    const [filteredProducts,setFilteredProducts] = useState([]);

    useEffect(()=>{
        const getProducts= async ()=>{
            try {
                // const res = await axios.get(cat==="All"? "https://kivugree.herokuapp.com/api/products":
                // cat? `https://kivugree.herokuapp.com/api/products?category=${cat}`
                // : "https://kivugree.herokuapp.com/api/products")

                const res = await axios.get(cat==="All"? "http://localhost:5000/api/products":
                cat? `http://localhost:5000/api/products?category=${cat}`
                : "http://localhost:5000/api/products")

                setProducts(res.data);
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
        <div className='flex flex-col justify-center items-center px-5 py-10 sm:px-20'>
            <div className='flex justify-around items-center flex-wrap'>
            {cat 
            ? filteredProducts.map((item)=>(<PopularsItem item={item} key={item._id} />))
                : products.slice(0,8).map((item)=>(<PopularsItem item={item} key={item._id} />))
                }
            </div>
        </div>
    )
}

export default PopularsItems