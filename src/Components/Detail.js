import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    let token;
    let headers;
    const [detail, setDetail] = useState({});
    const { id } = useParams();
    console.log(id);


    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    useEffect(() => {
        token = localStorage.getItem("token");
        headers = { "token": token };
        axios.get(`http://localhost:8000/product/all/${id}`, { headers: headers })
            .then(response => {
                setDetail(response.data);
                setIsReadMore(true);
            })
            .catch(e => {
                console.log(e);
            })
    }, [])
    console.log(detail);

    return (
        <>
            <div className="card m-9" style={{ width: "18rem", margin: "10px" }}>
                <img src={detail.image} className="card-img-top" alt={detail.title} style={{ width: "250px", height: "250px", margin: "auto" }} />
                <div className="card-body">
                    <h5 className="card-title">{detail.title}</h5>
                    <p className="card-text">
                        {isReadMore ? detail.description.slice(0, 100) : detail.description}
                        <span onClick={toggleReadMore} className="read-or-hide">
                            {isReadMore ? <>...read more<i className="fa fa-angle-down" style={{ margin: "5px", justifyContent: "center" }}></i></> :
                                <>show less<i className="fa fa-angle-up" style={{ margin: "5px", justifyContent: "center" }} ></i></>}
                        </span>
                    </p>
                    {/* <h4>Price : <span className="card-price">${detail.price}</span></h4> */}
                </div>
            </div>
        </>
    );
}

export default Detail;