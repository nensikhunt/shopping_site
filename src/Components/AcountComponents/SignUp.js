import { Link } from "react-router-dom";

function SignUp() {
    return ( 
        <div className="signin-main">
            <h2>Create Account</h2>
            <span><strong>Your name</strong></span><br />
            <input type={"text"} required placeholder="First and last name" />
            <span><strong>Mobile number</strong></span><br />
            <input type={"text"} required placeholder="Mobile number" />
            <span><strong>Email</strong></span><br />
            <input type={"text"} required placeholder="Email" />
            <span><strong>Password</strong></span><br />
            <input type={"text"} required placeholder="At least 6 characters" />
            <p style={{marginTop:"10px"}}>We will send you a text to verify your phone. Message and Data rates may apply.</p>
            <button className='btn btn-secondary'>Continue</button>
            <span>Already have an account? <Link to={"/signin"}>Sign in</Link></span>
        </div>
     );
}

export default SignUp;