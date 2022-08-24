import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import $ from 'jquery';
import { cartProductAction, wishlistProductAction } from "../../Store/Action/ProductAction";
import Footer from "./Footer";

function Detail() {
    let token;
    let headers;
    let detailImage;
    let detailColor;
    const [detail, setDetail] = useState([]);
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);
    const [sizes, setSizes] = useState();
    const [image, setImage] = useState();
    const [colors, setColors] = useState();
    const [effect, setEffect] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    useEffect(() => {
        token = localStorage.getItem("token");
        headers = { "token": token };
        axios.get(`http://localhost:8000/product/all?id=${id}`, { headers: headers })
            .then(response => {
                setDetail(response.data.data);
                setColor(response.data.data.colors);
                setSize(response.data.data.sizes);
                setEffect(true);
                setIsReadMore(true);
            })
            .catch(e => {
                console.log(e);
            })

    }, [])

    const imagehandler = (value) => {
        detailImage = detail.colors.map((item) => {
            return (item.image)
        })
        detailImage.forEach(element => {
            if (element === value.image) {
                setImage(element)
            }
        })

        detailColor = detail.colors.map((item) => {
            return (item.color)
        })
        detailColor.forEach(element => {
            if (element === value.color) {
                setColors(element)
            }
        })
    }

    const sizehandler = (value) => {
        setSizes(value.size);
    }

    const addToCartAction = (detail) => {
        if (sizes === undefined) {
            alert("please select the size");
        } else {
            dispatch(cartProductAction(detail))
        }
    }

    $(document).ready(function () {
        $('.deatil-image-small')
            .click(function (e) {
                $('.deatil-image-small')
                    .removeClass('active');
                $(this).addClass('active');
            });
    });

    $(document).ready(function () {
        $('.detail-size-span')
            .click(function (e) {
                $('.detail-size-span')
                    .removeClass('active');
                $(this).addClass('active');
            });
    });
    return (
        <>
            <div className="detail">
                <div className="detail-img">
                    <div className="detail-image">
                        {
                            image ? <img className="detail-img-big" src={image} alt="Card image cap" /> :
                                effect === true ? <img className="detail-img-big" src={color[0].image} alt="Card image cap" /> : ""
                        }
                    </div>
                    <div className="detail-images">
                        {
                            color.map((value, index) => {
                                return (
                                    <div key={index}>
                                        <img id={value._id} className="deatil-image-small" onClick={() => imagehandler(value)} src={value.image} alt={"image"} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="detail-body">
                    <div className="detail-description">
                        <h3 className="detail-title">{detail.title}</h3>
                        <h6>Product Description :</h6>
                        <p className="detail-text">
                            {isReadMore ? detail.description.slice(0, 100) : detail.description}
                            <span onClick={toggleReadMore} className="read-or-hide">
                                {
                                    isReadMore ? <><span style={{ color: "grey" }}>...read more</span><i className="fa fa-angle-down" style={{ margin: "5px", justifyContent: "center" }}></i></> :
                                        <><br /><span style={{ color: "grey" }}>show less</span><i className="fa fa-angle-up" style={{ margin: "5px", justifyContent: "center" }} ></i></>
                                }
                            </span>
                        </p>
                    </div>
                    <div className="detail-price">
                        <h6>Color :&nbsp;
                            {
                                colors ? <span>{colors}</span> :
                                    effect === true ? <span>{color[0].color}</span> : ""
                            }
                        </h6>
                        <br />
                        <h6>Size :&nbsp;

                            {
                                size.map((value, index) => {
                                    return (
                                        <span className="detail-size-span">
                                            <span key={index} className="detail-size-span-child" style={{ width: "100px" }} onClick={() => sizehandler(value)}>{value.size}</span>
                                        </span>
                                    )
                                })
                            }

                        </h6>
                    </div>
                    <div className="product-item-data">
                        <button style={{ width: "46%", margin: "10px" }} className="btn btn-secondary" onClick={() => addToCartAction(detail)}>Add To Cart</button>
                        <button style={{ width: "46%", margin: "10px 10px 10px 10px" }} className="btn btn-secondary" onClick={() => dispatch(wishlistProductAction(detail))}>Add To Wishlist</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Detail;  