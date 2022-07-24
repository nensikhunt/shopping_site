import { useDispatch, useSelector } from "react-redux";
import { removeAllWishlistProductAction, removeWishlistProductAction } from "../Store/Action/ProductAction";

function Wishlist() {
    const wishlistProduct = useSelector(state => state.wishlistProduct);
    const wishlistProductLength = wishlistProduct.length;
    const dispatch = useDispatch();

    const removeWishlist = (value) => {
        dispatch(removeWishlistProductAction(value));
    }
    return (
        <>
            <h4 className="cart-h4">your wish list</h4>
            {
                wishlistProductLength > 0 ?
                    <>
                        <button className="btn" onClick={() => dispatch(removeAllWishlistProductAction())}>remove all wishlist</button>
                        {
                            wishlistProduct.map((value, index) => {
                                return (
                                    <div className="cart-div-main" key={index}>
                                        <div className="cart-product-div">
                                            <div className="cart-image">
                                                <img src={value.image} className="product-image" alt={value.title} />
                                            </div>
                                            <div className="cart-title">
                                                <h6 className="product-title">{value.title}</h6>
                                            </div>
                                        </div>
                                        <div className="cart-price">
                                            <span className="cart-value">Price : <span className="card-price">${value.price}</span></span>
                                        </div>
                                        <button className="btn" onClick={() => removeWishlist(value)}>remove</button>
                                    </div>
                                )
                            })
                        }
                    </> :
                    <div className="add-to-cart">
                        <div className="cart-div-main">
                            <h3>you have not add our product in Wishlist</h3>
                        </div>
                    </div>
            }
        </>
    );
}

export default Wishlist;