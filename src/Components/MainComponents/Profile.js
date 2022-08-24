import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
    const navigate = useNavigate();
    return (
        <div className="profile-main-div">
            <h6 style={{ color: "black" }}>Welcome</h6>
            <span>To access account and manage orders</span><br />
            <button className="btn btn-secondary" id="profile-btn" onClick={() => navigate('/signin')} >LOGIN/SIGNUP</button>
            <hr />
            <Link to={"#"} className="profile-link">Orders</Link><br />
            <Link to={"#"} className="profile-link">Wishlist</Link><br />
            <Link to={"#"} className="profile-link">Gift Cards</Link><br />
            <Link to={"#"} className="profile-link">Contact US</Link><br />
            <hr />
            <Link to={"#"} className="profile-link">Coupons</Link><br />
            <Link to={"#"} className="profile-link">Save Cards</Link><br />
            <Link to={"#"} className="profile-link">Save Addresses</Link><br />
            <hr />
            <h6 style={{ color: "black" }}>Add your product</h6>
            <Link to={"/register"} className="profile-link">Register</Link><br />
            <Link to={"/login"} className="profile-link">Login</Link><br />
            <Link to={"/productadd"} className="profile-link">ProductAdd</Link><br />
        </div>
    );
}

export default Profile;