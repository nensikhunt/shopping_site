function NetBanking() {
    return (
        <div className="phone-pe-main-parent">
            <h6>Net Banking</h6>
            <input type={"radio"} name="phonepe" required placeholder="Card Number*" className="phone-pe-input" /><span className="phone-pe-span">Axis Bank</span><br />
            <input type={"radio"} name="phonepe" required placeholder="Name On Card*" className="phone-pe-input" /><span className="phone-pe-span">HDFC Bank</span><br />
            <input type={"radio"} name="phonepe" required placeholder="Valid Thru (MM/YY)*" className="phone-pe-input" /><span className="phone-pe-span">Kotak</span><br />
            <input type={"radio"} name="phonepe" required placeholder="Card Number*" className="phone-pe-input" /><span className="phone-pe-span">ICICI Bank</span><br />
            <input type={"radio"} name="phonepe" required placeholder="Name On Card*" className="phone-pe-input" /><span className="phone-pe-span">SBI</span><br />
            <select className="phone-pe-input">
                <option className="phone-pe-input">Bank Of India</option>
            </select>
        </div>
    );
}

export default NetBanking;