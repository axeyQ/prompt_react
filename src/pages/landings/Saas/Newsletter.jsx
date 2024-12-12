import React from 'react'
import IMG from "../../../assets/images/hero/Amit.webp"
const Newsletter = () => {
  return (
    <section className="newsletter newsletter-2">
    <div className="newsletter__wrapper">
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-lg-8">
            <div className="newsletter__info">
              <h1 className="section-heading color-black">Get in touch with us today.</h1>

            </div>
          </div>
          <div className="col-lg-4">
            <div className="newsletter__img">
              <img src={IMG} alt="Amit"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Newsletter