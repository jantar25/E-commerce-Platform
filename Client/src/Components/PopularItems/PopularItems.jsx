import PopularsItem from './PopularItem/PopularItem'
import { useState,useEffect } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { getProducts } from '../../Redux/apiCalls'


const PopularsItems = ({cat,filters,sort}) => {
    const [products,setProducts] = useState([]);
    const [filteredProducts,setFilteredProducts] = useState([]);
    const dispatch = useDispatch()


    useEffect(()=>{
        const getProducts= async ()=>{
            try {
                // const res = await axios.get(cat==="All"? "https://kivugree.herokuapp.com/api/products":
                // cat? `https://kivugree.herokuapp.com/api/products?category=${cat}`
                // : "https://kivugree.herokuapp.com/api/products")

                const res = await axios.get(cat==="All"? "http://localhost:5000/api/products":
                 `http://localhost:5000/api/products?category=${cat}`)

                setProducts(res.data);
            } catch(err){
                console.log(err)
            }
        };
        getProducts();  
    },[cat])

    useEffect(() => {
        getProducts(dispatch)
      }, [dispatch])

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
          [...prev].sort((a,b)=>new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime()))
      } else if (sort=== "asc"){
        setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>a.price - b.price))
    } else {
        setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>b.price - a.price))
    }
  }, [sort])

    return (
        <div className='flex flex-col justify-center min-h-[50vh] items-center px-5 py-10 sm:px-20'>
            {filteredProducts.length>0? (
                <div className='flex justify-around items-center flex-wrap'>
                    {filteredProducts.map((item)=>(<PopularsItem item={item} key={item._id} />))}
                </div>
            ) : (
                <div className='text-center'>
                    <p className='text-gray-500 text-lg'>No more Products</p>
                </div>
            )}

        </div>
    )
}

export default PopularsItems