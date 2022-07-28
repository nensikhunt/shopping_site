import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartProductAction, productAction, wishlistProductAction } from '../Store/Action/ProductAction';

function Product() {
    let token;
    let headers;
    const navigate = useNavigate();
    // const [classs,setclass]=useState(false)
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
    // const wishlisthandler =(value)=>{
    //     dispatch(wishlistProductAction(value))
    //         const wish=products.find((item)=>item.id==value.id)
    //         console.log("wish",wish);
    //         if(wish){
    //             setclass(true)
    //         }
    // }
    return (
        <>
            <h4 className="cart-h4">Our Products</h4>
            <div className="cart-main-div">
                {
                    effect &&
                    products?.map((value, index) => {
                        return (
                            <div className="card m-9" key={index} style={{ width: "18rem", margin: "10px" }}>
                                <img src={value.images} className="card-img-top" alt="New Spring Fall" style={{ width: "200px", height: "200px", margin: "auto", cursor: "pointer" }} onClick={() => navigate(`/product/${value.id}`)} />
                                <div className="card-body">
                                    <h5 className="card-title" onClick={() => navigate(`/product/${value.id}`)} style={{ cursor: "pointer" }}>{value.title}</h5>
                                    <button className="btn btn-primary" onClick={() => dispatch(cartProductAction(value))}>Add To Cart</button><br />
                                    <Link to={`/product/${value.id}`}>more detail</Link><br />
                                    <i className='far fa-heart' onClick={() => dispatch(wishlistProductAction(value))}></i>
                                    {/* <button onClick={()=>wishlisthandler(value)} className= {classs?"notselected":"selected"}> wishlist</button> */}
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