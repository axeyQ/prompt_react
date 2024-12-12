import React from 'react'

import founder from "../../../assets/images/Founder1.webp"
const CallToAction = () => {
    
    return (
    <div className='cta-wrapper'>

        <div className='cta-card'>
        <div className='cta-1'>           
        <h3>Sometimes, we all say this<br/>"Jise takleef hoti h, use hi pata h!! The one who is facing challenges only knows what it is and how critical it is?!"<br/><br/><span class="wiseQuote">In addressing our own challenges as restaurant owners, we initially created this solution out of necessity for our businesses. However, we quickly realized that this issue is prevalent among restaurant owners globally, and indeed, worldwide. Without sharing this solution with others in the community, its value is significantly diminished. We earnestly wish to support, tailor, and adapt this solution to meet everyone's needs. Additionally, we aspire to build a community around it where each member can leverage their unique skills to assist one another.
        </span><br/><br/><span class="quoteName">Amit Birwal<br/>Founder</span></h3>
           <div className='d-flex justify-content-center align-items-center gap-2'>
            <a href="https://wa.me/7722932942?text=I%20want%20to%20know%20more%20about%20Eazyposy" target="_blank" className='cta-button'>Book a Demo</a>
     
      </div>

        </div>
        <img loading='lazy' src={founder} class="cta-img" alt="Amit Kr Birwal"/>
        </div>

    </div>
  )
}

export default CallToAction