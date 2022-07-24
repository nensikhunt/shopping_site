import axios from "axios";
import { useState } from "react";

function ProductAdd() {
    let token;
    let headers;
    const [productData, setproductData] = useState({
        title: "",
        description: "",
        images:"",
        color: "",
        size: "",
        price: "",
    })

    const productDataChange = (e) => {
        setproductData({
            ...productData,
            [e.target.name]: e.target.value
        })
    }

    const productDetail = async (e) => {
        token = localStorage.getItem("token");
        headers = { "token": token }
        console.log(headers);
        e.preventDefault();
        await axios.post("http://localhost:8000/product/add", productData, { headers: headers })
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            })

        setproductData({
            ...productData,
            title: "",
            description: "",
            images:"",
            color: "",
            size: "",
            price: ""
        })
    }
    return (
        <>
            <h4 className="cart-h4">Product add</h4>
            <form>
                Title:
                <input type={"text"} name="title" value={productData.title} onChange={productDataChange} /><br />
                Description:
                <input type={"text"} name="description" value={productData.description} onChange={productDataChange} /><br />
                Image:
                <input type={"file"} name="images" value={productData.images} onChange={productDataChange} /><br />
                Color:
                <input type={"text"} name="color" value={productData.color} onChange={productDataChange} /><br />
                Size:
                <input type={"text"} name="size" value={productData.size} onChange={productDataChange} /><br />
                Price:
                <input type={"text"} name="price" value={productData.price} onChange={productDataChange} /><br />
                <button onClick={productDetail}>add product</button>
            </form>
        </>
    );
}

export default ProductAdd;