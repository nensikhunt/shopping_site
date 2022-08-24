import { useDispatch, useSelector } from "react-redux";
import { removeAllWishlistProductAction, removeWishlistProductAction } from "../../Store/Action/ProductAction";
import WishlistEmpty from "./WishlistEmpty";

function Wishlist() {
    const wishlistProduct = useSelector(state => state.wishlistProduct);
    const wishlistProductLength = wishlistProduct.length;
    const dispatch = useDispatch();

    const removeWishlist = (value) => {
        dispatch(removeWishlistProductAction(value));
    }
    return (
        <>
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
                                                <img src={value.images} className="product-image" alt={value.title} />
                                            </div>
                                            <div className="cart-title">
                                                <h6 className="product-title">{value.title}</h6>
                                            </div>
                                        </div>
                                        <div className="cart-price">
                                            <span className="cart-value">Price : <span className="card-price">Rs.{value.price}</span></span>
                                        </div>
                                        <button className="btn" onClick={() => removeWishlist(value)}>remove</button>
                                    </div>
                                )
                            })
                        }
                    </> :
                    <div className="add-to-cart">
                        <WishlistEmpty />
                    </div>
            }
        </>
    );
}

export default Wishlist;