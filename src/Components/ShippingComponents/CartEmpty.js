import { useNavigate } from "react-router";
import "./CartEmpty.css";
function CartEmpty() {
    const navigate = useNavigate();

    return ( 
        <div className="cart-empty-main-div">
            <i className="fas fa-cart-plus" style={{fontSize:"600%",margin:"5% 40%",color:"gray"}}></i>
            <h5>Your Cart is Empty</h5>
            <p>Add something to make me happy :)</p>
            <button className="btn btn-secondary" onClick={()=>navigate('/product')}>Continue Shopping</button>
        </div>
     );
}

export default CartEmpty;