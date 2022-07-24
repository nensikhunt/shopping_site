import { useSelector } from "react-redux";

function Total() {
    const cartProducts = useSelector(state => state.cartProduct);

    const totalAmount = cartProducts.reduce(function (prevValue, currValue) {
        return { price: prevValue.price + currValue.price }
    })

    return (
        <>
            <h4 className="cart-h4">Total</h4>
            <h4>total amount : $ {totalAmount.price}</h4>
        </>
    );
}

export default Total;