import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { decrementProductAction, incrementProductAction, removeProductAction, removeAllProductAction } from "../Store/Action/ProductAction";

function Cart() {
    const cartProducts = useSelector(state => state.cartProduct);
    const cartProductLength = cartProducts.length;
    const dispatch = useDispatch();

    return (
        <>
            <h4 className="cart-h4">Shopping Cart</h4>
            {
                cartProductLength > 0 ?
                    <div className="add-to-cart">
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
                                            <span className="cart-value">Quantity : &nbsp;
                                                {
                                                    value.quantity <= 1 ? <button className="btn" onClick={() => dispatch(removeProductAction(value))}>remove</button> : <button className="quantity-btn" onClick={() => dispatch(decrementProductAction(value))}>-</button>
                                                }
                                                <span className="card-price">{value.quantity}</span>
                                                <button className="quantity-btn" onClick={() => dispatch(incrementProductAction(value))}>+</button>
                                            </span>
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
                        <button className="btn" onClick={() => dispatch(removeAllProductAction())}>remove all item</button>
                        <Link className="btn" to="/total">Proced To Checkout</Link>
                        <span>Total Amount : ${cartProducts.reduce((total, item) => total + (item.sizes[0].price * item.quantity), 0)}</span>&nbsp;
                        <span>Total Quantity : {cartProducts.reduce((total, item) => total + item.quantity, 0)}</span>
                    </div> :
                    <div className="add-to-cart">
                        <div className="cart-div-main">
                            <h3>Your Shopping Cart is empty</h3>
                        </div>
                    </div>
            }
        </>
    );
}

export default Cart;