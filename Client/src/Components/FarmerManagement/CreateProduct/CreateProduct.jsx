import React,{useState} from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../../firebase'
import {useDispatch} from 'react-redux'
import {addProduct} from '../../../Redux/apiCalls'


const CreateProduct = ({farmer,setToggleCreate}) => {
    const [inputs,setInputs] = useState({});
    const [file,setFile] = useState(null);
    const [cat,setCat] = useState([]);
    const [size,setSize] = useState([]);
    const [content,setContent] = useState([]);
    const dispatch = useDispatch();

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
        const product = ({...inputs,img: downloadURL,categories:cat,content:content,size:size,farmer:farmer});
        addProduct(product,dispatch);
        });
        setToggleCreate(false)
    }
    );
    }


  return (
    <div className='my-8 p-2 md:px-8 border border-[#04AA6D] rounded'>
        <h1 className='text-xl'>Create New Product</h1>
        <form className='my-4 flex flex-col md:flex-row items-center justify-between'>
            <div className='flex-1 w-full md:mr-4'>
                <div className='flex flex-col my-2'>
                    <label>Title</label>
                    <input className='px-4 py-1 rounded bg-[#232B2B]' name="title" type="text" placeholder="Mango" onChange={handleChange} />
                </div>
                <div className='flex flex-col my-2'>
                    <label>Description</label>
                    <input className='px-4 py-1 rounded bg-[#232B2B]' name="description" type="text" placeholder="Good Fruits" onChange={handleChange}  />
                </div>
                <div className='flex flex-col my-2'>
                    <label>Categories</label>
                    <input className='px-4 py-1 rounded bg-[#232B2B]' type="text" placeholder="Fruits,vegetables..." onChange={handleCat} />
                </div>
                <div className='flex flex-col my-2'>
                    <label>Size</label>
                    <input className='px-4 py-1 rounded bg-[#232B2B]' type="text" placeholder="small,medium,big..." onChange={handleSize} />
                </div>
            </div>
            <div className='flex-1 w-full md:ml-4'>
                <div className='flex flex-col my-2'>
                    <label>Content</label>
                    <input className='px-4 py-1 rounded bg-[#232B2B]' type="text" placeholder="Green,white,red..." onChange={handleContent} />
                </div>
                <div className='flex flex-col my-2'>
                    <label>Price/Kg</label>
                    <input className='px-4 py-1 rounded bg-[#232B2B]' name="price" type="number" placeholder="200" onChange={handleChange} />
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
        <button className='py-2 px-4 my-4 bg-[#04AA6D] rounded' onClick={handleClick} >Create</button>
    </div>
  )
}

export default CreateProduct