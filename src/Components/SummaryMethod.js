import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { decrementProductAction, incrementProductAction, removeProductAction, removeAllProductAction } from "../Store/Action/ProductAction";
function SummaryMethod() {
    const cartProducts = useSelector(state => state.cartProduct);
    const dispatch = useDispatch();
    return (
        <div style={{ display: "flex", width: "100%" }}>
            <div style={{ border: "1px solid lightgrey", width: "69%", margin: "10px", padding: "10px" }}>
                <div style={{ width: "98%", margin: "10px", padding: "10px" }}>
                    <h5>Product Details</h5>
                    {
                        cartProducts.map((value, index) => {
                            return (
                                <div className="cart-div-main" key={index}>
                                    <div className="cart-product-div">
                                        <div className="cart-image">
                                            <img src={value.images} className="product-image" alt={value.title} />
                                        </div>
                                        <div className="cart-title">
                                            <h6 className="product-title">{value.title}</h6>
                                        </div>
                                    </div>
                                    <div className="cart-price">
                                        <span className="cart-value">Price : <span className="card-price">${value.sizes[0].price}</span></span>
                                    </div>
                                    <div className="cart-quntity">
                                        <span className="cart-value">Quantity : <span className="card-price">{value.quantity}</span></span>
                                    </div>
                                    <div className="cart-total">
                                        <span className="cart-value">Total :&nbsp;
                                            <span className="card-price">${value.sizes[0].price * value.quantity}</span>
                                            <span className="card-price"></span>
                                        </span>
                                        <button className="btn" onClick={() => dispatch(removeProductAction(value))}>delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{ width: "98%", margin: "10px", padding: "10px" }}>
                    <h5>Delivery Address</h5>
                </div>
                <div style={{ width: "98%", margin: "10px", padding: "10px" }}>
                    <h5>Payment Method</h5>
                </div>
            </div>
            <div style={{ borderLeft: "1px solid lightgrey", width: "29%", margin: "10px", padding: "10px" }}>
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
                <Link className="btn btn-primary" to="/summarymethod" style={{ width: "100%" }}>Place Order</Link>
            </div>
        </div>
    );
}

export default SummaryMethod;