import { Link, useParams } from "react-router-dom"
import {useEffect, useState} from "react";

 function ProductDetails(){
    const [data, setData] = useState([]);
    const params = useParams(); 
    useEffect(() => {
        fetch("http://localhost:3000/products/${params.id}")
        .then(res=>res.json())
        .then(res=>{
            setData(res)
        })
    },[]);
    return(
        {data.map((products) => (
            <div key="products.id">
                
            <h2>{products.name}</h2>
            <h1>{products.price}</h1>
            <h4>{products.id}</h4>
            <Link to="/products">Go Back</Link>
            </div>
    ))}
    )
}
export default ProductDetails;
