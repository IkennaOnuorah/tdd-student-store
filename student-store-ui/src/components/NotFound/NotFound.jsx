import * as React from "react"
import "./NotFound.css"
import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"


export function NotFound() {
    return(
        
        <div className = "notfound">
        <Navbar />
        <p>Not Found</p>
        </div>
    )
}

export default NotFound