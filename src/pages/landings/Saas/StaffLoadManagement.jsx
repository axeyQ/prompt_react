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

const StaffLoadManagement = () => {
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

            <h1>Optimize Your Workforce with Our Staff Load Management System</h1>

            <ul>
                <li>Recall the day-end planning/discussion you have with your managers for the next day, critically necessary!.</li>
                <li>Once Laod you is created from the top level, the manager/supervisor in operation can see a clear take list of tasks and every minute detail along with it. </li>

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
    <h1>Optimize Workforce Efficiency with Our Staff Load Management System</h1>
    <p>Effectively balance workloads and enhance productivity with our advanced Staff Load Management System.</p>
{/* <ModalBoot imgLink={IMG1} vdoLink="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N"/> */}
    

    {/* <ReactPlayer url="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N" width="800" height="500" controls={true} autoplay={true}  /> */}
    {/* <iframe width="800" height="500" src="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    <WhatsappFeatures imgLink={imgLink} vdoClass='d-block' cass="" heading={"Load Creation"} wHead={"Streamline Task Management with Our Load Creation System"} wPara={"Simplify and enhance your operational workflow with our intuitive Load Creation system. Designed to streamline the process of assigning and managing tasks, this feature allows you to easily create, allocate, and prioritize workloads across your team."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='five' vdoClass='d-block' cass="flex-row-reverse" heading={"Tasklist and Action"} wHead={"Enhance Productivity with Our Tasklist and Action System"} wPara={"Organize and prioritize your workflow with our efficient Tasklist and Action System. Designed to streamline task management, this system enables you to create detailed task lists, assign actions, and monitor progress in real-time. "} />
    <WhatsappFeatures imgLink={imgLink} blobClass='six' vdoClass='d-block' cass="" heading={"Staff Performance and Control"} wHead={"Enhance Team Efficiency with Our Staff Performance Control System"} wPara={"Optimize your workforce management with our comprehensive Staff Performance Control system. Designed to monitor, evaluate, and enhance employee performance, this system provides detailed insights into individual and team productivity."} />
   
    </div>

    <Footer1/>
    </main>
    </>

  )
}

export default StaffLoadManagement