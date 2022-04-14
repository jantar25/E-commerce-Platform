import { Add, Remove,ShoppingCartOutlined } from "@material-ui/icons"
import { useState } from "react"
import { addProduct } from "../../../Redux/cartRedux"
import { useDispatch } from "react-redux"
import {RiCloseLine} from 'react-icons/ri'
import styled from "styled-components"


const PopularItem = ({item}) => {
    const [modal,setModal] = useState(false);
    const [quantity,setQuantity] = useState(1);
    const [content,setContent] = useState("");
    const [size,setSize] = useState("");
    const dispatch = useDispatch();

    const ProductTurnary = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    margin-right: 10px;
    cursor:pointer;
    background: ${props=>props.color}
    `

    const handleQuantity = (type)=>{
        if(type==="dec"){
           quantity >1 && setQuantity(quantity-1)
        } else {
            setQuantity(quantity+1)
        }
    }
    
    const handleCart = ()=>{
        dispatch (addProduct({ ...item, quantity, content, size}));
        }

    const toggleModal = () =>{
        setModal(!modal)
    }   
    if(modal){
        document.body.classList.add('overflow-hidden')
    } else  {
        document.body.classList.remove('overflow-hidden')
    }


    return (
            <div className='flex-1 flex flex-col bg-[#232B2B] min-w-[280px] h-[400px] m-1 rounded'>
                    <div className='flex justify-center items-center h-3/4 w-full' onClick={toggleModal}>
                        <img className='w-full h-full object-contain hover:scale-125 transition duration-500' src={item.img} alt='itemImg'/>
                    </div>
                    <div className='flex flex-col justify-center items-center w-full h-1/4'>
                        <h2 className='text-[#7CFC00] text-2xl'>{item.title}</h2>
                        <p className='text-orange-500 text-sm'>Rwf {item.price}/kg</p>
                    </div>
                    {modal && 
                    <div className='h-screen w-screen overflow-auto fixed bottom-0 left-0 right-0 top-0'>
                        <div className='h-screen w-screen fixed top-0 bottom-0 left-0 right-0 bg-black/[0.7]'></div>
                        <div className='absolute top-16 bottom-16 left-0 right-0 w-11/12 md:w-3/4 max-h-full 
                        container ml-auto mr-auto rounded bg-black overflow-auto border border-neutral-600'>              
                            <div className="w-full h-full">
                                <div className="w-full h-full flex flex-col md:flex-row">
                                    <div className="flex-1 h-[50vh] sm:h-full flex items-center justify-center bg-neutral-600">
                                        <img className="w-full h-full object-contain" src={item.img} alt='itemImg' />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center ml-2 p-8 text-neutral-500">
                                            <h1 className="text-3xl text-orange-500 mb-4 font-[500]">{item.title}</h1>
                                            <p className="text-[11px] mb-2">{item.description}</p>
                                            <p className="font-[900] text-orange-500">Rwf {item.price}</p>
                                            <div className=" flex flex-col md:flex-row justify-between">
                                                <div className=" flex items-center my-2">
                                                    <h3 className="font-[600] mr-1">Content:</h3>
                                                    {item.content?.map((c)=>(
                                                        <ProductTurnary key={c} onClick={()=>setContent(c)} color={c} />))}    
                                                </div>
                                                <div className="flex items-center">
                                                    <h3 className="font-[600] mr-1">Size:</h3>
                                                    <select className="bg-slate-300 rounded" onChange={(e)=>setSize(e.target.value) } >
                                                    {item.size?.map((s)=>(
                                                        <option className=" p-2" key={s}>{s}</option>
                                                    ))}
                                                    </select>
                                                </div>
                                        </div>
                                        <div className="flex flex-col my-8">
                                            <div className="flex justify-center items-center font-[700] mb-8">
                                                <Remove onClick={()=> handleQuantity("dec")} />
                                                <p className="w-[32px] h-[32px] border border-2 border-orange-500 rounded-lg flex 
                                                mx-3 justify-center items-center">{quantity}</p>
                                                <Add onClick={()=> handleQuantity("inc")} />
                                            </div>
                                            <div className="flex flex-col md:flex-row justify-between">
                                                <button className="flex px-3 py-1 border border-2 border-orange-400 font-Manrope justify-center
                                                font-[700] rounded text-orange-500 items-center my-2 tex-sm" onClick={handleCart}>ADD TO CART
                                                <ShoppingCartOutlined style={{fontSize:"16px",marginLeft:'5px'}}/></button>
                                                <button className="text-black px-3 py-1 my:2 rounded font-[700] bg-[#04AA6D] tex-sm font-Manrope">BUY NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='absolute top-1 right-1 flex-shrink-0 hover:border-red-500 text-3xl
                            text-red-700 py-1 px-2' onClick={toggleModal}><RiCloseLine /></button>
                        </div>
                    </div>}
            </div>
    )
}

export default PopularItem