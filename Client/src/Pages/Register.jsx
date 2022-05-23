import { useState } from "react"
import { publicRequest } from "../requestMethode"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Announcement from "../Components/Navbar/Announcement"
import Footer from "../Components/Footer/Footer"


const Register = () => {
    const [username,setUsername] = useState("");
    const [err,setErr] = useState(null);
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [ConfirmPassword,setConfirmPassword] = useState("");
    const history = useHistory();

    const handleRegister=async (e)=>{
        e.preventDefault();
        if(password===ConfirmPassword){
            try {
                const res = await publicRequest.post("/auth/register",
                {username,password,email});
                history.push("/login");
                console.log(res)
            } catch(error){
                console.log(error)
                setErr(error.response.data.message)
            }
    } else {
        setErr("Confirmed password is no equal to password")
    }

    }

    return (
        <div className="bg-black">
            <Navbar />
            <Announcement />
            <div className="h-screen flex items-center justify-center bg-black">
                <div className="w-full md:w-2/3 lg:w-1/2 bg-gray-800 p-2 sm:p-8 m-2 sm:m-8">
                <h1 className="text-lg md:text-2xl text-[#04AA6D]">CREATE AN ACCOUNT</h1>
                    <form className="flex flex-col">
                        <input className="my-2 md:my-3 p-3 rounded" placeholder="UserName" onChange={(e)=>setUsername(e.target.value)} />
                        <input className="my-2 md:my-3 p-3 rounded" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                        <input className="my-2 md:my-3 p-3 rounded" placeholder="Password" type='password' onChange={(e)=>setPassword(e.target.value)} />
                        <input className="my-2 md:my-3 p-3 rounded" placeholder="Confirm-Password" type='password' onChange={(e)=>setConfirmPassword(e.target.value)}/>
                        <span className="my-4 text-sm">By creating an account,I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b></span>
                        {err? <p className="text-red-800 mb-2 font-[700]">{`*${err}*`}</p> : null}
                        <button className="w-1/2 py-2 p-4 bg-[#04AA6D] rounded font-[600] mb-2 disabled:cursor-wait 
                        hover:text-white" onClick={handleRegister} >CREATE</button>
                        <p className="text-gray-300 text-sm mb-4">Do you have an account?
                        <Link to="/login" className="hover:text-gray-500 font-[600] ml-2">Login</Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register