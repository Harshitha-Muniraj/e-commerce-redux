import React from 'react';
import './Cart.css'
import { useSelector ,useDispatch} from 'react-redux';

import { itemQuantityIncrease,itemQuantityDecrease,delFromCart } from '../redux/action/ActionCreator';
const Cart = () => {
  const products=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
 

  const totalPrice=()=>{
    let total=0;
    products.forEach((product)=>total+=product.quantity*product.price)
    return total
  }
  return (
    <div className='cart'>
       <h3>Products in your cart</h3>
       {products.length>=1?
       <div className='cart-container'>
       {
        products.map((product)=>{
          
          return (
            <div key={product.id} className='cart-card'>
              <img src={product.image} alt="" className='cartProductImg' />
              <div className='cart-product-name'>
                <p>{product.title}</p>
                
              </div>
              <div className='inc-dec flex'>
                  <button onClick={()=>dispatch(itemQuantityDecrease((product)))}>-</button>
                  <p>{product.quantity}</p>
                  <button onClick={()=>dispatch(itemQuantityIncrease((product)))}>+</button>
                </div>
                <div className='flex'>
                <h3>Price</h3>
                <p>{product.quantity}x{product.price}={product.quantity*product.price}</p>
                </div>
                
                <div onClick={()=>dispatch(delFromCart((product)))} className='flex'>
                <ion-icon name="trash-outline"></ion-icon>
                </div>
              
              
            </div>
          )
        })
       } 
       
       <div  className='total'>
                <h3>total</h3>
                <p>{totalPrice()}</p>
      </div>
               
      </div>
       :<p>Cart Is Empty</p>}
       
       
    </div>
  )
}

export default Cart