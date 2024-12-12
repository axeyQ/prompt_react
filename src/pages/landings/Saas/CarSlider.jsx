import React from 'react'

const CarSlider = ({img,title,paraStart,src}) => {
  return (
   <div className='item'>
   <div class="mb-1" style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
    <h6 className='paraStart' >{paraStart} </h6>
    <img src={src} alt="Arrow"  style={{width:"30px"}}/>
    </div>
    <img src={img} loading='lazy' alt={title}/>
    <h3 className='car-text'>{title}</h3>
    <h6 className='paraStart '>{paraStart}</h6>

   </div>
  )
}

export default CarSlider