import React from 'react'
import ArrowLeft from "../../../assets/images/hIcon.svg"
import ArrowRight from "../../../assets/images/ar.svg"

import Step2 from "../../../assets/images/Step-2.webp"
import Step3 from "../../../assets/images/Step-3.webp"
import Step4 from "../../../assets/images/Step-4.webp"
import Step5 from "../../../assets/images/Step-5.webp"
import Step6 from "../../../assets/images/Step-6.webp"
import Step7 from "../../../assets/images/Step-7.webp"
import Step9 from "../../../assets/images/Step-9.webp"
import Step10 from "../../../assets/images/Step-10.webp"
import Step13 from "../../../assets/images/Step-13.webp"
import Step14 from "../../../assets/images/Step-14.webp"
import OwlCarousel from 'react-owl-carousel'
import CarSlider from './CarSlider'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Screenshots = () => {


    const options={
      items:4.75,
      loop:true,
      autoplay:1000,
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
          <h2 className="section-heading color-black">Have a look at the Table QR Ordering System - Guest View</h2>
         
        </div>
      </div>
   <OwlCarousel className='owl-theme' {...options}>
    <CarSlider img={Step2} title={"Choose Table"} paraStart={`Starts Here`} src={ArrowRight}/>
    <CarSlider img={Step3} title={"Choose Category"} src={ArrowRight} />
    <CarSlider img={Step4} title={"Choose Item"} src={ArrowRight} />
    <CarSlider img={Step5} title={"Choose Variant"} src={ArrowRight} />
    <CarSlider img={Step6} title={"Place Order"} src={ArrowRight} />
    <CarSlider img={Step7} title={"Guest Login"} src={ArrowRight} />
    <CarSlider img={Step9} title={"Login Verification"} src={ArrowRight} />
    <CarSlider img={Step10} title={"Order Success"} src={ArrowLeft} />
    <CarSlider img={Step13} title={"Order Status"} src={ArrowLeft} />
    <CarSlider img={Step14} title={"Service Request"} src={ArrowLeft} />



</OwlCarousel>
    </div>
  </section>
    </>
  )
}

export default Screenshots