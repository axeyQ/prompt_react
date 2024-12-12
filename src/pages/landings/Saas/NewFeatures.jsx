import React from 'react'
import "../../../MyCSS/style.css"
import OrderImg1 from "../../../assets/images/orIcons1.svg"
import OrderImg from "../../../assets/images/orIcon.svg"
import SalesImg from "../../../assets/images/2.webp"
import BillingImg from "../../../assets/images/billing.svg"
import Overlay from "../../../assets/images/hero/Otline-Restaurant-Image.webp"

import ManImg from "../../../assets/images/manIcons.svg"
import { Link } from 'react-router-dom'
const NewFeatures = () => {
  return (
    <>
        <section className="feature" id="intro" style={{background:"#ffd835"}}>
        <img src={Overlay} alt='Background Overlay' className='position-absolute' style={{width:"100%",height:"100%",opacity:.3}} />

    <div className="container">
    <p className='h-para'>WE COVER ALL THE</p>
      <h2 className="section-heading color-white" >Four pillars of a Restaurant</h2>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-6">
          <div className="feature__box feature__box--1">
            <div className="icon icon-1">
              <img src={OrderImg} alt='Sales Icon' width={"70px"} style={{transform:"scaleX(-1)"}} />
              <img src={OrderImg1} alt='Sales Icon' width={"70px"}  />
            
            </div>
            <div className="feature__box__wrapper">
              <div className="feature__box--content feature__box--content-1">
                <h3>Ordering</h3>
                <p className="paragraph dark">Take orders not just from your 10 Biller logins but also receive Orders from Table QR Ordering System, Inhouse Takeaway, and Delivery System.<span className='LearnMore'><Link to="/ordering" className="larn">Learn More</Link></span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-6">
          <div className="feature__box feature__box--2">
            <div className="icon icon-2">
            <img src={ManImg} alt='Order Icon' loading='lazy' width={"80px"} style={{filter: "grayscale(1) invert(1)"}} />
            
              
            </div>
            <div className="feature__box__wrapper">
              <div className="feature__box--content feature__box--content-2">
                <h3>Management</h3>
                <p className="paragraph dark">Since, Management is the key and better Management means Better Performance, we have complete Menu, Inventory, Expense, Staff(HR), Guest, and Load-Task Management.<span className='LearnMore'><Link to="/management" className="larn">Learn More</Link></span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-6">
          <div className="feature__box feature__box--3">
            <div className="icon icon-3">
            <img src={SalesImg} alt='Order Icon' loading='lazy' width={"80px"} style={{filter: "grayscale(1) invert(1)"}}/>
                        </div>
            <div className="feature__box__wrapper">
              <div className="feature__box--content feature__box--content-3">
                <h3>Sales</h3>
                <p className="paragraph dark">No need of having multple tools fro when you can send all your ads and promotional material on their WhatsApp number directly from EazyPOSy.<span className='LearnMore'><Link to="/sales" className="larn" >Learn More</Link></span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-6">
          <div className="feature__box feature__box--4">
            <div className="icon icon-4">
            <img src={BillingImg} loading='lazy' alt='Order Icon' width={"80px"} style={{filter: "grayscale(1) invert(1)"}} />
            </div>
            <div className="feature__box__wrapper">
              <div className="feature__box--content feature__box--content-4">
                <h3>Billing</h3>
                <p className="paragraph dark">We have all you need for your billing no matter it is Dine-in, Takeaway, and Delivery orders. Our billing portal is beautiful and easy and your biller will fall in love with it.<span className='LearnMore'><Link to="/billing" className="larn">Learn More</Link></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default NewFeatures