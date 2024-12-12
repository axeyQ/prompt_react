import { Link } from 'react-router-dom';
import Bow from "../../../assets/images/Black-Main.webp"
import "./BlogCTA.css"


const BlogCta = ({background }) => {


    return (
        <a href="https://wa.me/7722932942?text=I%20want%20to%20know%20about%20Demo%20and%20Purchase" target="_blank" className='blog-cta-counter'>
            <div className="blog-cta-card">
                <div className="blog-cta-card-inner">

                    <div className="blog-cta-card-front" style={{background:background}}>

                        <div className="d-flex justify-content-center digital-clock align-items-center flex-column" style={{height:"100%"}}>
                            <img src={Bow} width={150} alt='Gift Bow'/>
                            <h1 className='mb-2 mt-0  text-black text-center'>Want More from us?</h1>
                          
                        </div>
                    </div>
                    <div className="blog-cta-card-back" style={{background:background}}>

                    <div className="d-flex justify-content-center digital-clock flex-column align-items-center" style={{height:"100%"}}>
                            <h1 className='mb-2 mt-0  text-white'>Book a demo</h1>
                            <div className='my-2 p-2 border border-white rounded-3' style={{cursor:"pointer",fontSize:"10px"}}>Book Now</div>
                        </div>
                    </div>
                </div>
            </div>

        </a>
    );
};

export default BlogCta;
