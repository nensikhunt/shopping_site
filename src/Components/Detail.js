import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    let token;
    let headers;
    const [detail, setDetail] = useState([]);
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);
    const { id } = useParams();

    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    // const [colorCheck, setColorcheck] = useState("");
    // const colorChange = (e) => {
    //     const { name, value } = e.target
    //     setColorcheck(e.target.value || null)
    //     // setInputdata({
    //     //     ...inputData,
    //     //     course: value
    //     // })
    // }
    // console.log(colorCheck);
    useEffect(() => {
        token = localStorage.getItem("token");
        headers = { "token": token };
        axios.get(`http://localhost:8000/product/all?id=${id}`, { headers: headers })
            .then(response => {
                setDetail(response.data.data);
                setColor(response.data.data.colors);
                setSize(response.data.data.sizes);
                setIsReadMore(true);
            })
            .catch(e => {
                console.log(e);
            })
    }, [])

    return (
        <>
            <div className="detail">
                <div className="detail-image">
                    <img src={detail.images} className="detail-img-top" alt={detail.title} style={{ width: "500px", height: "500px", margin: "auto" }} />
                </div>
                <div className="detail-body">
                    <div className="detail-description">
                        <h3 className="detail-title">{detail.title}</h3>
                        <h5>Product Description :</h5>
                        <p className="detail-text">
                            {isReadMore ? detail.description.slice(0, 100) : detail.description}
                            <span onClick={toggleReadMore} className="read-or-hide">
                                {isReadMore ? <><br />...read more<i className="fa fa-angle-down" style={{ margin: "5px", justifyContent: "center" }}></i></> :
                                    <><br />show less<i className="fa fa-angle-up" style={{ margin: "5px", justifyContent: "center" }} ></i></>}
                            </span>
                        </p>
                    </div>
                    {/* <select className="detail-price" style={{ display: "flex", width: "100%" }} onChange={colorChange}>
                        <option name={"color"} value={"select"}>Select</option>
                        {
                            color.map((value, index) => {
                                return (
                                    <>
                                        <option name={"color"} key={index} value={value.color}>{value.color}</option>
                                    </>
                                )
                            })
                        }
                    </select> */}
                    <div className="detail-price" style={{ display: "flex", width: "100%" }}>
                        {
                            color.map((value, index) => {
                                return (
                                    <div key={index} style={{ width: "30%", margin: "auto", boxShadow: "5px 5px 10px grey" }}>
                                        <h5>color : {value.color}</h5>
                                        <h5>price : ${value.price}</h5>
                                        {
                                            size.map((value, index) => {
                                                return (
                                                    <h5 key={index}>size : {value.size}</h5>
                                                )
                                            })
                                        }
                                        <br />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;