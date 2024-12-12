import React from 'react'
import "./Whatsapp.css"
import IMG from "../../../assets/images/Step-11.webp"
import WhatsappFeatures from './WhatsappFeatures'
import { Footer1 } from 'components/footer'
import { Navbar3 } from 'components/navbars'
// import ModalBoot from 'pages/ModalBoot'
import imgLink from "../../../assets/images/Expenses.webp"
import "../../../MyCSS/hero.css"
import "../../../MyCSS/style.css"
import "../../../MyCSS/style.css"
import LOGO from "../../../assets/images/Black-Main.webp"

const ExpenseManagement = () => {
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

            <h1>Your All-in-One Expense Management Solution</h1>

            <ul>
                <li>Vendors here are different from your suppliers in inventory management. The purchase of Non-ingredients, Services, and their payments can be managed from here.</li>
                <li>Manage all your expenses, the non-ingredients, the services you take, rent, internet, etc this section.</li>

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
    <h1>Efficiently Control Your Finances with Our Expense Management System</h1>
    <p>Take charge of your business expenses with our advanced Expense Management System.</p>
{/* <ModalBoot imgLink={IMG1} vdoLink="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N"/> */}
    

    <WhatsappFeatures imgLink={imgLink} vdoClass='d-block' cass="" heading={"Vendor List and Management System"} wHead={"Streamline Your Procurement with Our Vendor List and Management System"} wPara={"Enhance your supply chain efficiency with our comprehensive Vendor List and Management System. This system is designed to centralize and streamline the management of your vendor information, including contact details, performance metrics, and transaction history. "} />
    <WhatsappFeatures imgLink={imgLink} blobClass='five' vdoClass='d-block' cass="flex-row-reverse" heading={"Expense List and Management System"} wHead={"Gain Financial Control with Our Expense List and Management System"} wPara={"Effortlessly manage and track your business expenses with our advanced Expense List and Management System. Designed to streamline financial oversight, this system allows you to easily create, categorize, and monitor all expenses in one centralized platform. "} />
   
    </div>

    <Footer1/>
    </main>
    </>

  )
}

export default ExpenseManagement