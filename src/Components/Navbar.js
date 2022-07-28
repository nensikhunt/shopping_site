import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import Detail from "./Detail";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
import ProductAdd from "./ProductAdd";
import Register from "./Register";
import Total from "./Total";
import Wishlist from "./Wishlist";
import './Detail.css';
import './Product.css';
import AddressMethod from "./AddressMethod";
import PaymentMethod from "./PaymentMethod";
import SummaryMethod from "./SummaryMethod";

function Navbar() {
    const cartProducts = useSelector(state => state.cartProduct);
    const cartItem = cartProducts.length;
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Shopping Site</Link>
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
                            <li className="nav-item">
                                <Link className="nav-link" to="/wishlist">WishList</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/productadd">ProductAdd</Link>
                            </li>
                        </ul>
                        <Link className="nav-link" to="/cart">
                            <i className="fa fa-shopping-cart" style={{ fontSize: "36px",color:"#f7a099" }}></i>
                            <span style={{ fontSize: "20px",fontWeight:"400" }}>{cartItem}</span>
                        </Link>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product" element={<Product />} />
                <Route path="/total" element={<Total />} />
                <Route path="/addressmethod" element={<AddressMethod />} />
                <Route path="/paymentmethod" element={<PaymentMethod />} />
                <Route path="/summarymethod" element={<SummaryMethod />} />
                <Route path="/product/:id" element={<Detail />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/productadd" element={<ProductAdd />} />
            </Routes>
        </>
    );
}

export default Navbar;