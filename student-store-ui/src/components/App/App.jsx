import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import ContactUs from "../ContactUs/ContactUs";
// import AboutUs from "../AboutUs/AboutUs";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  const apiURL = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState([0]);
  const [isFetching, setIsFetching] = useState(0);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState(null);

  useEffect(() => {
    axios.get(apiURL)
    .then((response) => {
      setProducts(response.data.products)
      console.log(response.data.products);
    }).catch((e) => {
      setError("error message")
    })
  }, [])

  return (
    // put navbar and sidebar components in home, productdetail and notfound components

    // flow1 (homepage): App --> Home --> ProductGrid --> ProductCard
    // flow2 (bringing up product card when clicked): App --> ProductDetail --> ProductView --> ProductCard

    /*tasks to complete:

    - style navbar and sidebar (get to point where they are static on page)
      - for sidebar --> make it a static line on side of page
      - for nav bar --> make static on top of page and put "home, about, contact"
    - fetch data from api (https://codepath-store-api.herokuapp.com/store)
    - build prouctgrid (passing props through flow1) (use console log to see if products are passing)
    - build productcard component (flow1)

    goal: homepage should have images of all products 

    */

    <div className="app">
      <BrowserRouter>
        <main>
        <Navbar />
          <Sidebar />
          {<Routes>
              <Route path="/" element={<Home products={products}/>}/>
               <Route path="/products/:productId" element={<ProductDetail />} /> 
               <Route path="*" element={<NotFound/>} /> 

          </Routes>}


            


          {/* element={
          <Home 
          products={products}
          setProducts={setProducts}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}/>
          } */}
        </main>
      </BrowserRouter>
    </div>
  )
}
