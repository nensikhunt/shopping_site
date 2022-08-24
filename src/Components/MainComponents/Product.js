import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartProductAction, productAction, wishlistProductAction } from '../../Store/Action/ProductAction';
import Footer from "./Footer";

function Product() {
    let token;
    let headers;
    const navigate = useNavigate();
    const products = useSelector(state => state.product);
    const [effect, setEffect] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        getproducts();
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
    console.log(products);

    return (
        <>
            <div className="product-data-parent">
                {
                    effect &&
                    products?.map((value, index) => {
                        return (
                            <div className="product-data-child" key={index}>
                                <div className="geek-image-fade">
                                    <img key={index} src={value.colors[0].image} className="product-data-image" alt="New Spring Fall" onClick={() => navigate(`/product/${value.id}`)} />
                                </div>
                                {/* <div className="product-btn-addtocart">
                                <button style={{ width: "92%", margin: "10px", marginTop: "55%" }} className="btn btn-secondary" id="addtocart-product-btn" onClick={() => { navigate(`/product/${value.id}`) }}>Add To Cart</button>
                                dispatch(cartProductAction(value))
                            </div> */}
                                <div className="product-item-data">
                                    <div className="product-detail-title-price">
                                        <span style={{ margin: "10px" }}><strong>{value.title}</strong></span>
                                        <div style={{ display: "flex", width: "100%", padding: "10px" }}>
                                            <span style={{ float: "left", width: "70%" }}>Rs.{value.colors[0].price}</span>
                                            <i className='far fa-heart' style={{ fontSize: "20px", width: "30%", color: "gray", textAlign: "right", cursor: "pointer" }} onClick={() => dispatch(wishlistProductAction(value))}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
        </>
    );
}

export default Product;