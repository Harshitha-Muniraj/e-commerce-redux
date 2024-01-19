import Home from './pages/Home/Home';
import './App.css';
import { Routes,Route, BrowserRouter, useParams } from 'react-router-dom';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import AllProducts from './pages/Products/AllProducts';
import WishList from './components/Wishlist/WishList';


function App() {
 
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element ={<AllProducts/>}/>
    <Route path='/products/category/:id' element={<Products/>}/>
    <Route path='/product/:id' element={<Product/>}/>
    <Route path='/products/cart' element={<Cart/>}/>
    <Route path='/products/wishlist' element={<WishList/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;
