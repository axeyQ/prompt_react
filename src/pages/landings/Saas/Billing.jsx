import React from 'react'
import "./Whatsapp.css"
import IMG from "../../../assets/images/Step-11.webp"
import WhatsappFeatures from './WhatsappFeatures'
import { Footer1 } from 'components/footer'
import { Navbar3 } from 'components/navbars'
import imgLink from "../../../assets/images/Expenses.webp"
import "../../../MyCSS/hero.css"
import "../../../MyCSS/style.css"
import LOGO from "../../../assets/images/Black-Main.webp"

const Billing = () => {
  return (
    <>
    <Navbar3 navClass="navbar-light" isSticky={true} fixedWidth buttonClass="btn-primary btn-sm" />

    <main className='whatsapp-main'>
    <div class="base one"></div>
    <div class="base two"></div>
    <div class="base three"></div>
    <div className='whatsapp-first'>
        <div className='whatsapp-first-text'>
        <img src={LOGO} width={"250px"} className='mb-2 d-lg-block d-none' alt='logo'/>

            <h1>Your All-in-One Billing Solution</h1>

            <ul>
                <li>Sales Dashboard is as it states, it will provide you with your recent campaigns, and conversions.</li>
                <li>Elevate Your Dining Experience with Our Menu Management System</li>
                <li>WhatsApp Campaign is as straight as it sounds. This is the feature that covers one of our core pillars, Sales</li>

            </ul>
            <div className=" mt-5 mb-lg-0 mb-md-4 mb-4 mb-2 d-lg-flex d-none justify-content-start">
                            {/* <div className="me-4">
                                <FeatherIcon icon="check-circle" className="icon icon-dual-success icon-xs me-1" />
                                Free for a Year
                            </div> */}

<div className="item button-parrot">
    <a href="https://wa.aisensy.com/TacMu1" target="_blank" className='hello-btn'> Book a Demo
        
    </a>
  </div>     

                        </div>
        </div>

        <img src={IMG} width={"300px"} className='whatsapp-first-img' alt='Whatsapp Img'/>


    </div>

    <div className='whatsapp-second'>
    <h1>Transform Your Sales Operations with Our POS Management System</h1>
    <p>Simplify and automate your financial processes with our advanced Billing Management System. </p>
{/* <ModalBoot imgLink={IMG1} vdoLink="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N"/> */}
    

    {/* <ReactPlayer url="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N" width="800" height="500" controls={true} autoplay={true}  /> */}
    {/* <iframe width="800" height="500" src="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    <WhatsappFeatures imgLink={imgLink}  lmClass='d-block' cass="" heading={"POS Management"} link='/pos' wHead={"Transform Your Sales Operations with Our POS Management System"} wPara={"Optimize your retail or hospitality business with our advanced POS (Point of Sale) Management System. Designed to streamline and enhance the sales process, our system integrates seamlessly with inventory management, customer relationship management, and financial tracking to provide a comprehensive solution for your business needs."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='five' link='/menu' lmClass='d-block' cass="flex-row-reverse" heading={"Menu Management"} wHead={"Elevate Your Dining Experience with Our Menu Management System"} wPara={"Simplify and enhance your menu operations with our innovative Menu Management System. Designed to streamline menu creation, updates, and management, this system allows you to efficiently design, modify, and organize your menu offerings."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='six' lmClass='d-block' cass="" link='/orders' heading={"Order Records"} wHead={"Streamline Your Order Processing with Our Order Records Management System"} wPara={"Enhance your operational efficiency with our comprehensive Order Records Management System. Designed to simplify the tracking and management of customer orders, this system provides a centralized platform for recording, retrieving, and analyzing order data."} />
   
    </div>

    <Footer1/>
    </main>
    </>

  )
}

export default Billing