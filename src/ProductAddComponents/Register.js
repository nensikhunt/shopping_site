import axios from "axios";
import { useState } from "react";

function Register() {
    const [signupData, setsignupData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const signupDataChange = (e) => {
        setsignupData({
            ...signupData,
            [e.target.name]: e.target.value
        })
    }

    const signupDetail = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/user/add", signupData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            })

        setsignupData({
            ...signupData,
            username: "",
            email: "",
            password: ""
        })
    }

    return (
        <>
            <h4 className="cart-h4">Register User</h4>
            <form>
            Username:
            <input type={"text"} name={"username"} value={signupData.username}  onChange={signupDataChange} /><br />
            Email:
            <input type={"email"} name={"email"} value={signupData.email}  onChange={signupDataChange} /><br />
            Password:
            <input type={"password"} name={"password"} value={signupData.password}  onChange={signupDataChange} /><br />
            <button onClick={signupDetail}>Sign Up</button>
            </form>
        </>
    );
}

export default Register;