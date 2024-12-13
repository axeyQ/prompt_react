import React, { Suspense, useState } from 'react';

// components
import { Hero11 } from 'components/heros';
import { Navbar3 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import { Footer1 } from 'components/footer';
import Screenshots from './Screenshots';
import CallToAction from './CallToAction';
import MobFeatures from './MobFeatures';
import HomeHelmet from './HomeHelmet';
const Section7=React.lazy(()=>import('./Banner'));
const Step=React.lazy(()=>import('./Step'));
const NewFeatures =React.lazy(()=>import('./NewFeatures')) ;

const Saas2 = () => {
   
    return (
        <>
            <HomeHelmet/>

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
            <Footer1 />

            <BackToTop />
        </>
    );
};

export default Saas2;
