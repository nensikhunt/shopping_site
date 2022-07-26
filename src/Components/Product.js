import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartProductAction, productAction, wishlistProductAction } from '../Store/Action/ProductAction';

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
        token=localStorage.getItem("token");
        headers={"token":token};
        // console.log(headers);
        const product = await axios.get("http://localhost:8000/product/all",{headers:headers})
            .catch(e => {
                console.log(e);
            })            
        setEffect(true);
        dispatch(productAction(product.data.data));
        // console.log("res",product);
    }
// console.log(products);
    return (
        <>
            <h4 className="cart-h4">Our Products</h4>
            <div className="cart-main-div">
                {
                    effect &&
                    products?.map((value, index) => {
                        // {console.log(value.id)}
                        return (
                            
                            <div className="card m-9" key={index} style={{ width: "18rem", margin: "10px" }}>
                                <img src={value.images} className="card-img-top" alt="New Spring Fall" style={{ width: "200px", height: "200px", margin: "auto" }}  onClick={()=>navigate(`/product/${value.id}`)} />
                                <div className="card-body">
                                    <h5 className="card-title"  onClick={()=>navigate(`/product/${value.id}`)}>{value.title}</h5>
                                    {/* <h4>Price : <span className="card-price">${value.sizes[0].price}</span></h4>
                                    <h4>Size : <span className="card-price">{value.sizes[0].size}</span></h4> */}
                                    {/* {console.log("sizes",index,value.sizes[1])} */}
                                    {/* <button className="btn btn-primary" onClick={()=>navigate(`/product/${value.id}`)}>More Details</button> */}
                                    <button className="btn btn-primary" onClick={() => dispatch(cartProductAction(value))}>Add To Cart</button><br />
                                    <Link to={`/product/${value.id}`}>more detail</Link><br />
                                    <i className='far fa-heart' onClick={() => dispatch(wishlistProductAction(value))}></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Product;