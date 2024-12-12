import React from 'react'
import "./Whatsapp.css"
import IMG from "../../../assets/images/Step-11.webp"
import WhatsappFeatures from './WhatsappFeatures'
import { Footer1 } from 'components/footer'
import { Navbar3 } from 'components/navbars'
import ModalBoot from 'pages/ModalBoot'
import "../../../MyCSS/hero.css"
import "../../../MyCSS/style.css"
import "../../../MyCSS/style.css"
import LOGO from "../../../assets/images/Black-Main.webp"
import imgLink from "../../../assets/images/Expenses.webp"
const Ordering = () => {
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
            <h1>The All-Encompassing Ordering Solution for your Restaurant</h1>

            <ul>
                <li>Your Seamless Table QR Ordering Solution</li>
                <li>Enhance Your Takeaway Service with Our In-House Ordering System</li>
                <li>Transform In-House Delivery Ordering with Our Platform</li>
                

            </ul>
            <div className=" mt-5 mb-lg-0 mb-md-4 mb-4 mb-2 d-lg-flex d-none justify-content-start">
<div className="item button-parrot">
    <a href="https://wa.aisensy.com/TacMu1" target="_blank" className='hello-btn'> Book a Demo
        
    </a>
  </div>     

                        </div>
        </div>

        <img src={IMG} width={"300px"} className='whatsapp-first-img' alt='Whatsapp Img'/>


    </div>

    <div className='whatsapp-second'>
    <h1>Experience the future of ordering with our advanced ordering system</h1>
    <p>Designed for efficiency and ease, our platform streamlines the entire ordering process, whether it’s for in-house dining, takeaway, or delivery.</p>
   <br/>
    {/* <iframe width="800" height="500" src="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
   
    <WhatsappFeatures imgLink={imgLink} blobClass='four' wfID='tableQR' vdoClass={"d-block"} cass="" heading={"Table QR Ordering"} wHead={"Simplify Ordering with Table QR Codes"} wPara={"Customers can effortlessly scan a QR code at their table to view the menu, place orders, and pay directly from their smartphones. This contactless solution not only streamlines the ordering process but also reduces wait times, improves order accuracy, and enhances customer satisfaction."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='five' vdoClass={"d-block"} cass="flex-row-reverse" heading={"Inhouse Takeaway Ordering"} wHead={"Streamline Your Takeaway Service"} wPara={"Transform your takeaway operations with our efficient In-House Takeaway Ordering system. Designed to simplify and expedite the ordering process, this feature allows customers to place their takeaway orders directly from within your establishment. By leveraging a user-friendly interface, our system ensures quick and accurate order placement, reducing wait times and enhancing customer satisfaction. "} />
    <WhatsappFeatures imgLink={imgLink} blobClass='six' vdoClass={"d-block"} cass="" heading={"Inhouse delivery Ordering"} wHead={"Streamline Your In-House Delivery Service"} wPara={"Optimize your in-house delivery process with our intuitive In-House Delivery Ordering system. This feature allows customers to place delivery orders directly from your venue, streamlining the entire process from order placement to delivery. "} />
   
    </div>

    <Footer1/>
    </main>
    </>
  )
}

export default Ordering