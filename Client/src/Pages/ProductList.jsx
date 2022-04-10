import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import PopularItems from "../Components/PopularItems/PopularItems"
import Footer from "../Components/Footer/Footer"
import { useLocation } from "react-router"
import { useState } from "react"


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
        <div className="bg-black">
           <Navbar />
           <Announcement />
           <h1 className="text-orange-500 text-center m-4 text-[50px]">{cat}</h1>
           <div className="flex flex-col md:flex-row justify-between">
                <div className="flex m-4 items-center justify-start flex-wrap">
                    <h3 className="text-gray-600 font-[700] mr-4">Filter Products:</h3>
                    <div>
                        <select className="mr-4 p-2 my-2 font-[600] rounded bg-gray-500" name="content" onChange={handleFilters}>
                            <option disabled>Content</option>
                            <option>white</option>
                            <option>yellow</option>
                            <option>green</option>
                            <option>orange</option>
                            <option>red</option>
                        </select>   
                        <select className="mr-4 p-2 my-2 font-[600] rounded bg-gray-500" name="size" onChange={handleFilters}>
                            <option disabled>Size</option>
                            <option>big</option>
                            <option>medium</option>
                            <option>small</option>
                        </select> 
                    </div>            
                </div>
                <div className="flex m-4 items-center justify-start flex-wrap">
                    <h3 className="text-gray-600 font-[700] mr-4">Sort Products:</h3>
                    <select className="mr-4 p-2 my-2 font-[600] rounded bg-gray-500" onChange={(e)=>setSort(e.target.value)}>
                        <option value ="newest">Newest</option>
                        <option value ="asc">Price(Asc)</option>
                        <option value ="desc">Price(Desc)</option>
                    </select> 
                </div>
           </div>
           <PopularItems cat={cat} filters={filters} sort={sort} />
           <Footer />
        </div>
    )
}

export default ProductList