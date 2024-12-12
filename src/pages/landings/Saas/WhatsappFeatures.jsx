import React from 'react'
import "./WhatsappFeatures.css"
import { Link } from 'react-router-dom'
import ModalLm from "../../ModalLm"
import ModalBoot from 'pages/ModalBoot'
const WhatsappFeatures = ({heading,wHead,wPara,cass,link="/",blobClass="four",lmClass="d-none",vdoClass,imgLink,wfID=""}) => {
  return (
    <div className='whatsappFeatures' id={`${wfID}`}>
        <h1>{heading}</h1>
        <div className={`w-feat ${cass}`}>
<ModalBoot imgLink={imgLink} vdoLink="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N" />
            
            <div className='w-feat-text'>
                <h1>{wHead}</h1>
                <p>{wPara}</p>
                <div className=" d-lg-flex d-none justify-content-start">
                            {/* <div className="me-4">
                                <FeatherIcon icon="check-circle" className="icon icon-dual-success icon-xs me-1" />
                                Free for a Year
                            </div> */}

<div className={`item button-parrot ${lmClass}`}>
<Link to={link}  className={` hello-btn`} style={{fontSize:"13px",fontWeight:550,padding:".7rem 1rem",lineHeight:.9}} >Learn More</Link>

  </div>     

                        </div>
                <ModalLm vdoClass={vdoClass}/>
                <div className={`base ${blobClass}`}></div>
            </div>
        </div>
    </div>
  )
}

export default WhatsappFeatures