import { Link } from 'react-router-dom';
import PriceDetail from "./PriceDetail";
import './PaymentMethod.css';
import CashOnDelivery from './PaymentModeMethods/CashOnDelivery';
import { useState } from 'react';
import PaymentOPtion from './PaymentModeMethods/PaymentOption';
import CreditCard from './PaymentModeMethods/CreditCard';
import PhonePe from './PaymentModeMethods/PhonePe';
import Paytm from './PaymentModeMethods/Paytm';
import NetBanking from './PaymentModeMethods/NetBanking';
import PayLater from './PaymentModeMethods/PayLater';
function PaymentMethod() {
    const[cashOnDelivery,setCashOnDelivery]=useState(true);
    const[creditCard,setCreditCard]=useState(false);
    const[phonePe,setPhonePe]=useState(false);
    const[paytm,setPaytm]=useState(false);
    const[netBanking,setNetBanking]=useState(false);
    const[payLater,setPayLater]=useState(false);

    const cashOnDeliveryBtn=()=>{
        setCashOnDelivery(true);
        setCreditCard(false);
        setPhonePe(false);
        setPaytm(false);
        setNetBanking(false);
        setPayLater(false);
    }
    const creditCardBtn=()=>{
        setCashOnDelivery(false);
        setCreditCard(true);
        setPhonePe(false);
        setPaytm(false);
        setNetBanking(false);
        setPayLater(false);
    }
    const phonePeBtn=()=>{
        setCashOnDelivery(false);
        setCreditCard(false);
        setPhonePe(true);
        setPaytm(false);
        setNetBanking(false);
        setPayLater(false);
    }
    const paytmBtn=()=>{
        setCashOnDelivery(false);
        setCreditCard(false);
        setPhonePe(false);
        setPaytm(true);
        setNetBanking(false);
        setPayLater(false);
    }
    const netBankingBtn=()=>{
        setCashOnDelivery(false);
        setCreditCard(false);
        setPhonePe(false);
        setPaytm(false);
        setNetBanking(true);
        setPayLater(false);
    }
    const payLaterBtn=()=>{
        setCashOnDelivery(false);
        setCreditCard(false);
        setPhonePe(false);
        setPaytm(false);
        setNetBanking(false);
        setPayLater(true);
    }
    return (
        <>
            <span className='breadcrums'> l paymentmethod</span>
            <div className="summary-method-main">
                <div className="product-summary">
                    <h6 style={{ margin: "10px" }}>Choose Payment Mode</h6>
                    <div className='payment-method-div'>
                        <PaymentOPtion clickFunction={[cashOnDeliveryBtn,creditCardBtn,phonePeBtn,paytmBtn,netBankingBtn,payLaterBtn]} />
                        <div className='payment-method-choose-option' id='demo'>
                            {
                                cashOnDelivery&&<CashOnDelivery />
                            }
                            {
                                creditCard&&<CreditCard />
                            }
                            {
                                phonePe&&<PhonePe />
                            }
                            {
                                paytm&&<Paytm />
                            }
                            {
                                netBanking&&<NetBanking />
                            }
                            {
                                payLater&&<PayLater />
                            }
                        </div>
                    </div>
                    <div className='gift-main'>
                        <div style={{ width: "50%", textAlign: "left" }}>
                            <i className="fa fa-gift" id="payment-icon"></i>
                            <span style={{ margin: "10px", fontWeight: "500" }}>Have a Gift Card?</span>
                        </div>
                        <div style={{ width: "50%", textAlign: "right" }}>
                            <Link to={"#"} style={{ textDecoration: "none", color: "#e38d8d" }}>APPLY GIFT CARD</Link>
                        </div>
                    </div>
                </div>
                <div className="price-detail">
                    <PriceDetail />
                </div>
            </div>
        </>
    );
}

export default PaymentMethod;