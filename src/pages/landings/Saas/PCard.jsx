import './PCard.css'
import { useState } from 'react'
import '../../../MyCSS/media.css'
import ModalPricing from './ModalPricing'
const PCard = ({plans}) => {
  const [activeTab, setActiveTab] = useState('monthly')

  const handleTabClick = (tab, e) => {
    e.preventDefault()
    setActiveTab(tab)
  }

  return (
    <div className="modal1">
  <form className="form1">
    <div className="banner1"></div>
    <div className='d-flex justify-content-center align-items-center gap-4'>
    <label className="title1">{plans.title}</label>
    <label className="price1">
        <sup>₹</sup>
        {activeTab === 'monthly' ? plans.price : plans.annualPrice}
        <sub>/{activeTab === 'monthly' ? 'mo' : 'yr'}</sub>
      </label>
    </div>
    <div className="tab-container1">
      <button 
        type="button"
        className={`tab1 tab--1 ${activeTab === 'monthly' ? 'active' : ''}`}
        onClick={(e) => handleTabClick('monthly', e)}
      >
        {plans.planType[0]}
      </button>
      <button 
        type="button"
        className={`tab1 tab--2 ${activeTab === 'annual' ? 'active' : ''}`}
        onClick={(e) => handleTabClick('annual', e)}
      >
        {plans.planType[1]}
      </button>
      <div className="indicator1"></div>
    </div>

    <div className="benefits1">
      <span>What we offer</span>
      <ul>
      {plans.features.map((feature,index)=>(
        <li key={index}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16" className='mt-1'>
            <rect fill="black" rx="8" height="16" width="16"></rect>
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="white" d="M5 8.5L7.5 10.5L11 6"></path>
          </svg>
          <div className='d-flex flex-column gap-2 new-ul'>
          <span style={{fontSize:'14px'}}>{feature.title}</span>
          <div className='d-flex gap-2 flex-wrap'>
            {feature.features.map((feature,index)=>(
              
              <ModalPricing feature={feature} key={index}/>
            ))}
          </div>
          </div>
        </li>
      ))}
      </ul>
    </div>

    <div className="modal--footer1">

      <a href="https://wa.me/7722932942?text=I%20want%20to%20know%20about%20Demo%20and%20Purchase" target="_blank" className="upgrade-btn1">Book a Demo</a>
    </div>
  </form>
</div>
  )
}

export default PCard