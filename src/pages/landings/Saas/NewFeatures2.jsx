import React from 'react'
import "../../../MyCSS/style.css"
import SalesImg from "../../../assets/images/sales.svg"
import OrderImg from "../../../assets/images/ordering.svg"
const NewFeatures2 = () => {
  return (
    <>
        <section className="feature" id="intro" >
    <div className="container">
      <h2 className="section-heading color-black">Four pillars of a Restaurant</h2>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="feature__box feature__box--1">
            <div className="icon icon-1">
              <img src={SalesImg} alt='Sales Icon' width={"100px"}/>
            </div>
            <div className="feature__box__wrapper">
              <div className="feature__box--content feature__box--content-1">
                <h3>Sales</h3>
                <p className="paragraph dark">Suisque metus tortor ultricies ac ligula neced eleifend sodales felise morbi
                  nec tempor isvelultricies ligula.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="feature__box feature__box--2">
            <div className="icon icon-2">
            <img src={OrderImg} alt='Order Icon' width={"80px"}/>
              
            </div>
            <div className="feature__box__wrapper">
              <div className="feature__box--content feature__box--content-2">
                <h3>Ordering</h3>
                <p className="paragraph dark">Euisque metus tortor ultricies ac ligula neced eleifend sodales felise morbi
                  nec tempor isvel ultricies ligula.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="feature__box feature__box--3">
            <div className="icon icon-3">
              <i className="fad fa-solar-system"></i>
            </div>
            <div className="feature__box__wrapper">
              <div className="feature__box--content feature__box--content-3">
                <h3>Billing</h3>
                <p className="paragraph dark">Auisque metus tortor ultricies ac ligula neced eleifend sodales felise morbi
                  nec tempor isvel ultricies ligula.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="feature__box feature__box--4">
            <div className="icon icon-4">
              <i className="fad fa-rocket-launch"></i>
            </div>
            <div className="feature__box__wrapper">
              <div className="feature__box--content feature__box--content-4">
                <h3>Manage</h3>
                <p className="paragraph dark">Tuisque metus tortor ultricies ac ligula neced eleifend sodales felise morbi
                  nec tempor isvel ultricies ligula.</p>
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

export default NewFeatures2