import React, { useEffect, useState, } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Navbar.css'
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const cart=useSelector((state)=>state.cart);
  const navigate = useNavigate(); 
  const [categories,setCategories]=useState([]);
  // const [allProducts,SetAllProducts]=useState([])
  // async function allProducts(){
  //   const response=await fetch('https://fakestoreapi.com/products')
  //   SetAllProducts(await response.json())
  // }
  async function categoryApi(){
    const response=await fetch('https://fakestoreapi.com/products/categories')
    setCategories(await response.json())
 
  }
  useEffect(()=>{
    categoryApi()
  },[])
  
  function handleChange(e){
    if(e.target.value==='All'){
      navigate(`/products`)
    }else if(!e.target.value){
      navigate('/')
    }else navigate(`/products/category/${e.target.value}`)
  }
  return (
    <header>
      <div className="nav-left">
        
        <select name="Category" id="category" onClick={handleChange}>
          <option value="">Categories</option>
          <option value='All' >All</option>
          {
            categories.map((item,index)=>{
             
              return <option value={categories[index]} className='dropdown' key={index}>{item}</option>
            })
          }
        </select>
      </div>
      <div className="center">
        <Link><h1>HM Store</h1></Link>
      </div>
      <div className="nav-right">
        <div>
        <ion-icon name="person"id='icons'></ion-icon>
        </div>
        <div>
        <Link to='/products/wishlist' id='cart-anchor' >
        <ion-icon name="heart"id='icons'></ion-icon>
        </Link>
        </div>
        <div className='cart-span' >
          <Link to='/products/cart' id='cart-anchor' ><ion-icon name="bag" id='icons'></ion-icon></Link>
       
        <span>{cart.length}</span>
        </div>
      </div>
     
    </header>
  )
}

export default Navbar