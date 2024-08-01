import"../login/Login.css"
import { FaGoogle, FaApple } from "react-icons/fa";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const user ={
        name: "Emmanuel",
        password: "1234",
    };
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handleLogin=function(e){
        e.preventDefault();
      return  name.toLocaleLowerCase() === user.name.toLocaleLowerCase() 
      && password === user.password ? navigate("/homepage") :
      alert("Please fill the form with the correct information")
        
    };
  return (
    <div className='form_wrapper '>   
        <form className="inputs_data">
            <input type="text"  placeholder='enter your name' value={name}
             onChange={(e)=> setName(e.target.value)} className="inputs"/>
            <input type="password" placeholder='password' value={password} 
            onChange={(e)=> setPassword(e.target.value)} className="inputs"/>
            <div className='Login_icons'>
                <h3>Sign in with </h3>
                <div>
                <FaGoogle />
                <FaApple />
                </div>
            </div>
            <div className='btn_wrapper'>
                <button className='btn_sign_up btn_' >
                    Sign up
                </button>
                <button className='btn_Login  btn_' onClick={(e)=> handleLogin(e)}>
                    Login
                </button>
            </div>
        </form>
    </div>
  )
}
