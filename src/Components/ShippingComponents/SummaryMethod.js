import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { removeProductAction, removeAllProductAction } from "../../Store/Action/ProductAction";
import PriceDetail from "./PriceDetail";
import './SummaryMethod.css';
function SummaryMethod(address) {
    const props=address.address.detail;
    const cartProducts = useSelector(state => state.cartProduct);
    const dispatch = useDispatch();
    return (
        <div className="summary-method-main">
            <div className="product-summary">
                {/* <div className="summary-product-detail">
                    <h5>Product Details</h5>
                    <div className="summary-product">
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
                                        <span className="cart-value">Price : <span className="card-price">Rs.{value.sizes[0].price}</span></span>
                                    </div>
                                    <div className="cart-quntity">
                                        <span className="cart-value">Quantity : <span className="card-price">{value.quantity}</span></span>
                                    </div>
                                    <div className="cart-total">
                                        <span className="cart-value">Total :&nbsp;
                                            <span className="card-price">Rs.{value.sizes[0].price * value.quantity}</span>
                                            <span className="card-price"></span>
                                        </span>
                                        <button className="btn" onClick={() => dispatch(removeProductAction(value))}>delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div> */}
                <div className="summary-delivery-address">
                    <h5>Delivery Address</h5>
                    <div className="delivery-summarry-address">
                    <h6>{props.name}</h6>
                    <p>{props.housename},{props.areaname},{props.address},{props.city},<br />{props.state}-{props.pincode}<br />+91 {props.phonenumber}</p>
                    </div>
                </div>
                <div className="summary-payment-method">
                    <h5>Payment Method</h5>
                    <div className="cash-summary">
                    <h5><i className="fa fa-dollar" id='cash-icon'></i> &nbsp;Cash on Delivery</h5>
                    </div>
                </div>
            </div>
            <div className="price-detail">
                <PriceDetail />
                <br />
                <p>Clicking on 'Continue' will not deduct any money</p>
                <Link className="btn btn-secondary" to="/thankyou" id="palceorder-btn">Place Order</Link>
            </div>
        </div>
    );
}

export default SummaryMethod;