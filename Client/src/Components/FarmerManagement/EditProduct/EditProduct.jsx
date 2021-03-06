import React,{useState} from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../../firebase'
import {useDispatch,useSelector} from 'react-redux'
import {updateProduct} from '../../../Redux/apiCalls'

const EditProduct = ({product,handleToggleEdit}) => {

    const [inputs,setInputs] = useState({});
    const [file,setFile] = useState(null);
    const [cat,setCat] = useState([]);
    const [size,setSize] = useState([]);
    const [content,setContent] = useState([]);
    const dispatch = useDispatch();
    const farmer=useSelector((state)=>state.farmer.currentFarmer);

    const handleChange = (e)=>{
    setInputs(prev=>{
        return  {...prev,[e.target.name]:e.target.value} 
    })
    }

    const handleCat = (e)=>{
    setCat(e.target.value.split(","));
    }
    const handleSize = (e)=>{
    setSize(e.target.value.split(","));
    }
    const handleContent = (e)=>{
    setContent(e.target.value.split(","));
    }


    const handleClick = (e)=>{
    e.preventDefault();

    if(!file){
        const updatedProduct = ({...inputs,categories:cat,content:content,size:size,farmer:farmer});
        const id=product._id;
        updateProduct(id,updatedProduct,dispatch);
    } else{
    const fileName = new Date().getTime() + file?.name;
    const storage = getStorage(app); 
    const storageRef = ref(storage,fileName);  
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
    (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
        case 'paused':
            console.log('Upload is paused');
            break;
        case 'running':
            console.log('Upload is running');
            break;
            default:
        }
    }, 
    (error) => {
        console.log(error)
    }, 
    () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        const updatedProduct = ({...inputs,img: downloadURL,categories:cat,content:content,size:size,farmer:farmer});
        const id=product._id;
        updateProduct(id,updatedProduct,dispatch);
        });
        handleToggleEdit()
    }
    );
    }
}
  return (
        <div className='p-2 w-full md:px-8 border bg-black border-[#04AA6D] rounded'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl'>Edit Product</h1>
                    <p className='text-red-500 font-[600] cursor-pointer' onClick={handleToggleEdit}>Close</p>
                </div>
                <form className='w-full my-4 flex flex-col md:flex-row items-center justify-between'>
                    <div className='flex-1 w-full md:mr-4'>
                        <div className='flex flex-col my-2'>
                            <label>Title</label>
                            <input className='px-4 py-1 rounded bg-[#232B2B]' name="title" type="text" placeholder={product.title} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label>Description</label>
                            <input className='px-4 py-1 rounded bg-[#232B2B]' name="description" type="text" placeholder={product.description} onChange={handleChange}  />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label>Categories</label>
                            <input className='px-4 py-1 rounded bg-[#232B2B]' type="text" placeholder={product.categories} onChange={handleCat} />
                        </div> 
                        <div className='flex flex-col my-2'>
                            <label>Size</label>
                            <input className='px-4 py-1 rounded bg-[#232B2B]' type="text" placeholder={product.size} onChange={handleSize} />
                        </div>
                    </div>
                    <div className='flex-1 w-full md:ml-4'>
                        <div className='flex flex-col my-2'>
                            <label>Content</label>
                            <input className='px-4 py-1 rounded bg-[#232B2B]' type="text" placeholder={product.content} onChange={handleContent} />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label>Price/Kg</label>
                            <input className='px-4 py-1 rounded bg-[#232B2B]' name="price" type="number" placeholder={product.price} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label>In Stock</label>
                            <select className='px-4 py-1 rounded bg-[#232B2B]' name="inStock" id="idStock" onChange={handleChange} >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <div className='flex flex-col my-2'>
                            <label>Image</label>
                            <input className='rounded bg-[#232B2B]' type="file" id="file" onChange={e=>setFile(e.target.files[0])} />
                        </div>
                    </div>
                </form>
                <button className='py-2 px-4 my-4 bg-[#04AA6D] rounded' onClick={handleClick} >Update</button>
            </div>
        )
        }

export default EditProduct