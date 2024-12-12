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

const Whatsapp = () => {
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

            <h1>Your All-in-One WhatsApp Engagement Solution</h1>

            <ul>
                <li>Sales Dashboard is as it states, it will provide you with your recent campaigns, and conversions.</li>
                <li>Template Management helps you create and store templates to access them for your campaigns.</li>
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
    <h1>The Most Versatile WhatsApp Platform</h1>
    <p>Everything Required for User Notifications, Chat, and Engagement, All in One Place</p>
{/* <ModalBoot imgLink={IMG1} vdoLink="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N"/> */}
    

    {/* <ReactPlayer url="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N" width="800" height="500" controls={true} autoplay={true}  /> */}
    {/* <iframe width="800" height="500" src="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    <WhatsappFeatures imgLink={imgLink} vdoClass='d-block' cass="" heading={"Broadcast Message"} wHead={"Instantaneous Import and Broadcast"} wPara={"Easily import all your contacts and instantly broadcast approved messages.Monitor real-time analytics on the AiSensy Platform for delivery rates, read rates, and more."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='five' vdoClass='d-block' cass="flex-row-reverse" heading={"Live Chat"} wHead={"Multiple Operator Live Chat"} wPara={"Enable multiple team members to provide live chat support using the same WhatsApp Business Number.Organize chats by tags, campaigns, and attributes for intelligent agent chat routing."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='six' vdoClass='d-block' cass="" heading={"Templates"} wHead={"Instantaneous Import and Broadcast"} wPara={"Easily import all your contacts and instantly broadcast approved messages.Monitor real-time analytics on the AiSensy Platform for delivery rates, read rates, and more."} />
    <WhatsappFeatures imgLink={imgLink} vdoClass='d-block' cass="flex-row-reverse" heading={"Campaigns"} wHead={"Instantaneous Import and Broadcast"} wPara={"Easily import all your contacts and instantly broadcast approved messages.Monitor real-time analytics on the AiSensy Platform for delivery rates, read rates, and more."} />
    <WhatsappFeatures imgLink={imgLink} blobClass='five' vdoClass='d-block' cass="" heading={"Guest Management"} wHead={"Enhance Guest Experience with Our Advanced Guest Management System"} wPara={"Streamline your guest interactions and elevate their experience with our comprehensive Guest Management System. Designed to simplify reservations, track guest preferences, and manage check-ins and check-outs, this system ensures a seamless and personalized service for every guest."} />
   
    </div>

    <Footer1/>
    </main>
    </>

  )
}

export default Whatsapp