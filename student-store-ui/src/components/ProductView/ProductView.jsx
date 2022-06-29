import * as React from "react"
import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"

export function ProductView({product}) {
    console.log("productviewproduct", product)
    return(
        //productdetail -> productview -> productcard
        <div className = "productview">
        
        <ProductCard product = {product}/>
    
        </div>
    )
}

export default ProductView