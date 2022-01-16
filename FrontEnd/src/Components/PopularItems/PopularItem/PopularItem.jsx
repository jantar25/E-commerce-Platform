import { Add, Remove,ShoppingCartOutlined } from "@material-ui/icons"
import { useState } from "react"
import { addProduct } from "../../../Redux/cartRedux"
import { useDispatch } from "react-redux"
import {RiCloseLine} from 'react-icons/ri'


const PopularItem = ({item}) => {
    const [modal,setModal] = useState(false);
    const [product,setProduct] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [content,setContent] = useState("");
    const [size,setSize] = useState("");
    const dispatch = useDispatch();

    const handleQuantity = (type)=>{
        if(type==="dec"){
           quantity >1 && setQuantity(quantity-1)
        } else {
            setQuantity(quantity+1)
        }
    }
    
    const handleClick = ()=>{
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
                        <img className='w-full h-full object-contain hover:scale-125 transition duration-500' src={item.img}/>
                    </div>
                    <div className='flex flex-col justify-center items-center w-full h-1/4'>
                        <h2 className='text-[#7CFC00] text-lg'>{item.title}</h2>
                        <p className='text-orange-500 text-lg'>Rwf {item.price}/kg</p>
                    </div>
                    {modal && 
                    <div className='h-screen w-screen overflow-auto fixed bottom-0 left-0 right-0 top-0'>
                        <div className='h-screen w-screen fixed top-0 bottom-0 left-0 right-0 bg-black/[0.9]'></div>
                        <div className='absolute top-8 bottom-8 left-0 right-0 w-3/4 bg-slate-50 max-h-full 
                        container ml-auto mr-auto overflow-auto'>              
                            <div>
                                <div className="flex flex-col md:flex-row p-8">
                                    <div className="flex-1">
                                        <img className="w-full h-[80vh]" src={item.img} />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center ml-2">
                                            <h1 className="text-lg text-orange-500 mb-4 font-[500]">{item.title}</h1>
                                            <p className="text-[11px] mb-2">{item.description}</p>
                                            <p className="font-[900]">Rwf {item.price}</p>
                                            <div className=" flex justify-between">
                                                <div className=" flex items-center">
                                                    <h3 className="font-[600] mr-1">Content:</h3>
                                                    {item.content?.map((c)=>(
                                                        <div className={`w-[15px] h-[15px] my-2 rounded-full cursor-pointer bg-${c}-600`}
                                                     key={c} onClick={()=>setContent(c)} />
                                                     
                                                    ))}
                                                    
                                                </div>
                                                <div className="flex items-center">
                                                    <h3 className="font-[600] mr-1">Size:</h3>
                                                    <select className="" onChange={(e)=>setSize(e.target.value) } >
                                                    {item.size?.map((s)=>(
                                                        <option className="p-2" key={s}>{s}</option>
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
                                            <div className="flex justify-between">
                                                <button className="flex px-3 py-1 border border-2 border-orange-400 font-Manrope
                                                font-[700] rounded text-gray-500 items-center tex-sm" onClick={handleClick}>ADD TO CART
                                                <ShoppingCartOutlined style={{fontSize:"16px",marginLeft:'5px'}}/></button>
                                                <button className="px-3 py-1 rounded font-[700] bg-[#04AA6D] tex-sm font-Manrope">BUY NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='absolute top-1 right-2 flex-shrink-0 hover:border-red-500 text-5xl
                            text-red-700 py-1 px-2' onClick={toggleModal}><RiCloseLine /></button>
                    </div>}
            </div>
    )
}

export default PopularItem