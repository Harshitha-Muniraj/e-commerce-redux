import React, { useEffect, useState } from 'react'

import ProductList from '../../components/ProductList/ProductList'
import { useParams } from 'react-router-dom';

const Products = () => {
  const [products,SetProducts]=useState([]);
  let {id}=useParams();
    console.log(id)
    async function abc(){
        const response=await fetch(`https://fakestoreapi.com/products/category/${id}`)
        try{
            const data=await response.json();
            SetProducts(await data)
            console.log('data',data)
            
        }catch(err){
            console.log(err)
        }
        
    }
   useEffect(()=>{
        abc()
       
   },[id]) 

  return (
    <>
    <ProductList products={products}/>
    </>
     
    
  )
}

export default Products