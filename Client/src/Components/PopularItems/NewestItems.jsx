import React from 'react'
import PopularsItem from './PopularItem/PopularItem'
import { useState,useEffect } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { getProducts } from '../../Redux/apiCalls'


const NewestItems = () => {
    const [products,setProducts] = useState([]);
    const dispatch = useDispatch()


    useEffect(()=>{
        const getProducts= async ()=>{
            try {
                // const res = await axios.get(cat==="All"? "https://kivugree.herokuapp.com/api/products":
                // cat? `https://kivugree.herokuapp.com/api/products?category=${cat}`
                // : "https://kivugree.herokuapp.com/api/products")

                const res = await axios.get("https://kivugren.herokuapp.com/api/products")
                setProducts(res.data);
            } catch(err){
                console.log(err)
            }
        };
        getProducts();  
    },[])

    useEffect(() => {
        getProducts(dispatch)
      }, [dispatch])

const filteredProducts = products.sort(function(a, b) {
    return new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime();
  });

  return (
    <div className='flex flex-col justify-center items-center px-5 py-10 sm:px-20'>
    <div className='flex justify-around items-center flex-wrap'>
    {filteredProducts.slice(0,8).map((item)=>(<PopularsItem item={item} key={item._id} />))}
    </div>
</div>
  )
}

export default NewestItems