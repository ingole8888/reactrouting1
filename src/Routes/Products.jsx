import { useEffect } from "react";
import { useState } from "react";

function Products(){
    const ids=[0,1,2]
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then(res=>res.json())
        .then(res=>{
            setData(res)
        })
    },[]);
    console.log(data);
    return(
        {data.map((products) => (
            <div key={products.id}>
                
            <h2>{products.name}</h2>
            <h1>{products.price}</h1>
            <h4>{products.id}</h4>
            <Link to={`products/$(products.id)`}>move to {products.id}</Link>
            </div>
    ))}
    )
}
export default Products;