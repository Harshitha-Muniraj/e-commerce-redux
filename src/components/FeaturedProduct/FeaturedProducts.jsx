import React from 'react'
import Data from './Data';
import './FeaturedProduct.css'
const FeaturedProducts = () => {
  return (
    <div className='featured-products'>
       <div>
        <h2>Featured Products</h2>
       </div>
       <div className='fp-container'>
        {
          Data.map((item)=>{
            
            return (
                <div className='item' key={item.id} >
                    <figure>
                    <img  src={item.img} className='fp-img'/>
                    </figure>
                    <div>
                        <div className='fp-details'>
                        <p>{item.originalPrice}</p>
                        <p>{item.offerPrice}</p>
                        </div>
                        <p>{item.title}</p>
                    </div>
                    
                </div>
            )
          })
        }
       </div>
    </div>
  )
}

export default FeaturedProducts