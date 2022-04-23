import React,{useState} from 'react'
import { DeleteOutline } from "@material-ui/icons";
import {deleteProduct} from '../../../Redux/apiCalls'
import {useDispatch} from 'react-redux';
import EditProduct from '../../FarmerManagement/EditProduct/EditProduct'
import { ProductTurnary } from './style'


const FarmerProduct = ({product}) => {
    const [toggleEdit,setToggleEdit] = useState(false);

    const handleToggleEdit = () => {
        setToggleEdit(!toggleEdit)
      }

    const dispatch=useDispatch();

    const handleDelete = (id) => {
        deleteProduct(id,dispatch)
      };
    
    return (
    <div className=' flex-1 flex flex-col bg-black m-1 max-w-[280px] rounded'>              
            <div className=" flex flex-col w-full h-[400px]">
                <div className="flex-1 w-full h-1/3 justify-center items-center">
                    <img className="w-full h-full object-cover" src={product.img} alt='itemImg' />
                </div>
                <div className="flex-1 flex flex-col justify-center ml-2 p-2 ">
                        <h1 className="text-lg text-orange-500 mb-2 font-[500]">{product.title}</h1>
                        <p className="text-[11px] mb-2 text-neutral-400">{product.description.split(' ').splice(0, 15).join(' ')}...</p>
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
                        <button className='bg-[#04AA6D] px-2 rounded' onClick={handleToggleEdit}>Edit</button>
                        <DeleteOutline style={{'color':'red','cursor':'pointer'}}
                        onClick={() => handleDelete(product._id)}/>            
                    </div>
                </div>
            </div>
            {toggleEdit && 
            <div className='h-screen w-screen overflow-auto fixed bottom-0 left-0 right-0 top-0'>
                <div className='h-screen w-screen fixed top-0 bottom-0 left-0 right-0 bg-black/[0.9]'></div>
                <div className='absolute top-16 bottom-16 md:bottom-36 left-0 right-0 w-11/12 max-h-full 
                container ml-auto mr-auto rounded bg-black overflow-auto'>              
                    <div className="w-full h-full">
                        <EditProduct product={product} handleToggleEdit={handleToggleEdit} />
                    </div>
                </div>
            </div>}
    </div>
    )
}

export default FarmerProduct