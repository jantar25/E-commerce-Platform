import React from 'react'
import styled from "styled-components"
import { DeleteOutline } from "@material-ui/icons";

const FarmerProduct = ({product}) => {
    const ProductTurnary = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    margin-right: 10px;
    cursor:pointer;
    background: ${props=>props.color}
    `
    return (
    <div className=' flex-1 flex flex-col bg-black m-1 max-w-[280px] rounded'>              
            <div className=" flex flex-col w-full h-[400px]">
                <div className="flex-1 w-full h-1/3 justify-center items-center">
                    <img className="w-full h-full object-cover" src={product.img} alt='itemImg' />
                </div>
                <div className="flex-1 flex flex-col justify-center ml-2 p-2 ">
                        <h1 className="text-lg text-orange-500 mb-2 font-[500]">{product.title}</h1>
                        <p className="text-[11px] mb-2 text-neutral-400">{product.description}</p>
                        <p className="font-[900] text-[#04AA6D]">Rwf {product.price}</p>
                        <div className=" flex flex-row justify-between text-neutral-600 text-sm">
                            <div className=" flex items-center my-2">
                                <h3 className="font-[600] mr-1">Content:</h3>
                                {product.content?.map((c)=>(
                                    <ProductTurnary key={c} color={c} />))}    
                            </div>
                            <div className="flex items-center">
                                <h3 className="font-[600] mr-1">Size:</h3>
                                <select className="bg-slate-300 rounded" >
                                {product.size?.map((s)=>(
                                    <option className=" p-2" key={s}>{s}</option>
                                ))}
                                </select>
                            </div>
                         </div>
                    <div className="flex justify-between items-center py-4 px-2">
                        <button className='bg-[#04AA6D] px-2 rounded'>Edit</button>
                        <DeleteOutline style={{'color':'red','cursor':'pointer'}}/>            
                    </div>
                </div>
            </div>
    </div>
    )
}

export default FarmerProduct