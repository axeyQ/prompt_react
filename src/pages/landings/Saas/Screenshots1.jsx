import React from 'react'
import Phone from "../../../assets/images/phone-01.png"
import ArrowLeft from "../../../assets/images/arrow-left.svg"
import ArrowRight from "../../../assets/images/arrow-right.svg"
import Swiper from 'swiper'
import Phone1 from "../../../assets/images/tViewMockup.webp"
import Phone2 from "../../../assets/images/sregister.webp"
import Phone3 from "../../../assets/images/cotView.webp"
import OwlCarousel from 'react-owl-carousel'
import CarSlider from './CarSlider'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Screenshots1 = () => {


    const options={
      items:5,
      loop:true,
      autoplay:true,
      nav:false,
      dots:false,
      margin:20,
      responsive:{
1100:{
  items:4.75,
},
500:{
  items:1.45
},
400:{
  items:1.45
},
300:{
  items:1.45
}

      }
    }
    
  return (
    <>
        <section className="screenshot" id="preview">
    <div className="screenshot__wrapper">
      <div className="container">
        <div className="screenshot__info">
          <h2 className="section-heading color-black">Have a look at what’s inside the app.</h2>
    
        </div>
      </div>
   <OwlCarousel className='owl-theme' {...options}>
    <CarSlider img={Phone1} title={"Step 1"}/>
    <CarSlider img={Phone2} title={"Step 2"}/>
    <CarSlider img={Phone3} title={"Step 3"}/>
    <CarSlider img={Phone1} title={"Step 4"}/>
    <CarSlider img={Phone2} title={"Step 5"}/>
    <CarSlider img={Phone3} title={"Step 6"}/>


</OwlCarousel>
    </div>
  </section>
    </>
  )
}

export default Screenshots1