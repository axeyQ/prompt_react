import React from 'react'
import Phone1 from "../../../assets/images/tViewMockup.webp"
import Phone2 from "../../../assets/images/sregister.webp"
import Phone3 from "../../../assets/images/SRRegister.webp"


const Step = () => {
  return (
    <>  <section className="step">
    <div className="step__wrapper">
      <div className="container">
        <h2 className="section-heading color-black">Punch your Order in just 3 easy steps</h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="step__box">
              <div className="image">
                <img src={Phone1} alt="Phone 1" loading='lazy'/>
              </div>
              <div className="content">
                <h3>SELECT A<span>TABLE</span></h3>
                <p className="paragraph dark">Select an empty table for the guests to dine in.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="step__box">
              <div className="image">
                <img src={Phone2} alt="Phone 2" loading='lazy'/>
              </div>
              <div className="content">
                <h3>SELECT THE<span>ITEMS</span></h3>
                <p className="paragraph dark">Select the items that your guests wants to order.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="step__box">
              <div className="image">
                <img src={Phone3} alt="Phone 3" loading='lazy'/>
              </div>
              <div className="content">
                <h3>SETTLE ORDER & PRINT<span>INVOICE</span></h3>
                <p className="paragraph dark">Once the order is completed, settle the KOT with selecting the payment method to generate invoice.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="button__wrapper d-flex justify-content-center">
          <a href="https://wa.me/7722932942?text=I%20want%20to%20know%20more%20about%20Eazyposy" target="_blank" class="btn-365"><div>Book a Demo</div><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none"><path d="M11.6801 14.62L14.2401 12.06L11.6801 9.5" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12.0601H14.17" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Step