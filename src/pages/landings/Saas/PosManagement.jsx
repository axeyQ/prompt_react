import React from 'react'
import "./Whatsapp.css"
import IMG from "../../../assets/images/Step-11.webp"
import WhatsappFeatures from './WhatsappFeatures'
import { Footer1 } from 'components/footer'
import { Navbar3 } from 'components/navbars'
import ModalBoot from 'pages/ModalBoot'
import imgLink from "../../../assets/images/Expenses.webp"
import "../../../MyCSS/hero.css"
import "../../../MyCSS/style.css"
import LOGO from "../../../assets/images/Black-Main.webp"

const PosManagement = () => {
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

            <h1>Your All-in-One Point-of-Sale Solution</h1>

            <ul>
                <li>Put whatever you like or need, Table number or Table Name, all is up to you.</li>
                <li>Time Taken, order ready, or cancellation. handed over to the customer, delivered or undelivered.</li>
                <li>You can separately Ready and/or Cancel items of every KOT</li>

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
    <WhatsappFeatures imgLink={imgLink} vdoClass='d-block' cass="" heading={"Table View"} wHead={"Optimize Your Space with Our Table View Management System"} wPara={"Enhance your venue’s layout and improve customer service with our intuitive Table View Management System. Designed to provide a clear and organized overview of your dining area, this system allows you to easily manage table assignments, reservations, and seating arrangements."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='five' vdoClass='d-block' cass="flex-row-reverse" heading={"Live View"} wHead={"Enhance Real-Time Operations with Our Live View Management System"} wPara={"Stay ahead of the curve with our advanced Live View Management System, designed to provide real-time visibility into your operations. This system offers a dynamic and interactive overview of key metrics, including live sales data, inventory levels, and staff activities"} />
    <WhatsappFeatures imgLink={imgLink} blobClass='six' vdoClass='d-block' cass="" heading={"KOT View"} wHead={"Streamline Kitchen Operations with Our KOT View Management System"} wPara={"Optimize your kitchen workflow with our innovative KOT (Kitchen Order Ticket) View Management System. Designed to enhance order accuracy and speed up kitchen processes, this system provides a real-time digital display of kitchen orders, making it easier for your culinary team to track and manage food preparation."} />
    <WhatsappFeatures imgLink={imgLink} vdoClass='d-block' cass="flex-row-reverse" heading={"KDS Panel"} wHead={"Revolutionize Your Kitchen Operations with Our Kitchen Display System"} wPara={"Transform your kitchen efficiency with our state-of-the-art Kitchen Display System (KDS). Designed to streamline food preparation and improve communication between the front of house and kitchen staff, this system provides a clear and organized digital display of incoming orders."} />
   
    </div>

    <Footer1/>
    </main>
    </>

  )
}

export default PosManagement