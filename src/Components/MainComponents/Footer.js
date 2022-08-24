import { Link } from 'react-router-dom';
import './Footer.css'
function Footer() {
    return (
        <div className="main">
            <div className="main-footer">
                <div className='navigation-link-footer'>
                    <div className="inner-div-footer">
                        <h5>TOP CATEGORIES</h5>
                        <div className="inner-footer-contain">Lehenga</div>
                        <div className="inner-footer-contain">Headphones</div>
                        <div className="inner-footer-contain">Kid's Clothing</div>
                        <div className="inner-footer-contain">Sarees</div>
                        <div className="inner-footer-contain">Shoes</div>
                        <div className="inner-footer-contain">Winter Wear</div>
                        <div className="inner-footer-contain">Shirt For Men</div>
                    </div>
                    <div className="inner-div-footer">
                        <h5>HELP</h5>
                        <div className="inner-footer-contain">Delivery</div>
                        <div className="inner-footer-contain">Returns</div>
                        <div className="inner-footer-contain">Secure Payment</div>
                        <div className="inner-footer-contain">Track On Order</div>
                        <div className="inner-footer-contain">Contact Us</div>
                    </div>
                    <div className="inner-div-footer">
                        <h5>ABOUT US</h5>
                        <div className="inner-footer-contain">Careers</div>
                        <div className="inner-footer-contain">Terms & Condition</div>
                        <div className="inner-footer-contain">Privacy Policy</div>
                        <div className="inner-footer-contain">Responsibility</div>
                    </div>
                    <div className="inner-div-footer">
                        <h5>FEEDBACK</h5>
                        <div className="inner-footer-contain">Leave a Feedback</div>
                    </div>
                    <div className="inner-div-footer">
                        <h5>CONTACT</h5>
                        <span>Email:</span>
                        <div className="inner-footer-contain">abc@gmail.com</div>
                        <span>Telephone:</span>
                        <div className="inner-footer-contain">+91 9873563368</div>
                        <span>Address:</span>
                        <div className="inner-footer-contain">Surat | Gujrat</div>
                        <span>Hours:</span>
                        <div className="inner-footer-contain">24/7 Hours</div>
                    </div>
                </div>
                <div className='social-media-link-footer'>
                    <div className='social-inner'>
                        <h5>FIND A STORE</h5>
                        <div className='social-inner-contain'>
                            <p>Find Timberiand&reg; ProductsNear You</p>
                            <button>STORE LOCATOR</button>
                        </div>
                    </div>
                    <div className='social-inner'>
                        <h5 className='social-h5'>FOLLOW US</h5>
                        <div className='social-inner-contain-icon'>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-pinterest"></i>
                        </div>
                    </div>
                    <div className='social-inner'>
                        <h5>NEWSSLETTER SUBSCRIPTION</h5>
                        <div className='social-inner-contain'>
                            <p>Recieve product news and updates in your inbox.</p>
                            <div className='social-input' style={{ display: "flex", width: "100%" }}>
                                <input type={"email"} placeholder={"Email Address"} />
                                <i className='fas fa-angle-right'></i>
                            </div>
                            <input type={"checkbox"} />&nbsp;I've read and accept Timberiand's <span className='social-span'>Privacy Policy</span>
                        </div>
                    </div>
                </div>
                <div className='shopping-card-footer'>
                    <div className='shopping-card'>
                        <div style={{width:"18%"}}>
                            <h6>SECURE ONLINE SHOPPING</h6>
                        </div>
                        <div style={{width:"82%"}}>
                            <i className="fab fa-cc-visa"></i>
                            <i className="fab fab fa-cc-paypal"></i>
                            <i className="fab fa-cc-discover"></i>
                            <i className="fab fa-cc-stripe"></i>
                            <i className="fab fa-cc-mastercard"></i>
                            <i className="fa fa-credit-card"></i>
                            <i className="fab fa-google-wallet"></i>
                            <i className="fab fa-cc-diners-club"></i>
                        </div>
                    </div>
                </div>
                <div className='copy-right-footer'>
                    <h6>Copyright &copy; 2022 Apple Inc. All rights reserved</h6>
                </div>
            </div>
        </div>
    );
}

export default Footer;