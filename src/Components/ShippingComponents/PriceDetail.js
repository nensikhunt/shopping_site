import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
function PriceDetail() {
    const cartProducts = useSelector(state => state.cartProduct);
    const discount=200;
    const finalTotal=cartProducts.reduce((total, item) => total + (item.sizes[0].price * item.quantity), 0)-discount;
    return (
        <>
            <h3>Price Details</h3>
            <div className="total-price" style={{borderBottom:"1px solid lightgrey"}}>
                <div className="total-price-inner1">
                    <span>Total Item Quantity</span>
                </div>
                <div className="total-price-inner2">
                    <span>{cartProducts.reduce((total, item) => total + item.quantity, 0)} Item</span>
                </div>
            </div>
            {/* <hr className="price-detail-hr" /> */}
            <div className="total-price">
                <div className="total-price-inner1">
                    <span>Total Product Price</span>
                </div>
                <div className="total-price-inner2">
                    <span>Rs.{cartProducts.reduce((total, item) => total + (item.sizes[0].price * item.quantity), 0)}</span>
                </div>
            </div>
            <div className="total-price">
                <div className="total-price-inner1">
                    <span>Discount Price</span>
                </div>
                <div className="total-price-inner2">
                    <span>- Rs.{discount}</span>
                </div>
            </div>
            <div className="total-price">
                <div className="total-price-inner1">
                    <span>Coupon Discount Price</span>
                </div>
                <div className="total-price-inner2">
                    <span><Link to="#" style={{color:"#e38d8d",textDecoration:"none"}}>Apply</Link></span>
                </div>
            </div>
            <hr className="price-detail-hr" />
            <div className="total-price">
                <div className="total-price-inner1">
                    <span>Order Total</span>
                </div>
                <div className="total-price-inner2">
                    <span>Rs.{finalTotal}</span>
                </div>
            </div>
        </>
    );
}

export default PriceDetail;