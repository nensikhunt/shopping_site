import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
function AddressMethod() {
    const cartProducts = useSelector(state => state.cartProduct);
    return (
        <div style={{width:"100%",display:"flex"}}>
            <div style={{ border: "1px solid lightgrey",width:"69%", margin: "10px", padding: "10px" }}>
                <h4>Select Delivery Address</h4>
                <div style={{ border: "1px solid lightgrey", margin: "10px", padding: "10px", borderRadius: "5px" }}>
                    <h3><i class='fas fa-phone-alt' style={{ color: 'grey', fontSize: "20px" }}></i> Contact Details</h3>
                    <input type={"text"} placeholder={"Name"} required style={{ width: "99%", margin: "5px", padding: "5px" }} /><br />
                    <input type={"text"} placeholder={"Phone Number"} required style={{ width: "99%", margin: "5px", padding: "5px" }} /><br />
                    <h3><i class='fas fa-map-marker-alt' style={{ color: 'grey', fontSize: "20px" }}></i> Address</h3>
                    <input type={"text"} placeholder={"House no. / Building Name"} required style={{ width: "99%", margin: "5px", padding: "5px" }} /><br />
                    <input type={"text"} placeholder={"Road Name / Area / Colony"} required style={{ width: "99%", margin: "5px", padding: "5px" }} /><br />
                    <input type={"text"} placeholder={"Pincode"} required style={{ width: "99%", margin: "5px", padding: "5px" }} /><br />
                    <input type={"text"} placeholder={"City"} required style={{ width: "48.74%", margin: "5px", padding: "5px" }} />
                    <input type={"text"} placeholder={"State"} required style={{ width: "48.74%", margin: "5px", padding: "5px" }} /><br />
                    <input type={"text"} placeholder={"Nearby Location (optional)"} style={{ width: "99%", margin: "5px", padding: "5px" }} /><br /><br />
                    <Link className="btn btn-primary" to="/paymentmethod" style={{width:"98%",padding:"10px",margin:"10px"}}>Address & Continue</Link>

                </div>
            </div>
            <div style={{ border: "1px solid lightgrey",width:"29%" ,margin: "10px", padding: "10px" }}>
                <h3>Price Details</h3>
                <div style={{ display: "flex", width: "100%" }}>
                    <div style={{ width: "50%" }}>
                        <span>Total Product Price</span>
                    </div>
                    <div style={{ width: "50%",textAlign:"right" }}>
                        <span>${cartProducts.reduce((total, item) => total + (item.sizes[0].price * item.quantity), 0)}</span>
                    </div>
                </div>
                <hr style={{ height: "2px", width: "100%", borderWidth: "0", color: "gray", backgroundColor: "gray" }} />
                <div style={{ display: "flex", width: "100%" }}>
                    <div style={{ width: "50%" }}>
                        <span>Order Total</span>
                    </div>
                    <div style={{ width: "50%",textAlign:"right" }}>
                        <span>${cartProducts.reduce((total, item) => total + (item.sizes[0].price * item.quantity), 0)}</span>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}

export default AddressMethod;