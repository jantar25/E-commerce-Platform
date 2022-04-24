import React,{useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory,useLocation } from 'react-router';
import decode from 'jwt-decode';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { farmerLogoutDone,updateFarmer } from '../Redux/apiCalls';
import app from '../firebase' 
import Navbar from '../Components/Navbar/Navbar';
import Announcement from '../Components/Navbar/Announcement';
import Footer from "../Components/Footer/Footer"
import { BsCamera } from 'react-icons/bs'
import { AiFillCaretUp,AiFillCaretDown } from "react-icons/ai";
import avatar from '../Images/avatar.png'
import CreateProduct from '../Components/FarmerManagement/CreateProduct/CreateProduct';
import FarmerProducts from '../Components/FarmerProducts/FarmerProducts';
import FarmerOrders from '../Components/FarmerOrders/FarmerOrders';



const Profile = () => {
  const [toggleCreate,setToggleCreate] = useState(false)
  const [toggleOrders,setToggleOrders] = useState(false)
  const [img,setImg] = useState('')
  const farmer=useSelector((state)=>state.farmer.currentFarmer);
  const dispatch=useDispatch();
  const history= useHistory();
  const location= useLocation();
  
  const handleLogout= ()=>{
    farmerLogoutDone(dispatch);
    history.push('/');
}
  const handleToggleCreate = () => {
    setToggleCreate(!toggleCreate)
  }

  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders)
  }

if(img){
const fileName = new Date().getTime() + img?.name;
const storage = getStorage(app); 
const storageRef = ref(storage,fileName);  
const uploadTask = uploadBytesResumable(storageRef, img);

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
    const updatedFarmer = {img: downloadURL};
    const id=farmer._id;
    updateFarmer(id,updatedFarmer,dispatch);
    });
}
);
}

  useEffect(()=>{
      const currentToken = localStorage.getItem("persist:root");
      const token =currentToken? 
      JSON.parse(JSON.parse(localStorage.getItem("persist:root")).farmer).currentUser?.accessToken : "";  
       
     if(token){
         const decodedToken=decode(token);
         const today = new Date().getTime();
         const inToken=decodedToken.exp*1000;
         if (inToken < today) {
          farmerLogoutDone(dispatch);
          history.push('/');
         }
                }
  },[location,dispatch,history])

  return (
    <div className='text-white bg-[#000]'>
      <Navbar />
      <Announcement />
      <div className='py-8 px-4 md:px-8'>
          <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
              <div className='flex-1 flex flex-col items-center justity-center'>
                <h1 className='text-xl md:text-3xl font-[600] mt-4 text-[#04AA6D]'>{farmer.username}</h1>
                <div className='flex mb-8'>
                    <p className='text-sm md:text-md text-gray-500'>{farmer.title} at</p>
                    <h4 className='text-sm md:text-md ml-2 font-[600] text-gray-300'>{farmer.company}</h4>
                </div>
                <p className='text-[12px] md:text-sm text-center font-[200] mb-4 text-gray-300'>{farmer.description}</p>
                <button className='bg-[#04AA6D] text-black mt-4 py-2 px-8 text-lg font-[700] rounded-md' onClick={handleLogout}>Logout</button>
              </div>
                <div className='flex-1 flex items-center justify-center mt-4 md:mt-0'>
                  <div className='relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] my-4 md:ml-4'>
                      <img src={farmer.img || avatar} alt='profileImg' className='w-full h-full rounded-full object-cover ring-2 ring-black' />
                      <div className='absolute w-[40px] h-[40px] rounded-full text-white bg-[#04AA6D] bottom-[10px] md:bottom-[25px] 
                      right-[10px] md:right-[25px]  flex justify-center items-center'>
                          <input type="file" accept='Image/*' style={{display:'none'}} id="file" onChange={(e)=>setImg(e.target.files[0])} />
                          <label htmlFor="file"><BsCamera style={{fontSize:'25px',cursor:'pointer'}}/></label>
                      </div>
                  </div>
                </div>
          </div>
          <button className='flex items-center text-[#04AA6D] mt-8 font-[600]' onClick={handleToggleCreate}>
              ADD NEW PRODUCT{toggleCreate? <AiFillCaretUp style={{fontSize:'20px'}}/> : <AiFillCaretDown style={{fontSize:'20px'}}/>} </button>
          <div className='my-8'>
            {toggleCreate? <CreateProduct farmer={farmer} setToggleCreate={setToggleCreate} /> : null}
          </div>
          <button className='flex items-center text-[#04AA6D] mt-8 font-[600]' onClick={handleToggleOrders}>
              VIEW ORDERS{toggleOrders? <AiFillCaretUp style={{fontSize:'20px'}}/> : <AiFillCaretDown style={{fontSize:'20px'}}/>} </button>
          <div className='my-8'>
            {toggleOrders? <FarmerOrders farmer={farmer} /> : null}
          </div>
          <h1 className='flex items-center text-[#04AA6D] mt-8 font-[600] mb-4'>PRODUCTS YOU ADDED</h1>
          <div className='relative bg-[#232B2B]'>
            <FarmerProducts />
          </div>
        <Footer />
    </div>
    </div>
  )
}

export default Profile