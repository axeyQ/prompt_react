import React from 'react'
import "./Whatsapp.css"
import IMG from "../../../assets/images/Step-11.webp"
import WhatsappFeatures from './WhatsappFeatures'
import { Footer1 } from 'components/footer'
import { Navbar3 } from 'components/navbars'
import imgLink from "../../../assets/images/Expenses.webp"
import "../../../MyCSS/hero.css"
import "../../../MyCSS/style.css"
import "../../../MyCSS/style.css"
const InventoryManagement = () => {
  return (
    <>
    <Navbar3 navClass="navbar-light" isSticky={true} fixedWidth buttonClass="btn-primary btn-sm" />

    <main className='whatsapp-main'>
    <div class="base one"></div>
    <div class="base two"></div>
    <div class="base three"></div>
    <div className='whatsapp-first'>
        <div className='whatsapp-first-text'>
            <h1>Streamline Your Inventory with Advanced Management Solutions</h1>

            <ul>
                <li>Optimize Your Supply Chain with Advanced Raw Material Management</li>
                <li>Streamline Your Procurement with Our Suppliers Management System</li>
                <li>Optimize Production with Our Semi-Finished Items Management System</li>
                <li>Streamline Workflow with Our Departments and Requisition Management System</li>

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
    <h1>Optimize with our state-of-the-art Inventory Management System.</h1>
    <p>Designed to simplify the process of managing inventory levels, orders, and supplier relationships.</p>
    {/* <iframe width="800" height="500" src="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
{/* <ModalBoot imgLink={IMG1} vdoLink="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N"/> */}
    <WhatsappFeatures imgLink={imgLink}  vdoClass='d-block' cass="" heading={"Raw Material Management"} wHead={"Optimize Your Supply Chain with Advanced Raw Material Management"} wPara={"Enhance your production efficiency and reduce costs with our sophisticated Raw Material Management System. Designed to streamline the procurement, tracking, and utilization of raw materials, this system ensures that your operations run smoothly and efficiently. With real-time inventory tracking, automated reordering, and detailed usage analytics, you can maintain optimal stock levels, minimize waste, and prevent production delays. "} />
    <WhatsappFeatures imgLink={imgLink} blobClass='five' vdoClass='d-block' cass="flex-row-reverse" heading={"Suppliers Management System"} wHead={"Streamline Your Procurement with Our Suppliers Management System"} wPara={"Enhance your supply chain efficiency and build stronger supplier relationships with our robust Suppliers Management System. This solution is designed to simplify the management of your supplier database, streamline procurement processes, and ensure timely delivery of materials. "} />
    <WhatsappFeatures imgLink={imgLink} blobClass='six' cass="" vdoClass='d-block' heading={"Purchase Management System"} wHead={"Streamline Your Procurement Process with Our Purchase Management System"} wPara={"Enhance your purchasing efficiency and control costs with our advanced Purchase Management System. Designed to simplify the entire procurement cycle, this system automates order creation, approval workflows, and vendor management, ensuring a seamless purchasing process."} />
    <WhatsappFeatures imgLink={imgLink} cass="flex-row-reverse" vdoClass='d-block' heading={"Recipe Management System"} wHead={"Optimize Your Kitchen Operations with Our Recipe Management System"} wPara={"Transform your culinary process with our comprehensive Recipe Management System. Designed to streamline the creation, modification, and scaling of recipes, this system ensures consistency and efficiency in your kitchen."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='five' vdoClass='d-block' cass="" heading={"Semi Finished Items Management System"} wHead={"Optimize Production with Our Semi-Finished Items Management System"} wPara={"Enhance your production workflow and inventory control with our advanced Semi-Finished Items Management System. This system is designed to efficiently track and manage semi-finished products, ensuring smooth transitions between production stages"} />
    <WhatsappFeatures imgLink={imgLink} blobClass='six' vdoClass='d-block' cass="flex-row-reverse" heading={"Requisition Management System"} wHead={"Streamline Workflow with Our Departments and Requisition Management System"} wPara={"Enhance your operational efficiency with our comprehensive Departments and Requisition Management System. Designed to simplify the process of managing internal requests and departmental needs, this system automates requisition workflows, approvals, and tracking. "} />
   
    </div>

    <Footer1/>
    </main>
    </>

  )
}

export default InventoryManagement