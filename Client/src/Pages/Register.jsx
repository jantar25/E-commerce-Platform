import { useState } from "react"
import { publicRequest } from "../requestMethode"
import { useHistory } from "react-router"


const Register = () => {
    const [username,setUsername] = useState("");
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
            } catch(err){
                console.log(err)
            }
    } else {
        window.alert("Confirmed password is no equal to password")
    }

    }

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black">
            <div className="w-full md:w-2/3 lg:w-1/2 bg-gray-800 p-8 m-8">
            <h1 className="text-lg md:text-2xl text-[#04AA6D]">CREATE AN ACCOUNT</h1>
                <form className="flex flex-col">
                    <input className="my-2 md:my-3 p-3" placeholder="UserName" onChange={(e)=>setUsername(e.target.value)} />
                    <input className="my-2 md:my-3 p-3" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input className="my-2 md:my-3 p-3" placeholder="Password" type='password' onChange={(e)=>setPassword(e.target.value)} />
                    <input className="my-2 md:my-3 p-3" placeholder="Confirm-Password" type='password' onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <span className="my-4 text-sm">By creating an account,I consent to the processing of my personal
                     data in accordance with the <b>PRIVACY POLICY</b></span>
                    <button className="w-1/2 py-2 p-4 bg-[#04AA6D] rounded font-[600] mb-4 disabled:cursor-wait 
                    hover:text-white" onClick={handleRegister} >CREATE</button>
                </form>
            </div>
        </div>
    )
}

export default Register