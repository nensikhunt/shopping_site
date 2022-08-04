function CreditCard() {
    return (
        <div className="credit-card-main-parent">
            <h6>Credit/Debit Card</h6>
            <input type={"text"} name="cardnumber" required placeholder="Card Number*" className="credit-card-input" /><br />
            <input type={"text"} name="cardname" required placeholder="Name On Card*" className="credit-card-input" /><br />
            <input type={"text"} name="validthru" required placeholder="Valid Thru (MM/YY)*" className="credit-card-input" /><br />
            <input type={"text"} name="cvv" required placeholder="CVV*" className="credit-card-input" /><br />
            <button className="btn btn-secondary" style={{ width: "100%", marginTop: "20px", padding: "10px" }}>PAY NOW</button>
        </div>
    );
}

export default CreditCard;