import { Link } from 'react-router-dom';

// swiper
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// images

import saas1 from 'assets/images/hero/Dashboard-1.webp';
import saas2 from 'assets/images/hero/Dashboard-2.webp';
import saas3 from 'assets/images/hero/Guest-Mg.webp';
import saas4 from 'assets/images/hero/Table-View.webp';
import saas5 from 'assets/images/hero/All-Items.webp';
import saas6 from 'assets/images/hero/Expenses.webp';
import saas7 from 'assets/images/hero/Raw-Material.webp';
import saas8 from 'assets/images/hero/Reports.webp';
import saas9 from 'assets/images/hero/Sales-Register.webp';
import saas10 from 'assets/images/hero/Staff-Mgt.webp';
import saas11 from 'assets/images/hero/KOT-Views.webp';
import saas12 from 'assets/images/hero/Live-View.webp';

const SwiperSlider3 = () => {
    const swiperConfig = {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            '576': { slidesPerView: 1.2 },
            '768': { slidesPerView: 1 },
        },
        roundLengths: true,
    };

    return (
        <Swiper modules={[Autoplay]} {...swiperConfig}>
                        {([[ saas4,"Table View"],[saas9,"Sales Register"],[saas1,"dashboard"],[ saas3,"Guest Management"],[saas5,"All Items"],[saas6,"Expenses"],[saas7,"Raw Materials"], [saas2,"dashboard"],[saas8,"Reports"],[saas10,"Staff Management"],[saas11,"KOT Views"],[saas12,"Live View"]]).map(([img,stree], index) => {

                return (
                    <SwiperSlide key={index.toString()}>
                      <div className="swiper-slide-content ">
                           
                           <img src={img} alt="" className="img-fluid rounded-lg mt-2" height="500px" />
                           <h3 style={{position:"absolute",zIndex:15,bottom:"-20px",fontSize:"30px",textAlign:"left",background:"#fff",paddingRight:"10px",textTransform:"uppercase",fontFamily:"poppins",textShadow:"2px 2px #fff"}}>{stree}</h3>
                       </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SwiperSlider3;
