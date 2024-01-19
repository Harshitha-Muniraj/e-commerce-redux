
import './ProductList.css'

import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'

const ProductList = ({products}) => {
 
  
  return (
    <>
    <div className='product-grid'>
        {
            products.map((item)=>{
                const {title,id,price,image}=item
                return(
                    <div key={id} className='product-card'>
                        <figure>
                            <img src={image} alt="" />
                        </figure>
                        <div className='card-price'>
                            <div >{price}</div>
                            <div>{title}</div>
                            
                        </div>
                        <Link to={`/product/${id}`} ><button >Buy Now</button></Link>
                    </div>
                )
            })
        }
    </div>
    </>
     
    
  )
}

export default ProductList