import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US</span>
            <div className="mail">
                <input type="text" placeholder='Enter your e-mail...' />
                <button>JOIN US</button>
            </div>
            <div className="cnt-icons">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-google"></ion-icon>
            </div>
        </div>
    </div>
  )
}

export default Contact