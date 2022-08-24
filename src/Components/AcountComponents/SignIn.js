import { useNavigate } from 'react-router';
import './Sign-In-Up.css';
function SignIn() {
    const navigate=useNavigate();
    return ( 
        <div className="signin-main">
            <h2>Sign In</h2>
            <span><strong>Email or mobile phone number</strong></span><br />
            <input type={"text"} required />
            <span><strong>Password</strong></span><br />
            <input type={"text"} required />
            <button className='btn btn-secondary'>Continue</button>
            <p>By continuing, you agree to Amazon's <span style={{color:"gray"}}>Conditions of Use</span> and <span style={{color:"gray"}}>Privacy Notice.</span></p>
            <span className='signin-span'>New To Shopping?</span>
            <button className='signin-button' onClick={()=>navigate("/signup")} >Create Your Shopping Account</button>
        </div>
     );
}

export default SignIn;