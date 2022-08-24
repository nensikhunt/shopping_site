import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

import './Detail.css';
import './Product.css';
import '../ShippingComponents/PriceDetail.css';
import './Navbar.css';

import Cart from "../ShippingComponents/Cart";
import Detail from "./Detail";
import Home from "./Home";
import Login from "../../ProductAddComponents/Login";
import Product from "./Product";
import ProductAdd from "../../ProductAddComponents/ProductAdd";
import Register from "../../ProductAddComponents/Register";
import Wishlist from "./Wishlist";
import AddressMethod from "../ShippingComponents/AddressMethod";
// import PaymentMethod from "../ShippingComponents/SummaryMethod";
// import SummaryMethod from "../ShippingComponents/PaymentMethod";
import ThankYou from "../ShippingComponents/ThankYou";
import Profile from "./Profile";
import SignIn from "../AcountComponents/SignIn";
import SignUp from "../AcountComponents/SignUp";

function Navbar() {
    const cartProducts = useSelector(state => state.cartProduct);
    const cartItem = cartProducts.length;
    return (
        <>
            <nav className="navbar navbar-expand-lg" id="navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src='./shooppping-logo2.jfif' style={{width:"100px",height:"50px"}} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Product</Link>
                            </li>
                        </ul>
                        <div className="nav-link" id="profile-main">
                            <i className="fa fa-user" id="profile-icon" style={{ fontSize: "25px", margin: "0px 20px", color: "gray" }}></i>
                            <Profile />
                        </div>
                        <Link className="nav-link" to="/wishlist">
                            <i className='far fa-heart' style={{ fontSize: "25px", margin: "0px 20px", color: "gray" }}></i>
                        </Link>
                        <Link className="nav-link" to="/cart">
                            <i className="fa fa-shopping-cart" style={{ fontSize: "25px",margin: "0px 20px", color: "gray",marginRight:"0px" }}></i>
                            <span style={{ fontSize: "20px", fontWeight: "400",marginRight:"10px" }}>{cartItem}</span>
                        </Link>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product" element={<Product />} />
                <Route path="/shippingmethods" element={<AddressMethod />} />
                {/* <Route path="/paymentmethod" element={<PaymentMethod />} /> */}
                {/* <Route path="/summarymethod" element={<SummaryMethod />} /> */}
                <Route path="/thankyou" element={<ThankYou />} />
                <Route path="/product/:id" element={<Detail />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                {/* product add pages */}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/productadd" element={<ProductAdd />} />
            </Routes>
        </>
    );
}

export default Navbar;