import { useState } from 'react';
import './AddressMethod.css';
import PriceDetail from './PriceDetail';
import SummaryMethod from './SummaryMethod';
function AddressMethod() {
    const [data, setdata] = useState(false)
    const [detail, setDetail] = useState({
        name: "",
        phonenumber: "",
        housename: "",
        areaname: "",
        pincode: "",
        city: "",
        state: "",
        address: ""
    })
    const detailChange = (e) => {
        setDetail({
            ...detail,
            [e.target.name]: e.target.value
        })
    }
    const addressSubmit = (e) => {
        e.preventDefault();
        if (detail.name === "" && detail.state === "" && detail.areaname === "" && detail.city === "" && detail.housename === "" && detail.phonenumber === "" && detail.pincode === "") {
            alert("plese fill teh required filed");
        } else {
            setdata(true)
        }
    }
    return (
        <>
            <span className='breadcrums'>cart l addressmethod</span>
            {!data &&
                <div className="address-method-main">
                    <div className='delivery-address'>
                        <h4>Select Delivery Address</h4>
                        <div className='address-detail'>
                            <form onSubmit={addressSubmit}>
                                <h3><i className='fas fa-phone-alt' id='contact-icon'></i> Contact Details</h3>
                                <input type={"text"} name={"name"} onChange={detailChange} placeholder={"Name *"} required className='address-input' /><br />
                                <input type={"text"} name={"phonenumber"} onChange={detailChange} placeholder={"Phone Number *"} required className='address-input' /><br />
                                <h3><i className='fas fa-map-marker-alt' id='address-icon'></i> Address</h3>
                                <input type={"text"} name={"housename"} onChange={detailChange} placeholder={"House no. / Building Name *"} required className='address-input' /><br />
                                <input type={"text"} name={"areaname"} onChange={detailChange} placeholder={"Road Name / Area / Colony *"} required className='address-input' /><br />
                                <input type={"text"} name={"pincode"} onChange={detailChange} placeholder={"Pincode *"} required className='address-input' /><br />
                                <input type={"text"} name={"city"} onChange={detailChange} placeholder={"City *"} required className='city-input' />
                                <input type={"text"} name={"state"} onChange={detailChange} placeholder={"State *"} required className='city-input' /><br />
                                <input type={"text"} name={"address"} onChange={detailChange} placeholder={"Nearby Location (optional)"} className='address-input' /><br /><br />
                                <button className="btn btn-secondary" id="address-btn">Address & Continue</button>
                            </form>
                        </div>
                    </div>
                    <div className='price-detail'>
                        <br />
                        <PriceDetail />
                    </div>
                </div>
            }

            {data ? <SummaryMethod detail={detail}/>:""}
        </>
    );
}
export default AddressMethod;