import { Card, Col, Container, Row } from 'react-bootstrap';
import "../../MyCSS/hero.css"
import Overlay from  "../../assets/images/hero/Otline-Restaurant-Image.webp"
import "../../MyCSS/media.css"
// components
import Lappy from "../../assets/images/White-Laptop-Mockup_2.webp"
import React, { Suspense } from 'react';
import HeroModal from 'pages/landings/Saas/HeroModal';
const SwiperSlider3=React.lazy(()=>import( '../sliders/SwiperSlider3'));
const Hero11 = () => {
    
    return (
        <section className="position-relative hero-11 py-1 pt-5 pb-sm-0 pb-lg-0">
         <HeroModal/>
            <img src={Overlay} decoding='async' alt='Background Overlay' className='position-absolute' style={{width:"100%",height:"100%"}} />
            <Container className="hero-content">
                <Row className="align-items-center">
                    <Col xs={12} className="text-center">
                        <h1 className="hero-title">
                           <span className='hero-title-span' style={{fontFamily:"Shadows Into Light Two",fontSize:"60px"}}> A Complete </span> <br/> <span className="d-inline-block big-span" style={{fontWeight:"800",fontSize:"130px"}}>All-in-1 Solution</span>{' '}
                           <br/>for your <span style={{background:"#ffd835"}} >&nbsp;Restaurant Business&nbsp;</span>
                        </h1>

                        <p className="fs-16 text-muted pt-0 main-para-text">
                        We know what running a Restaurant business is and the challenges every day you face because we started as <br/>
                            <span className='underline' style={{textDecoration:"underline"}}>Restaurant Owners</span> before becoming <span style={{textDecoration:"underline"}} className="underline"> the Solution Providers.</span></p>
                    </Col>
                </Row>
            </Container>

            <div className="feature-container position-relative overflow-hidden mb-4">
                <Container>
                    <Row className="align-items-center justify-content-center zindex-1 slider-container">
                       <img src={Lappy} alt="Laptop Mock up" className='position-absolute hero-lappy' />
                        <Col xs={10} className="text-center zindex-1 px-0" >
                            <Card className="rounded-lg shadow" data-aos="fade-up" data-aos-duration="2000" >

                                <Card.Body className="slider-container-body">
                                    <div className="slider">
                               <Suspense fallback={<p>Loading....</p>}>
                                        <SwiperSlider3 />
                               </Suspense>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Hero11;
