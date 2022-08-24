import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import "./Cart.css";
import { decrementProductAction, incrementProductAction, removeProductAction, removeAllProductAction } from "../../Store/Action/ProductAction";
import PriceDetail from "./PriceDetail";
import CartEmpty from "./CartEmpty";

function Cart() {
    const cartProducts = useSelector(state => state.cartProduct);
    const cartProductLength = cartProducts.length;
    const dispatch = useDispatch();
    return (
        <>
            {
                cartProductLength > 0 ?
                    <div className="add-to-cart">
                        {/* <button className="btn" onClick={() => dispatch(removeAllProductAction())}>remove all item</button> */}
                        <div className="add-to-cart-product">
                            {
                                cartProducts.map((value, index) => {
                                    return (
                                        <div className="cart-div-main" key={index}>
                                            <div className="cart-product-image">
                                                <img src={value.images} className="product-image" alt={value.title} />
                                            </div>
                                            <div className="cart-product-title">
                                                <span className="product-title">{value.title}</span>
                                            </div>
                                            <div className="cart-price">
                                                <span className="cart-value">Price : Rs.<span className="card-price">{value.sizes[0].price}</span></span>
                                            </div>
                                            <div className="cart-quntity">
                                                <span className="cart-value">Qty : <span className="card-price" id="qty">{value.quantity}</span><br />
                                                    {
                                                        value.quantity <= 1 ?
                                                            <button className="btn btn-secondary" id="qty-btn" onClick={() => dispatch(removeProductAction(value))}>-</button> :
                                                            <button className="btn btn-secondary" id="qty-btn" onClick={() => dispatch(decrementProductAction(value))}>-</button>
                                                    }
                                                    <button className="btn btn-secondary" id="qty-btn" onClick={() => dispatch(incrementProductAction(value))}>+</button>
                                                </span>
                                            </div>
                                            <div className="cart-total">
                                                <span className="cart-value">Total : Rs.
                                                    <span className="card-price">{value.sizes[0].price * value.quantity}</span>
                                                </span>
                                            </div>
                                            <div className="cart-product-btn">
                                                <span><i className='fas fa-trash-alt' style={{ fontSize: "24px", color: "grey" }}></i></span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="price-detail">
                            <PriceDetail />
                            <br />
                            <p>Clicking on 'Continue' will not deduct any money</p>
                            <Link className="btn btn-secondary" to="/shippingmethods" id="continue-btn">Place Order</Link>
                        </div>
                    </div> :
                    <div className="add-to-cart">
                        <CartEmpty />
                    </div>
            }
        </>
    );
}

export default Cart;