import React, { Fragment, useEffect } from "react";
import { FaHandPointDown } from "react-icons/fa";
import MetaData from "../Layout/Header/MetaData";
import "./Home.css";

import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getAllProducts } from "../../Actions/productsAction";
import ProductCard from "./ProductCard";
import Loader from "../Layout/Loader/Loader";

import { useAlert } from "react-alert";


const Home = () => {
  const alert = useAlert();
const dispatch= useDispatch();

const { loading, error, products } = useSelector((state) => state.products);

// console.log(products,"products");

    useEffect(()=>{
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
      dispatch(getAllProducts())
    },[dispatch, error, alert])



  return (
    <Fragment>
      {
        loading ?<Loader/>:
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
      {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
      </div>


    </Fragment>
      }
    </Fragment>
  )
}

export default Home
