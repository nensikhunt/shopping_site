import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartProductAction, productAction, wishlistProductAction } from '../../Store/Action/ProductAction';

function Product() {
    let token;
    let headers;
    const navigate = useNavigate();
    const products = useSelector(state => state.product);
    const [effect, setEffect] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        getproducts()
    }, [])

    const getproducts = async () => {
        token = localStorage.getItem("token");
        headers = { "token": token };
        const product = await axios.get("http://localhost:8000/product/all", { headers: headers })
            .catch(e => {
                console.log(e);
            })
        setEffect(true);
        dispatch(productAction(product.data.data));
    }
    return (
        <div className="product-data-parent">
            {
                effect &&
                products?.map((value, index) => {
                    return (
                        <div className="product-data-child" key={index}>
                            <img key={index} src={value.colors[0].image} className="product-data-image" alt="New Spring Fall" onClick={() => navigate(`/product/${value.id}`)} />
                            <div className="product-item-data">
                                <button style={{ width: "92%", margin: "10px" }} className="btn btn-secondary" onClick={() => dispatch(cartProductAction(value))}>Add To Cart</button>
                                <button style={{ width: "92%", margin: "0px 10px 10px 10px" }} className="btn btn-secondary" onClick={() => dispatch(wishlistProductAction(value))}>Add To Wishlist</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Product;