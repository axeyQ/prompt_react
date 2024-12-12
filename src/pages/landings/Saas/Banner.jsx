import "../../../MyCSS/Section7.css"
import IMG1 from "../../../assets/images/hero/Rishabh-and-Arpit.webp"
import IMG2 from "../../../assets/images/hero/Amit.webp"


const Section7 = () => {
  return (
<section className="seventh" >
  <div className="outer">
    <div className="inner">
      <div className="bg" >
      <div className="upperSection">
      <div className="hidden-para">
   
      <p style={{textAlign:"center"}}>At Easyposy, our mission as a leading POS and restaurant management system is to simplify restaurant operations, making life easier for our valued restaurant owners.</p>


      </div>
      <div className="quotations">
      <h1 className="qts">"</h1>
      <p className="sectionP" id="seventh">We are aware of what running a restaurant entails and the challenges that arise. We have collectively worked in this field for over ten years. As members of the community, our goal is to provide the greatest possible support to our community.</p>
      <h1 className="qts" >"</h1>
    
    </div>
      <h6 className="section-heading1" >not a product, but</h6>
      <h3 className="section-heading" >a solution,<br/>from the<br/>Restaurant Owners</h3>
        <img className="randa"src={IMG1} loading='lazy' alt="Rishabh and Arpit"/>
      </div>
      <div className="lowerSection">
      <h3 className="section-heading2" >to the<br/>Restaurant Owners</h3>
      <img className="aonly"src={IMG2} loading='lazy' alt="Amit"/>

      </div>
        {/* <h2 className="section-heading" >Animation platform</h2> */}
      </div>
    </div>
  </div>
</section>
  )
}

export default Section7