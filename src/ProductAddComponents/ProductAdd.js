import axios from "axios";
import { useState } from "react";

function ProductAdd() {
    let token;
    let headers;
    const [productData, setproductData] = useState({
        title: "",
        description: "",
        color: "",
        size: "",
        price: ""
    })
    const [imgfile, setimageFile] = useState({
        image: []
    })

    const productDataChange = (e) => {
        setproductData({
            ...productData,
            [e.target.name]: e.target.value
        })
    }
    const productImageDataChange = (e) => {
        setimageFile({
            ...imgfile,
            image: e.target.files[0]
        })
    }

    const productDetail = async (e) => {
        e.preventDefault();
        token = localStorage.getItem("token");
        headers = { "token": token, "Content-type": "multipart/form-data" }
        const formData = new FormData();
        formData.append('image', imgfile.image);
        formData.append('title', productData.title);
        formData.append('description', productData.description);
        formData.append('color', productData.color);
        formData.append('size', productData.size);
        formData.append('price', productData.price);
        await axios.post("http://localhost:8000/product/add", formData, { headers: headers })
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            })

        // setproductData({
        //     ...productData,
        //     title: "",
        //     description: "",
        //     color: "",
        //     size: "",
        //     price: ""
        // })

        // setimageFile({
        //     ...imgfile,
        //     images:""
        // })
    }
    return (
        <>
            <h4 className="cart-h4">Product add</h4>
            <form>
                Title:
                <input type={"text"} name="title" value={productData.title} onChange={productDataChange} /><br />
                Description:
                <textarea cols={50} rows={5} type={"text"} name="description" value={productData.description} onChange={productDataChange} /> <br />
                Image:
                <input type={"file"} name="image" value={productData.image} onChange={productImageDataChange} /><br />
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