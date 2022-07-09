import {Link} from "react-router-dom"
function Navbar(){
    return(
        <div style={{display:"flex",
        gap:"1rem",
        justifyContent:"center"}}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="products/:id">Product Details</Link>
        </div>
    )
}
export default Navbar;