import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
function PaymentMethod() {
    const cartProducts = useSelector(state => state.cartProduct);
    return (
        <div style={{ width: "100%", display: "flex" }}>
            <div style={{ border: "1px solid lightgrey", width: "69%", margin: "10px", padding: "10px" }}>
                <h4>Payment Method</h4>
                <div style={{ border: "1px solid lightgrey", margin: "10px", padding: "10px", borderRadius: "5px" }}>
                    <h6>PAY IN CASH</h6>
                    <h5><i class="fa fa-dollar" style={{ fontSize: '25px', color: "grey" }}></i> &nbsp;Cash on Delivery &nbsp;<input type={"checkbox"} /></h5><br />
                    <div style={{display:"flex"}}>
                        <div style={{width:"50%"}}>
                            <h4>Reselling the Order?</h4>
                            <p>Click on 'Yes' to add Final Price</p>
                        </div>
                        <div style={{width:"50%",margin:"10px"}}>
                            <button className="btn btn-primary" style={{margin:"10px"}}>No</button>
                            <button className="btn btn-primary">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ border: "1px solid lightgrey", width: "29%", margin: "10px", padding: "10px" }}>
                <h3>Price Details</h3>
                <div style={{ display: "flex", width: "100%" }}>
                    <div style={{ width: "50%" }}>
                        <span>Total Product Price</span>
                    </div>
                    <div style={{ width: "50%", textAlign: "right" }}>
                        <span>${cartProducts.reduce((total, item) => total + (item.sizes[0].price * item.quantity), 0)}</span>
                    </div>
                </div>
                <hr style={{ height: "2px", width: "100%", borderWidth: "0", color: "gray", backgroundColor: "gray" }} />
                <div style={{ display: "flex", width: "100%" }}>
                    <div style={{ width: "50%" }}>
                        <span>Order Total</span>
                    </div>
                    <div style={{ width: "50%", textAlign: "right" }}>
                        <span>${cartProducts.reduce((total, item) => total + (item.sizes[0].price * item.quantity), 0)}</span>
                    </div>
                </div>
                <br />
                <p>Clicking on 'Continue' will not deduct any money</p>
                <Link className="btn btn-primary" to="/summarymethod" style={{width:"100%"}}>continue</Link>
            </div>
        </div>
    );
}

export default PaymentMethod;