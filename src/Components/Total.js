import { useSelector } from "react-redux";

function Total() {
    const cartProducts = useSelector(state => state.cartProduct);

    // const totalAmount = cartProducts.reduce(function (prevValue, currValue) {
    //     return { price: prevValue.price + currValue.price }
    // })
    // console.log(totalAmount);

    return (
        <>
            <h4 className="cart-h4">Total</h4>
            {/* <h4>total amount : $ {totalAmount.price}</h4> */}
            <h1>total price :{cartProducts.reduce((total, item)=>total+(item.sizes[0].price*item.quantity),0)}</h1>
        </>
    );
}

export default Total;