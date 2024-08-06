import"../login/Login.css"
import { FaGoogle, FaApple } from "react-icons/fa";
import { useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import UserContext from "../../components/contexts/UserContext";
export default function Login() {
    const{user,password,name,setName, setPassword}=useContext(UserContext);
    const navigate = useNavigate()
    const handleLogin=function(e){
        e.preventDefault();
      return  name.toLocaleLowerCase() === user.name.toLocaleLowerCase() 
      && password === user.password ? navigate("/homepage") :
      alert("Please fill the form with the correct information")
    };
    useEffect(()=>{
        AOS.init({duration: 1000})
      },[])
  return (
    <div className='form_wrapper '>   
        <form className="inputs_data" data-aos="fade-down">
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
