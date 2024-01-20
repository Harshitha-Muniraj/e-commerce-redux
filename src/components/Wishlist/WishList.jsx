import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../redux/action/ActionCreator'
import { useNavigate } from 'react-router-dom';
const WishList = () => {
    const products=useSelector(state=>state.wishList);
    const dispatch=useDispatch();
    let navigate=useNavigate()
  return (
    <>
    <button onClick={() => navigate(-1)} className='goback'>
      <ion-icon name="arrow-back"></ion-icon>
      </button>
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
                        <button onClick={()=>dispatch(addToCart(item))}>Add To Cart</button>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default WishList