import React from 'react'
import './Slider.css'
const Slider = () => {
    const slidderPic=['https://media.istockphoto.com/id/1469497553/photo/black-and-white-photo-of-beautiful-afro-woman-with-perfect-make-up-wearing-amazing-dress.webp?b=1&s=170667a&w=0&k=20&c=UNJ_v6ZIqtQTEc4G2WrakUXn6_fkseSJ-ZPJvkRGmZY=','https://daisukeyokota.net/wp-content/uploads/2023/04/featured-66.jpg','https://i.pinimg.com/736x/a5/86/8c/a5868c44a2705fe80d9c9d6ff4c8d69c.jpg','https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg'
,'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg','https://cdn.shopify.com/s/files/1/0434/4749/files/Summer_Oufits_1024x1024.jpg?v=1532714048']
//    const slidderPic=['https://daisukeyokota.net/wp-content/uploads/2023/04/featured-66.jpg','https://i.pinimg.com/736x/a5/86/8c/a5868c44a2705fe80d9c9d6ff4c8d69c.jpg','https://cdn.shopify.com/s/files/1/0434/4749/files/Summer_Oufits_1024x1024.jpg?v=1532714048'] 

//   const prevSlide=()=>{}
//   const nextSlide =()=>{}
  return (
    <div className='slider'>
        <figure>
            <img src={slidderPic[0]}alt="" />
        </figure>
        <div>
          <span className='span1'>Exclusive</span>
          <span className='span2'>Collection</span>
          <span className='span3'></span>
          <span className='span4'>On Sale</span>
        </div>
        <figure>
            <img src={slidderPic[2]} alt="" />
        </figure>
           
        </div>
       
   
  )
}

export default Slider