import React,{useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory,useLocation } from 'react-router';
import decode from 'jwt-decode';
import { farmerLogoutDone } from '../Redux/apiCalls'; 
import Navbar from '../Components/Navbar/Navbar';
import Announcement from '../Components/Navbar/Announcement';
import Footer from "../Components/Footer/Footer"
import { BsCamera } from 'react-icons/bs'
import { AiFillCaretUp,AiFillCaretDown } from "react-icons/ai";
import avatar from '../Images/avatar.png'
import CreateProduct from '../Components/FarmerManagement/CreateProduct/CreateProduct';
import FarmerProducts from '../Components/FarmerProducts/FarmerProducts';


const Profile = () => {
  const [toggleCreate,setToggleCreate] = useState(false)
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
                      <img src={farmer.avatar || avatar} alt='profileImg' className='w-full h-full rounded-full object-cover ring-2 ring-black' />
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
          <h1 className='flex items-center text-[#04AA6D] font-[600] py-4'>PRODUCTS YOU ADDED</h1>
          <div className='relative bg-[#232B2B]'>
            <FarmerProducts />
          </div>
        <Footer />
    </div>
    </div>
  )
}

export default Profile