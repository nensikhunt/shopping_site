function PhonePe() {
    return (
        <div className="phone-pe-main-parent">
            <h6>Pay using UPI</h6>
            <input type={"radio"} name="phonepe" required placeholder="Card Number*" className="phone-pe-input" /><span className="phone-pe-span">Phone pe</span><br />
            <input type={"radio"} name="phonepe" required placeholder="Name On Card*" className="phone-pe-input" /><span className="phone-pe-span">Google Pay</span><br />
            <input type={"radio"} name="phonepe" required placeholder="Valid Thru (MM/YY)*" className="phone-pe-input" /><span className="phone-pe-span">Enter UPI ID</span><br />
        </div>
    );
}

export default PhonePe;