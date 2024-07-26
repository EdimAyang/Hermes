import"../login/Login.css"
import { FaGoogle, FaApple } from "react-icons/fa"

export default function Login() {
  return (
    <div className='form_wrapper'>   
        <form className="inputs_data">
            <input type="text"  placeholder='enter your name'/>
            <input type="number" placeholder='phone number'/>
            <div className='Login_icons'>
                <h3>Sign in with </h3>
                <div>
                <FaGoogle />
                <FaApple />
                </div>
            </div>
            <div className='btn_wrapper'>
                <button className='btn_sign_up btn' onClick={""}>
                    Sign up
                </button>
                <button className='btn_Login btn btn1' onClick={""}>
                    Login
                </button>
            </div>
        </form>
    </div>
  )
}
