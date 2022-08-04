import { Link } from 'react-router-dom';
import PriceDetail from './PriceDetail';
import './SummaryMethod.css';
import { useState } from 'react';
import PaymentMethod from './PaymentMethod';
function SummaryMethod({ detail }) {
    const props =detail;
    const [address, setAddress] = useState(false)
    const paymentship = () => {
        setAddress(true);
    }
    return (
        <>
            <span className='breadcrums'> l summarymethod</span>

            {
                address ? <PaymentMethod />
                    : <div className='payment-method-main'>
                        <div className='payment-div'>
                            <h5>Delivery Address</h5>
                            <div className='cash-payment'>
                                <h6>{props.name}</h6>
                                <p>{props.housename},{props.areaname},{props.address},{props.city},<br />{props.state}-{props.pincode}<br />+91 {props.phonenumber}</p>
                                <button className='btn btn-secondary' style={{margin:"10px"}}>Remove</button>
                                <button className='btn btn-secondary' style={{margin:"10px"}}>Edit</button>
                            </div>
                            <h5>Payment Method</h5>
                            <div className='cash-payment'>
                                <h6>PAY IN CASH</h6>
                                <h5><i className="fa fa-dollar" id='cash-icon'></i>&nbsp;Cash on Delivery &nbsp;<input type={"checkbox"} name={"cashondelivery"} value={"Cash on Delivery"} readOnly checked /></h5><br />
                                <div className='order-outer'>
                                    <div className='order-inner1'>
                                        <h4>Reselling the Order?</h4>
                                        <p>Click on 'Yes' to add Final Price</p>
                                    </div>
                                    <div className='order-inner2'>
                                        <button className="btn btn-secondary" id='order-btn'>No</button>
                                        <button className="btn btn-secondary" id='order-btn'>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="price-detail">
                            <PriceDetail />
                            <br />
                            <p>Clicking on 'Continue' will not deduct any money</p>
                            <button className="btn btn-secondary" style={{ width: "100%" }} onClick={paymentship}>Continue</button>
                        </div>
                    </div>
            }
        </>
    );
}

export default SummaryMethod;