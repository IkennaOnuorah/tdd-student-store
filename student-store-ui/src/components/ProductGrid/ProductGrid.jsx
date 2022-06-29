import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "./ProductGrid.css"

export default function ProductGrid({products}) {
    console.log("thisisgrid")
  return (
    <div className = "ProductGrid" >
        {products.map((product) => {return <ProductCard product={product}/>})}
    </div>
  )
}
