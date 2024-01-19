import React from 'react';
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
    <div>
       <h3>Products in your cart</h3>
       
       {
        products.map((product)=>{
          
          return (
            <div key={product.id}>
              <img src={product.image} alt="" />
              <div>
                <p>{product.title}</p>
                <p>{product.quantity}x{product.price}={product.quantity*product.price}</p>
              </div>
              <div>
                <h3>total</h3>
                <p>{totalPrice()}</p>
                <div>
                  <div onClick={()=>dispatch(itemQuantityDecrease((product)))}>-</div>
                  {product.quantity}
                  <div onClick={()=>dispatch(itemQuantityIncrease((product)))}>+</div>
                </div>
                <div onClick={()=>dispatch(delFromCart((product)))}>
                <ion-icon name="trash-outline"></ion-icon>
                </div>
              
              </div>
            </div>
          )
        })
       } 
    </div>
  )
}

export default Cart