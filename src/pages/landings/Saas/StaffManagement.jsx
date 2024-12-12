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

const StaffManagement = () => {
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

            <h1>Your All-in-One Staff Management Solution</h1>

            <ul>
                <li>No more random hiring and taking details of new joiners on papers without agreements.</li>
                <li>Attendance or Leave. Let Eazyposy help you with managing your employees' attendance and leaves. </li>
                <li>It is more than a salary management tool, it is like a salary calculator that calculates the salary of your employees, actual working hours, overtime, leaves, advances, and payable to date.</li>

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
    <h1>Optimize Your Workforce with Our Comprehensive Staff Management System</h1>
    <p>Streamline your HR processes and enhance workforce efficiency with our robust Staff Management System.</p>
{/* <ModalBoot imgLink={IMG1} vdoLink="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N"/> */}
    

    <WhatsappFeatures imgLink={imgLink} vdoClass='d-block' cass="" heading={"Staff register & Terminate"} wHead={"Simplify Onboarding and Offboarding with Our Staff Registration and Termination System"} wPara={"Effortlessly manage employee lifecycle events with our streamlined Staff Registration and Termination System. Designed to simplify both the onboarding and offboarding processes, this system ensures a smooth transition for new hires and departing employees."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='five' vdoClass='d-block' cass="flex-row-reverse" heading={"Attendance & Leave Management"} wHead={"Streamline Attendance and Leave Management with Our Comprehensive Solution"} wPara={"Simplify your HR processes with our advanced Attendance and Leave Management System. Designed to automate and streamline the tracking of employee attendance, leave requests, and absences, our system ensures accuracy and efficiency. "} />
    <WhatsappFeatures imgLink={imgLink} blobClass='six' vdoClass='d-block' cass="" heading={"Salary Management"} wHead={"Efficiently Manage Salaries with Our Advanced Salary Management System"} wPara={"Streamline your payroll processes with our comprehensive Salary Management System. Designed to automate salary calculations, deductions, and payments, our system ensures accuracy and compliance with tax regulations and labor laws."} />
    <WhatsappFeatures imgLink={imgLink} vdoClass='d-block' cass="flex-row-reverse" heading={"Attendance Statistics"} wHead={"Gain Insights with Comprehensive Attendance Statistics"} wPara={"Unlock the power of data with our advanced Attendance Statistics feature. Designed to provide detailed insights into employee attendance patterns, this tool helps you monitor punctuality, track absenteeism, and identify trends over time. "} />
   
    </div>

    <Footer1/>
    </main>
    </>

  )
}

export default StaffManagement