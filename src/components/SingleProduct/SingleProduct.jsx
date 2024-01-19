import React, { useEffect, useState } from 'react';
import './SingleProduct.css'
import { useParams } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

const SingleProduct = () => {
    const [qty,SetQty]=useState(1)
    let {id}=useParams();
  const [product,SetProduct]=useState([]);
  const [loading,SetLoading]=useState(false);

  const  dispatch=useDispatch();
  product.quantity=qty;
  const addProduct=(product)=>{
    dispatch(addCart(product))
  }
    console.log(id)
    async function getProduct(){
       SetLoading(true)
        const response=await fetch(`https://fakestoreapi.com/products/${id}`)
        SetProduct(await response.json())
      SetLoading(false)  
    }
   useEffect(()=>{
        getProduct()
       
   },[]) 
  return (
    <div>
      {loading ? <h3 style={{height:'80vh',display:'flex',alignItems:'center',justifyContent:'center'}} >loading...</h3> : 
   
    
    <div className='singlepage'>
        
        <figure>
            <img src={product.image} alt="" />
        </figure>
        <div className='sp-right'>
          <h2 style={{color:'#333'}}>{product.title}</h2>
          <div className='sp-price'>{product.price}</div>
          <div>{product.description && product.description.substring(0,100)}</div>
          <div className='inc-dec'>
            <button className='quantity-btn' onClick={()=>qty>1?SetQty(qty-1):null}>-</button>
            <p>{qty}</p>
            <button className='quantity-btn' onClick={()=>SetQty(qty+1)}>+</button>
          </div>
          <button className='add-cart-btn'>
          <ion-icon name="cart-outline" id='sp-cart'></ion-icon>
          <p onClick={()=>addProduct(product)}>ADD TO CART</p>
          </button>
          <div>add to whishlist</div>
          <hr style={{width:'22rem'}}/>
          <div className='rating'>
            <p>{product.rating && product.rating.rate}</p>
            <p><ion-icon name="star" id='star'></ion-icon></p>
          </div>
          <div>ADDITIONAL INFORNATION</div>
          <div>FAQ</div>
        </div>
    </div>
}
    </div>
    
  )
}

export default SingleProduct