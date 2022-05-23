import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../Redux/apiCalls"
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import Footer from "../Components/Footer/Footer"


const Login = () => {
    const [username,setUsername] = useState("");
    const [err,setErr] = useState(null);
    const [password,setPassword] = useState("");
    const {isFetching,error} = useSelector((state)=> state.user)
    const dispatch = useDispatch();
    
    
    const handleClick = (e)=>{
        e.preventDefault();
        if (!username || !password) {
            setErr("All fields are required")
        } else {
            login(dispatch,{password,username});
            setErr(error.payload.message)
        }
    }

    return (
        <div className="bg-black">
            <Navbar />
            <Announcement />
            <div className="h-screen flex items-center justify-center bg-black">
                <div className="w-full md:w-2/3 lg:w-1/2 bg-gray-800 p-2 sm:p-8 m-2 sm:m-8">
                    <h1 className="text-2xl text-[#04AA6D]">SIGN IN</h1>
                    <form className="flex flex-col">
                        <input className="my-3 p-3 rounded" placeholder="Username" onChange={(e)=> setUsername(e.target.value)} />
                        <input className="my-3 p-3 rounded" placeholder="Password" type="password" onChange={(e)=> setPassword(e.target.value)} />
                        {err? <p className="text-red-800 mb-2 font-[700]">{`*${err}*`}</p> : null}
                        <button className="w-1/2 py-2 p-4 bg-[#04AA6D] rounded font-[600] mb-4 disabled:cursor-wait 
                        hover:text-white" onClick={handleClick}>{isFetching? 'Logging ...' : 'Login'}</button>
                        <p className="text-gray-300 text-sm">Don't you have account?
                        <Link to="/register" className="hover:text-gray-500 font-[600] ml-2">Create here</Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login