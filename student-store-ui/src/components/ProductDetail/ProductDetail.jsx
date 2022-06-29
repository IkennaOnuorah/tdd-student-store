import * as React from "react"
import "./ProductDetail.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import { useParams } from "react-router-dom"
import axios from "axios"
import ProductView from "../ProductView/ProductView"
const apiURL = "https://codepath-store-api.herokuapp.com/store/"
export function ProductDetail() {
    const [product, setProduct] = React.useState(undefined);
    const {productId} = useParams()
    const [loading,setLoading] = React.useState(true);
    React.useEffect(() => {
        const setup = async () => {
          await getData();
        };
        setup();
      }, []);
      async function getData() {
        setLoading(true)
        let product = await axios.get(
          `https://codepath-store-api.herokuapp.com/store/${productId}`
        );
        setProduct(product.data.product);
        console.log("chosenproduct",product.data.product)
      }
      React.useEffect(() => {
        if (product) {
          setLoading(false);
        }
      }, [product]);    
    return(
        
        <div className = "productdetail">
            {product ? <ProductView product = {product}/> : null}
        </div>
    )
}

export default ProductDetail