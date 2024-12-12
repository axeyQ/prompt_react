import React, { useEffect } from 'react'

const Ads = () => {
  useEffect(()=>{
    try{
      (window.adsbygoogle = window.adsbygoogle || []).push({});

    }catch(err){}
  },[]);
  return (
    <div>
{/* <!-- RestroAdRec_1 --> */}
<ins className="adsbygoogle"
    style={{display:"inline-block",width:"800px",height:"400px"}}
    data-ad-client="ca-pub-5230983184187192"
    data-ad-slot="5421056172"></ins>
</div>
  )
}

export default Ads