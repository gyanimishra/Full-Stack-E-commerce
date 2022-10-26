import React from 'react'
import {Link} from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import "./Home.css";
const options={
    edit:false,
    color:'rgba(20,20,20,0.1)',
    aciveColor:"tomato",
    value:2.5,
    isHalf:true
}


const Product = ({Products}) => {
  return (
    <Link className='productCard' to={Products._id}>
        <img src={Products.images[0].url} alt="" />
        <p>{Products.name}</p>
        <div>
            <ReactStars {...options}/> <span>(256 Reviews)</span>
        </div>
        <span>{Products.price}</span>

    </Link>
  )
}

export default Product
