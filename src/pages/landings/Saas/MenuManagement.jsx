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

const MenuManagement = () => {
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
                <li>Streamline Your Inventory with Our Item Management System</li>
                <li>Organize Your Inventory with Parent and Category Management</li>
                <li>Streamline Your Venue with Our Tables and Table Types Management System</li>
                <li>Customize and Optimize with Our Menu Configuration and Pricing Management System</li>

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
    <WhatsappFeatures imgLink={imgLink} vdoClass='d-block' cass="" heading={"Item Management"} wHead={"Streamline Your Inventory with Our Item Management System"} wPara={"Simplify your inventory control with our advanced Item Management System. This system is designed to offer a centralized platform for tracking and managing your items, ensuring efficient stock management and optimal product availability. "} />
    <WhatsappFeatures imgLink={imgLink} blobClass='five' vdoClass='d-block' cass="flex-row-reverse" heading={"Parent and Category Management System"} wHead={"Organize Your Inventory with Parent and Category Management"} wPara={"Efficiently structure your inventory with our advanced Parent and Category Management System. This system allows you to categorize items into parent groups and subcategories, providing a clear and organized view of your product hierarchy."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='six' vdoClass='d-block' cass="" heading={"Tables and Table Types"} wHead={"Streamline Your Venue with Our Tables and Table Types Management System"} wPara={"Enhance your venue’s organization with our intuitive Tables and Table Types Management System. This system allows you to easily define and manage different table types, such as standard tables, booths, and high-tops, each with unique seating capacities and configurations."} />
    <WhatsappFeatures imgLink={imgLink} vdoClass='d-block' cass="flex-row-reverse" heading={"Menu Configuration and Pricing Management"} wHead={"Customize and Optimize with Our Menu Configuration and Pricing Management System"} wPara={"Take control of your menu with our advanced Menu Configuration and Pricing Management System. Designed to simplify menu setup and pricing strategies, this system allows you to create, modify, and manage your menu offerings with ease."} />
   
    </div>

    <Footer1/>
    </main>
    </>

  )
}

export default MenuManagement