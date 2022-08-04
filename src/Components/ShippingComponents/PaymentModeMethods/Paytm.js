function Paytm() {
    return (
        <div className="phone-pe-main-parent">
            <h6>Select wallet to pay</h6>
            <input type={"radio"} name="phonepe" required placeholder="Card Number*" className="phone-pe-input" /><span className="phone-pe-span">Paytm (Wallets,Postpaid)</span><br />
            <input type={"radio"} name="phonepe" required placeholder="Name On Card*" className="phone-pe-input" /><span className="phone-pe-span">PayZapp</span><br />
            <input type={"radio"} name="phonepe" required placeholder="Valid Thru (MM/YY)*" className="phone-pe-input" /><span className="phone-pe-span">Mobikwik</span><br />
            <input type={"radio"} name="phonepe" required placeholder="Card Number*" className="phone-pe-input" /><span className="phone-pe-span">Airtel Money</span><br />
            <input type={"radio"} name="phonepe" required placeholder="Name On Card*" className="phone-pe-input" /><span className="phone-pe-span">Free Charge (Wallet + Pay Later)</span><br />
            <input type={"radio"} name="phonepe" required placeholder="Valid Thru (MM/YY)*" className="phone-pe-input" /><span className="phone-pe-span">Ola Money (Wallet + PostPaid)</span><br />
        </div>
    );
}

export default Paytm;