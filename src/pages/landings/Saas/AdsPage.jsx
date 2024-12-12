import React, { Suspense, useState } from 'react';

// components
import { Hero11 } from 'components/heros';
import { Navbar3 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import { Footer1 } from 'components/footer';

// import Features1 from './Features1';
// import Features2 from './Features2';
// import Features3 from './Features3';
// import Clients from './Clients';
// import Testimonials from './Testimonials';
// import Pricing from './Pricing';
// import FAQs from './FAQs';

// dummy data
// import { features, plans } from './data';
// import FeaturesMain from './FeaturesMain';
// import VideoSection from './VideoSection';
import Screenshots from './Screenshots';
// import Newsletter from './Newsletter';
import CallToAction from './CallToAction';
import FeaturesComp from './FeaturesComp';
// import FeaturesMob from './FeaturesforMob';
import MobFeatures from './MobFeatures';
import Screenshots1 from './Screenshots1';
import { Link } from 'react-router-dom';
import Ads from './Ads';
const Section7=React.lazy(()=>import('./Banner'));
const Step=React.lazy(()=>import('./Step'));
const NewFeatures =React.lazy(()=>import('./NewFeatures')) ;

const AdsPage = () => {
   
    return (
        <>
                

            <div>
   
                <Navbar3 navClass="navbar-light" isSticky={true} fixedWidth buttonClass="btn-primary btn-sm" />
                <Hero11 />
            </div>
            <Suspense fallback={<p>Loading...</p>}>
            <Section7/>
            </Suspense>
            <Step/>

            <NewFeatures/>

            <Screenshots/>
            {/* <Screenshots1/> */}
            {/* <VideoSection/> */}

           {/* <FeaturesComp/> */}
           <MobFeatures/>

            {/* <Features1 features={features} containerClass="position-relative overflow-hidden py-4 pb-lg-7" /> */}

            {/* <Features2 /> */}

            {/* <Features3 /> */}

            {/* clients */}
            {/* <Clients /> */}

            {/* testimonials */}
            {/* <Testimonials /> */}

            {/* pricing */}
            {/* <Pricing plans={plans} /> */}

            {/* FAQs */}
            {/* <FAQs /> */}
            {/* <Newsletter/> */}
            <CallToAction/>
            {/* footer */}
            <Ads/>
            <Footer1 />

            <BackToTop />
        </>
    );
};

export default AdsPage;
