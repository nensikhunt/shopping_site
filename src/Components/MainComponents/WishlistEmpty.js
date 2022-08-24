import { useNavigate } from "react-router";
import "./WishlistEmpty.css";
function WishlistEmpty() {
    const navigate = useNavigate();

    return ( 
        <div className="wishlist-empty-main-div">
            <i class="fa fa-heart" style={{fontSize:"600%",margin:"5% 40%",color:"gray"}}></i>
            <h5>Your Wishlist is Empty</h5>
            <p>Create your first wishlist request</p>
            <button className="btn btn-secondary" onClick={()=>navigate('/product')}><i class="fa fa-plus"></i> &nbsp;Create New Wish</button>
        </div>
     );
}

export default WishlistEmpty;