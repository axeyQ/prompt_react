import "./BlackFriday.css";
import TimeCounter from "./TimeCounter";
import BfIMG from "../../../assets/images/bf-hero.webp"
import BFHero from "../../../assets/images/TempBlackFriday.avif"
import BFPlanCard from "./BFPlanCard";
import { FaChevronDown } from "react-icons/fa";
import didi from "../../../assets/images/didi.png"
import didi2 from "../../../assets/images/didi2.png"
import didi3 from "../../../assets/images/didi3.png"
import didi4 from "../../../assets/images/didi4.png"
import mobHero from "../../../assets/images/bf-heroMob.webp"
import mobOffer from "../../../assets/images/bf-mob-offer.webp"


import { Footer1 } from "components/footer";
import { Navbar3 } from "components/navbars";
const BlackFriday = () => {
    const targetDate = new Date("12/25/2024");
    return ( 
        <>
                        <Navbar3 navClass="navbar-light" isSticky={true} fixedWidth buttonClass="btn-primary btn-sm" />

    <div className="bf-bg">
        <div className="bf-hero d-none d-lg-block">
        <TimeCounter targetDate={targetDate} background={"linear-gradient(180deg, #ffdfdf0f -11.24%, #222222)"}/>
        <div className="bf-scroll-down animate-scroll ">
                <p className="scroll-down-text">Scroll Down to see offers</p>
                <FaChevronDown className="scroll-down-text" />
            </div>

            
        </div>
        <div className="d-flex d-lg-none flex-column justify-content-center align-items-center mob-bf-hero">
        <TimeCounter targetDate={targetDate} background={"linear-gradient(180deg, #ffdfdf0f -11.24%, #222222)"}/>

        <div className="d-flex d-lg-none justify-content-center flex-column align-items-center">
                <img src={mobOffer} width={"100%"} alt="Girl holding a plate" />
                <h1 className="text-white my-0">Basic Plan, Free For an Year</h1>
                <img src={mobHero} width={"100%"} alt="Girl holding a plate" />
            </div>
        <div className="bf-scroll-down animate-scroll ">
                <p className="scroll-down-text">Scroll Down to see offers</p>
                <FaChevronDown className="scroll-down-text" />
            </div>

            
        </div>
      
        <div className="d-flex p-0 py-5 lg-p-5 bf-offers flex-lg-row flex-column justify-content-center align-items-center">
            <div className="bf-card-div">      
            <BFPlanCard title={"Evergreen"}/>
            <img src={didi2} width={"180px"} alt="Girl holding a plate" />
            </div>
            <div className="bf-card-div">      
            <BFPlanCard title={"Advanced"}/>
            <img src={didi} width={"180px"} alt="Girl holding a plate" />
            </div>
            <div className="bf-card-div">      
            <BFPlanCard title="Pro"/>
            <img src={didi4} width={"180px"} alt="Girl holding a plate" />
            </div>
           
        </div>
    </div>
    <Footer1/>
    </>

     );
}
 
export default BlackFriday;