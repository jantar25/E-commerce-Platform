import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import FarmerRegistor from '../FarmerRegistor/FarmerRegistor';
import { farmerLogin } from "../../Redux/apiCalls"


const FarmerLogin = () => {
    const [signIn, setSignIn] = useState(true)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {isFetching,error} = useSelector((state)=> state.farmer)
    const dispatch = useDispatch();
    
    const handleClick = (e)=>{
        e.preventDefault();
        farmerLogin(dispatch,{password,email});
    }
    
  return (
    <div className='py-8 px-5 sm:px-20'>
        {signIn? (
             <div className='flex flex-col p-8 bg-gradient-to-tr from-[#04AA6D] to-[#24FE41]'>
             <div>
                 <p className='text-sm md:text-lg lg:text-xl'>Are you Farmer?</p>
                 <h3 className='text-xl md:text-2xl lg:text-3xl font-[800] my-2'>Want to join our comunity?</h3>
                 <p className='text-md md:text-xl lg:text-2xl font-[600]'>login here as Farmer</p>
             </div>
             <form className='flex flex-col md:flex-row justify-between items-center' onSubmit={handleClick}>
                 <div className='flex-1 flex flex-col my-4 md:mr-16 w-full text-white'>
                     <input required placeholder='Email' onChange={(e)=> setEmail(e.target.value)} className='mb-2 px-4 py-2 bg-[#232B2B] rounded'/>
                     <input required placeholder='Password' type="password" onChange={(e)=> setPassword(e.target.value)} className='px-4 py-2 bg-[#232B2B] rounded'/>
                 </div>
                 <div className='flex flex-col items-center justity-center'>
                     {error? <span className='text-red-800 py-2'>{`*${error.payload}*`}</span> : null}
                     <button className='bg-black text-white py-2 px-8 text-lg font-[700] rounded-md' type='submit'>
                         {isFetching? 'Logging ...' : 'Login'}</button>
                     <div className='flex mt-4'>
                         <p className='text-[10px] md:text-sm'>Don't you have an account?</p>
                         <h3 className='text-[10px] md:text-sm font-[700] cursor-pointer ml-1' onClick={()=>setSignIn(!signIn)}>Create Here</h3>
                     </div>
                 </div>
             </form>
         </div>
        ) : (
        <FarmerRegistor setSignIn={setSignIn} signIn={signIn} />
        )}
    </div>
  )
}

export default FarmerLogin