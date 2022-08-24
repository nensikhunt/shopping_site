function PaymentOPtion(props) {
    return (
        <div className='payment-method-option'>
            <div className='payment-method-choose-btn'>
                <button className='payment-option active' onClick={props.clickFunction[0]}>
                    <div className='payment-method-icon'>
                        <i className="fa fa-money" id="payment-icon"></i>
                    </div>
                    <div className='payment-method-name'>
                        Cash On Delivery (Cash/Card/UPI)
                    </div>
                </button>
                <button className='payment-option' onClick={props.clickFunction[1]}>
                    <div className='payment-method-icon'>
                        <i className="fa fa-credit-card" id="payment-icon"></i>
                    </div>
                    <div className='payment-method-name'>
                        Credit/Debit Card
                    </div>
                </button>
                <button className='payment-option' onClick={props.clickFunction[2]}>
                    <div className='payment-method-icon'>
                        <i className='fab fa-google-pay fa-border' id="payment-icon"></i>
                    </div>
                    <div className='payment-method-name'>
                        Phone Pe/Google Pay/BHIM UPI
                    </div>
                </button>
                <button className='payment-option' onClick={props.clickFunction[3]}>
                    <div className='payment-method-icon'>
                        <i className="fas fa-wallet" id="payment-icon"></i>
                    </div>
                    <div className='payment-method-name'>
                        Paytm/Wallets
                    </div>
                </button>
                <button className='payment-option' onClick={props.clickFunction[4]}>
                    <div className='payment-method-icon'>
                        <i className="fa fa-bank" id="payment-icon"></i>
                    </div>
                    <div className='payment-method-name'>
                        Net Banking
                    </div>
                </button>
                <button className='payment-option' onClick={props.clickFunction[5]}>
                    <div className='payment-method-icon'>
                        <i className="fas fa-money-check" id="payment-icon"></i>
                    </div>
                    <div className='payment-method-name'>
                        EMI/Pay Later
                    </div>
                </button>
            </div>
        </div>
    );
}
export default PaymentOPtion;