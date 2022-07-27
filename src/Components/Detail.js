import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
    let token;
    let headers;
    const [detail, setDetail] = useState([]);
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);
    const { id } = useParams();
    // console.log(id);

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
                setIsReadMore(true);
            })
            .catch(e => {
                console.log(e);
            })
    }, [])

    return (
        <>
            <div className="card m-9" style={{ width: "18rem", margin: "10px" }}>
                <img src={detail.images} className="card-img-top" alt={detail.title} style={{ width: "250px", height: "250px", margin: "auto" }} />
                <div className="card-body">
                    <h5 className="card-title">{detail.title}</h5>
                    <p className="card-text">
                        {isReadMore ? detail.description.slice(0, 100) : detail.description}
                        <span onClick={toggleReadMore} className="read-or-hide">
                            {isReadMore ? <><br />...read more<i className="fa fa-angle-down" style={{ margin: "5px", justifyContent: "center" }}></i></> :
                                <><br />show less<i className="fa fa-angle-up" style={{ margin: "5px", justifyContent: "center" }} ></i></>}
                        </span>
                    </p>
                </div>
                <div>
                    {
                        color.map((value, index) => {
                            return (
                                <div key={index}>
                                    {/* {console.log(value.productId)} */}
                                    <h5>color : {value.color} </h5><h5> price : ${value.price}</h5>
                                    {
                                        size.map((value, index) => {
                                            return (
                                                <div key={index}>
                                                    <h5>size : {value.size}</h5>
                                                </div>
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
        </>
    );
}

export default Detail;