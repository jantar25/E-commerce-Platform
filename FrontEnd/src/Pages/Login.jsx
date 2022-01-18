import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../Redux/apiCalls"
import { Link } from "react-router-dom"


const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {isFetching} = useSelector((state)=> state.user)
    const dispatch = useDispatch();
    
    
    const handleClick = (e)=>{
        e.preventDefault();
        login(dispatch,{password,username});
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black">
            <div className="w-full md:w-2/3 lg:w-1/2 bg-gray-800 p-8 m-8">
                <h1 className="text-2xl text-[#04AA6D]">SIGN IN</h1>
                <form className="flex flex-col">
                    <input className="my-3 p-3" placeholder="Username" onChange={(e)=> setUsername(e.target.value)} />
                    <input className="my-3 p-3" placeholder="Password" type="password" onChange={(e)=> setPassword(e.target.value)} />
                    <button className="w-1/2 py-2 p-4 bg-[#04AA6D] rounded font-[600] mb-4 disabled:cursor-wait 
                    hover:text-white" onClick={handleClick} disabled={isFetching} >LOGIN</button>
                    <Link to="/password">
                        <p className="hover:text-red-500">Don't you remember your password?</p></Link>
                    <Link to="/register">
                        <p className="hover:text-red-500">Create a new account</p></Link>
                </form>
            </div>
        </div>
    )
}

export default Login