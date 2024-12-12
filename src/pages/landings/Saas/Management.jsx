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
import LOGO from "../../../assets/images/Black-Main.webp"

const Management = () => {
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

            <h1>Your All-in-One Restaurant Management Solution</h1>

            <ul>
                <li>Take control of your menu with our intuitive Menu Management system.</li>
                <li>Elevate your service standards with our comprehensive Guest Management system. </li>
                <li>Take control of your finances with our advanced Expense Management system. </li>
                <li>Empower your team and streamline your operations with our comprehensive Staff Management system.</li>
            </ul>
        </div>

        <img src={IMG} width={"300px"} className='whatsapp-first-img' alt='Whatsapp Img'/>


    </div>

    <div className='whatsapp-second'>
    <h1>The Most Versatile Restaurant Management Platform</h1>
    <p>Transform Your Operations with a Comprehensive Restaurant Management System</p>
    {/* <ReactPlayer url="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N" width="800" height="500" controls={true} autoplay={true}  /> */}
{/* <ModalBoot imgLink={IMG1} vdoLink="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N"/> */}
    {/* <iframe width="800" height="500" src="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    <WhatsappFeatures lmClass='d-block' imgLink={imgLink} blobClass='four' cass="" heading={"Inventory Management"} wHead={"Streamline Your Inventory with Advanced Management Solutions"} link='/inventory' wPara={"Optimize your stock control and reduce wastage with our state-of-the-art Inventory Management System. Designed to provide real-time tracking and comprehensive insights, our system simplifies the process of managing inventory levels, orders, and supplier relationships."} />
    {/* <WhatsappFeatures cass="" heading={"Menu Management"} wHead={"Simplify Your Menu Management"} wPara={"Take control of your menu with our intuitive Menu Management system. Designed to make updating, organizing, and optimizing your menu effortless, this feature allows you to easily add, modify, and categorize items with just a few clicks. "} /> */}
    {/* <WhatsappFeatures imgLink={imgLink} blobClass='five' cass="flex-row-reverse" heading={"POS Management"} wHead={"Efficiently Manage Your Point of Sale Operations"} wPara={" Designed to streamline your point of sale operations, our solution integrates seamlessly with your existing infrastructure to provide real-time sales tracking, inventory management, and detailed reporting. With an intuitive interface, our POS Management system simplifies transactions, reduces errors, and enhances the overall customer experience. "} /> */}
    <WhatsappFeatures imgLink={imgLink} blobClass='five' lmClass='d-block' link='/expense' cass="flex-row-reverse" heading={"Expense Management"} wHead={"Streamline Your Expense Management"} wPara={"Take control of your finances with our advanced Expense Management system. Designed to simplify tracking and managing your business expenses, this feature allows you to easily record, categorize, and monitor all your expenditures in real-time. "} />
    <WhatsappFeatures imgLink={imgLink} blobClass='six' lmClass='d-block' link='/staff' cass="" heading={"Staff Management"} wHead={"Optimize Your Workforce with Efficient Staff Management"} wPara={"Empower your team and streamline your operations with our comprehensive Staff Management system. Designed to simplify scheduling, track performance, and enhance communication, this feature allows you to manage your workforce effectively and efficiently."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='four' lmClass='d-block' link='/staffload' cass="flex-row-reverse" heading={"Staff Load Management"} wHead={"Optimize Workforce Efficiency with Advanced Staff Load Management"} wPara={"Streamline your operations and enhance staff productivity with our cutting-edge Staff Load Management system. Designed to balance workload effectively, this feature allows you to monitor and adjust staff schedules based on real-time demand and business needs."} />
   
    </div>

    <Footer1/>
    </main>
    </>
  )
}

export default Management