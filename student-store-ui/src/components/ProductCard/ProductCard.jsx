import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export function ProductCard({product}) {
    console.log("thisisproduct", product)

    return(
        
        <div className = "productcard" >
            <Link to = {"/products/" + product.id}>
            <img className = "image" src={product.image} alt="itemimage" />
            </Link>
            <p>{product.name}</p>
        </div>
    )
}

export default ProductCard