import React,{useState} from 'react'
import { publicRequest } from "../../requestMethode"
import { useHistory } from "react-router"

const FarmerRegistor = ({setSignIn,signIn}) => {
    const [farmer,setFarmer] = useState({
        username:'',
        title:'',
        company:'',
        email:'',
        telephone:'',
        isFarmer:false,
        description:'',
        password:'',
        confirmedPassword:'',
        error:'',
        loading:false,
    });
    const {username,title,company,email,telephone,description,password,confirmedPassword,error,loading} = farmer;
    const history = useHistory();

    const handleChange = (e) =>{
        setFarmer({ ...farmer, [e.target.name] : e.target.value })
    };
    const handleRegisterFarmer=async (e)=>{
        e.preventDefault();
        setFarmer({ ...farmer,error:'',loading:true });

        if(!username || !email || !password || !confirmedPassword || !title || !company || !description || !telephone) {
            setFarmer({ ...farmer,error: '*All fields are required*' })
        } else if (password !== confirmedPassword) {
            setFarmer({ ...farmer,error: '*Confirm password must be equal to password*' })
        } else {
                try {
                    const res = await publicRequest.post("/farmerAuth/register",
                    {username,title,company,description,password,email,telephone,isFarmer:true});
                    setFarmer({
                        username:'',
                        title:'',
                        company:'',
                        email:'',
                        telephone:'',
                        isFarmer:false,
                        description:'',
                        password:'',
                        confirmedPassword:'',
                        error:'',
                        loading:false,
                    });
                    setSignIn(!signIn)
                    console.log(res)
                } catch(err){
                    setFarmer({ ...farmer,error:err,loading:false });
                    console.log(err)
                }
    } 
    }


  return (
        <div className='flex flex-col p-8 bg-gradient-to-tr from-[#04AA6D] to-[#24FE41]'>
            <div>
                <p className='text-sm md:text-lg lg:text-xl'>Are you Farmer?</p>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-[800] my-2'>Create account to join our farmers comunity</h3>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center my-4'>
                <div className='flex-1 flex flex-col md:mr-4 w-full text-white'>
                    <input placeholder='Names' name='username' value={username} onChange={handleChange} className='mb-2 px-4 py-2 bg-[#232B2B] rounded' />
                    <input placeholder='Company Name' name='company' value={company} onChange={handleChange} className='mb-2 px-4 py-2 bg-[#232B2B] rounded' />
                    <input placeholder='Title' name='title' value={title} onChange={handleChange} className='mb-2 px-4 py-2 bg-[#232B2B] rounded' />
                    <input placeholder='Email' name='email' value={email} onChange={handleChange} className='mb-2 px-4 py-2 bg-[#232B2B] rounded' />
                    <input placeholder='Telephone' name='telephone' value={telephone} onChange={handleChange} className='mb-2 px-4 py-2 bg-[#232B2B] rounded' />
                </div>
                <div className='flex-1 flex flex-col md:ml-4 w-full text-white'>
                    <textarea placeholder='Description' rows={4} name='description' value={description} onChange={handleChange} className='mb-2 px-4 py-2 bg-[#232B2B] rounded' />
                    <input placeholder='Password' name='password' value={password} onChange={handleChange} type='password' className='mb-2 px-4 py-2 bg-[#232B2B] rounded'/>
                    <input placeholder='Confirm Password' name='confirmedPassword' value={confirmedPassword} onChange={handleChange} type='password' className='px-4 py-2 bg-[#232B2B] rounded'/>
                </div>
            </div>
            <p className='text-sm my-2'>By creating an account,I consent to the processing of my personal data 
                in accordance with the <b>PRIVACY POLICY</b></p>
            <div>
                {error? <p className='text-red-900 font-bold text-sm my-2'>{farmer.error}</p> : null}
                <button className='bg-black text-white py-2 px-8 text-lg font-[700] rounded-md' onClick={handleRegisterFarmer}>
                {loading?'Creating ...' : 'Create'}</button>
                <div className='flex mt-4'>
                    <p className='text-[10px] md:text-sm'>Do you have an account?</p>
                    <h3 className='text-[10px] md:text-sm font-[700] cursor-pointer ml-1' onClick={()=>setSignIn(!signIn)}>
                        LogIn Here</h3>
                </div>
            </div>
        </div>
  )
}

export default FarmerRegistor