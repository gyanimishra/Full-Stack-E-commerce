import React, { Fragment, useEffect } from "react";
import { FaHandPointDown } from "react-icons/fa";
import MetaData from "../Layout/Header/MetaData";
import "./Home.css";
import Product from "./Product";

const Products= {
  name: "Blue Shirt",
  images:[{url:"https://www.lovesove.com/wp-content/uploads/2021/06/Boy-Edited-Dp-For-Fb-Lovesove.jpg"}],
  price:"$3000",
  _id:"abhishek"
}



const Home = () => {
  return (
    <Fragment>
      <MetaData title="ECOMMERCE" />
     <div className="banner">
      <p>Welcome To Ecommerce</p>
      <h1>FIND AMAZING PRODUCTS BELOW</h1>

      <a href="#container">
        <button>
          Scroll <FaHandPointDown/>
        </button>
      </a>
     </div>

     <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        <Product  Products={Products}/>
        <Product  Products={Products}/>
        <Product  Products={Products}/>
        <Product  Products={Products}/>
        <Product  Products={Products}/>
        <Product  Products={Products}/>
        <Product  Products={Products}/>
        <Product  Products={Products}/>
      </div>


    </Fragment>
  )
}

export default Home
