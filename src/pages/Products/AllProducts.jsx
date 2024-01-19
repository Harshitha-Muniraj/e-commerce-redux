import React, { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList/ProductList';

const AllProducts = () => {
  const [products,SetProducts]=useState([])
  async function AllProduct(){
    const response=await fetch('https://fakestoreapi.com/products')
    SetProducts(await response.json())
 
  }
  useEffect(()=>{
    AllProduct()
  },[])
  return (
    <ProductList products={products} />
  )
}

export default AllProducts