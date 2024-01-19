import React, { useEffect, useState } from 'react';
import './Category.css';
import { Link, useParams } from 'react-router-dom';

const Category = () => {
  const [categories,setCategories]=useState([])

  async function categoryApi(){
    const response=await fetch('https://fakestoreapi.com/products/categories')
    setCategories(await response.json())
    
  }
  useEffect(()=>{
    categoryApi()
  },[])
    
  
  return (
    <div className='category'>
        <div className='cat-left position'>
           <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           
            <Link to={`/products/category/${categories[2]}`}><button>Men</button></Link>
           
        </div>
        <div  className='cat-center'>
          <div className='position'>
            <img className='centerImg' src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            
              <Link to={`/products/category/${categories[3]}`}><button>Women</button></Link>
            
            </div>
          <div className='position'>
            <img  className='electronics centerImg'src="https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg" alt="" />
            
             <Link to={`/products/category/${categories[0]}`}><button>Electronics</button></Link>
            
          </div>
        </div>
          <div className='cat-right position'>
            <img src="https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <Link to={`/products/category/${categories[1]}`}><button>
              Jewelery
            </button></Link>
          </div>
    </div>
  )
}

export default Category