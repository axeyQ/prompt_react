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

const OrderReport = () => {
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

            <h1>Streamline Your Operations with Our Records</h1>

            <ul>
                <li>Gain Clarity with Our Comprehensive Order Summary System</li>
                <li>Optimize Your Kitchen Operations with Our KOT Records</li>
                <li>Streamline Your Online Orders with Our Order Records System</li>
                <li>Optimize Kitchen Efficiency with Our Average Preparation Time Records System</li>
                <li>Enhance Sales Analysis with Our Item-Wise Sales Records System</li>

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
    <WhatsappFeatures imgLink={imgLink} vdoClass='d-block' cass="" heading={"Order Summary"} wHead={"Gain Clarity with Our Comprehensive Order Summary System"} wPara={"Enhance your operational efficiency with our intuitive Order Summary System. This system provides a detailed and easy-to-read overview of all orders, including itemized lists, quantities, prices, and totals."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='five' vdoClass='d-block' cass="flex-row-reverse" heading={"KOTs Records"} wHead={"Optimize Your Kitchen Operations with Our KOT Records Management System"} wPara={"Enhance your kitchen efficiency and accuracy with our comprehensive KOT (Kitchen Order Ticket) Records Management System. Designed to streamline the tracking and management of kitchen orders, this system provides a centralized platform for recording, retrieving, and analyzing KOT data. Features include real-time order updates, detailed order histories, and easy access to past tickets, ensuring that your kitchen staff can quickly reference and manage orders."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='six' vdoClass='d-block' cass="" heading={"Online Order Records"} wHead={"Streamline Your Online Orders with Our Order Records System"} wPara={"Efficiently manage and track your online orders with our comprehensive Online Order Records Management System. Designed to provide a seamless overview of all digital transactions, this system offers a centralized platform for recording, accessing, and analyzing online order data."} />
    <WhatsappFeatures imgLink={imgLink} vdoClass='d-block' cass="flex-row-reverse" heading={"Change Request Records"} wHead={"Streamline Your Workflow with Our Request Change Records System"} wPara={"Enhance operational flexibility with our Request Change Records Management System. Designed to simplify the tracking and approval of change requests, this system provides a comprehensive platform for documenting, reviewing, and managing modifications across various processes. "} />
   
   
    <WhatsappFeatures imgLink={imgLink} vdoClass='d-block' cass="" heading={"Average Prep Time Records"} wHead={"Optimize Kitchen Efficiency with Our Average Preparation Time Records System"} wPara={"Gain valuable insights into your kitchen operations with our Average Preparation Time Records System. Designed to track and analyze the time taken to prepare each dish, this system helps you identify bottlenecks, streamline processes, and improve overall efficiency."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='five' vdoClass='d-block' cass="flex-row-reverse" heading={"Item wise Sales Records"} wHead={"Enhance Sales Analysis with Our Item-Wise Sales Records System"} wPara={"Gain deep insights into your sales performance with our Item-Wise Sales Records System. Designed to provide a detailed breakdown of sales data by individual item, this system enables you to track sales trends, inventory turnover, and profitability with precision."} />
   
   
    </div>

    <Footer1/>
    </main>
    </>

  )
}

export default OrderReport