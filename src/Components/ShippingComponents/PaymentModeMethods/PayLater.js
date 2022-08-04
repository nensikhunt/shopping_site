function PayLater() {
    return (
        <div className="phone-pe-main-parent">
            <h6>Select EMI Option</h6>
            <input type={"radio"} name="phonepe" required placeholder="Card Number*" className="phone-pe-input" /><span className="phone-pe-span">Credit Card EMI/Debit Card EMI</span><br />
            <input type={"radio"} name="phonepe" required placeholder="Name On Card*" className="phone-pe-input" /><span className="phone-pe-span">Zest Money</span><br />
            <input type={"radio"} name="phonepe" required placeholder="Card Number*" className="phone-pe-input" /><span className="phone-pe-span">Cardless EMI</span><br />
            <input type={"radio"} name="phonepe" required placeholder="Name On Card*" className="phone-pe-input" /><span className="phone-pe-span">FlexiPay by HDFC Bank</span><br />
        </div>
    );
}

export default PayLater;