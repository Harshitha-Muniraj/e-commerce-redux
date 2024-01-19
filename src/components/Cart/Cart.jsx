import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { delCart } from '../redux/action';
const Cart = () => {
  const products=useSelector((state)=>state.handleCart);
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
                <div onClick={()=>dispatch(delCart((product)))}>
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