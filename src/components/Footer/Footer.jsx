import React from 'react'
import './Footer.css'


const Footer = () => {
  
  return (
    <footer>
      <div className="top">
      <div className="left">
        <div className="left1">
        <h3>Categories</h3>
        <p>Men</p>
        <p>Women</p>
        <p>Accessories</p>
        <p>Electronix</p>
        </div>
        <div className="left1">
        <h3>Links</h3>
        <p>FAQ</p>
        <p>Pages</p>
        <p>Store</p>
        <p>Cookies</p>
        </div>
      </div>
      <div className="right">
        <div className="right1">
          <h3>About</h3>
          <p className='abt'>Lorem ipsum dol ssssit amet consectetur adipisicing elit. Quod voluptatibus numquam deleniti error natus sequi non tempora at quis porro?</p>
        </div>
        <div className="right1">
        <h3>Contact</h3>
          <div>
            <p><ion-icon name="call-outline"></ion-icon></p>
            <p>123467</p>
          </div>
           <div>
           <ion-icon name="mail-outline"></ion-icon>
            <p>abcd@gmail.com</p>
           </div>
        </div>
        </div>
      </div>
      <div className="bottom">
        <div className="copyright">
          <p>HM &copy;2023|All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer