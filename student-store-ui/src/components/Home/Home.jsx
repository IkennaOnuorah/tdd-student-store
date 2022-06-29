import * as React from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home({products}) {
  return (
    <div className="home">
      <ProductGrid products={products}/>
      <Link to= "/" />
      <p>Home</p>
    </div>
  )
}
