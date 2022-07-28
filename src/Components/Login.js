import axios from "axios"
import { useState } from "react"

function Login() {
    let token;
    const [loginData, setloginData] = useState({
        email: "",
        password: ""
    })

    const loginDataChange = (e) => {
        setloginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const loginDetail = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/user/login", loginData)
            .then((response) => {
                token=response.data.token;
                localStorage.setItem("token",token);
            })
            .catch((e) => {
                console.log(e);
            })

        setloginData({
            ...loginData,
            email: "",
            password: ""
        })
    }
    return ( 
        <>
            <h4 className="cart-h4">Log In</h4>
            <form>
            Email:
            <input type={"email"} name={"email"} onChange={loginDataChange} /><br />
            Password:
            <input type={"password"} name={"password"} onChange={loginDataChange} /><br />
            <button onClick={loginDetail}>Log In</button>
            </form>
        </>
     );
}

export default Login;