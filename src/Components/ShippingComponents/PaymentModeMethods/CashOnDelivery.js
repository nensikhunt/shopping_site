import { useState } from "react";

function CashOnDelivery() {
    const [random, setrandom] = useState(Math.floor(10000 + Math.random() * 90000));
    const [input,setInputCode]=useState("");
    const changeRandomNumber=()=>{
        setrandom(Math.floor(10000 + Math.random() * 90000));
    }
    const codeChange=(e)=>{
        setInputCode({
            [e.target.name]:e.target.value
        });
    }
    const randomNumberSend=(e)=>{
        console.log(input.randomnumber);
        if (random!=input.randomnumber) {
            document.getElementById("code-error").innerHTML="Please enter valid code"
        }else{
            document.getElementById("code-error").innerHTML=""
        }
    }
    return (
        <div className="cash-on-delivery-main-parent">
            <h6>Pay on delivery (Cash/Card/UPI)</h6>
            <div className="cash-on-delivery-child">
                <div className="random-number-div">
                    <span style={{letterSpacing:"65px",width:"100%"}}>{random}</span>
                </div>
                <div className="change-random-number-div">
                    <span onClick={changeRandomNumber}> Change Image</span>
                </div>
            </div>
            <input name="randomnumber" placeholder="Enter code show in above image*" required onChange={codeChange} className="random-number-input" />
            <p id="code-error" style={{color:"#e38d8d"}}></p>
            <p style={{fontSize:"13px",color:"grey"}}>You can pay via Cash/Card or UPI enabled app at the time of delivery. Ask your delivery executive for these options.</p>
            <button className="btn btn-secondary" style={{width:"100%",marginTop:"20px",padding:"10px"}} onClick={randomNumberSend}>PLACE ORDER</button>
        </div>
    );
}

export default CashOnDelivery;