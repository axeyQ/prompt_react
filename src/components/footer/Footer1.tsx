import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"
// imgaes
import logo from 'assets/images/Black-Main.webp';
import Meta from "assets/images/meta-tech-partner.png"
import PayU from "assets/images/PayU.svg"
import Paypal from "assets/images/paypal.svg"
import RazorPay from "assets/images/razorpay.svg"
const Footer1 = () => {
    return (
        <section className="mt-lg-5 pt-lg-5 pt-md-5 pb-lg-4 pb-md-4 pb-3 pt-3 px-sm-3 bg-gradient3 position-relative">
            <Container>
            <Row className='justify-content-between align-items-center'>
            <Link className="navbar-brand me-lg-4 mb-2 me-auto d-flex align-items-center pt-0 col-lg-4 col-12" to="#">
                            <img src={logo} loading='lazy'  height="50" alt="Eazyposy Logo" />
                            <img src={Meta} loading='lazy' className='mx-2' height={"30"} alt='Meta Logo'/>
                        </Link>
                        <Link className="navbar-brand me-lg-0 pe-0 mb-4 me-auto d-flex flex-column justify-content-start align-items-center pt-0 col-lg-2 col-12" to="#">
                           <span style={{fontSize:"10px",marginBottom:"5px"}}>Payment Partners</span>
                           <span className='d-flex justify-content-center align-items-center w-100 '>

                            <img src={Paypal} loading='lazy' className='mx-2' height={"30"} alt='Paypal Logo'/>
                            <img src={PayU} loading='lazy' className='ff_img'  height="30" alt="PayU Logo" />
                            <img src={RazorPay} loading='lazy' className='mx-2' height={"20"} alt='Paypal Logo'/>
                           </span>

                        </Link>
</Row>
                <Row className='justify-content-between align-items-center'>
                    <Col xl={2}>
                    
                        <p className="text-muted">
                            5E, Fifth Floor, Maple High Street, in front of Aashima Mall, Narmadapuram Road, Bhopal, Madhya Pradesh
                        </p>
                    </Col>
                      <Col xl="auto" lg={6} xs={6} >
                        <div className="d-none d-lg-block">
                            <h6 className="mb-1 mt-1 mb-md-1 mb-lg-1 mt-md-1 mt-lg-1 mt-sm-2 fs-14 fw-semibold text-uppercase">Company</h6>
                            <ul className="list-unstyled">
                                <li className="my-1">
                                    <Link to="#" className="text-muted">
                                        Features
                                    </Link>
                                </li>
                                <li className="my-1">
                                    <Link to="/blogs" className="text-muted">
                                        Resources
                                    </Link>
                                </li>
                                <li className="my-1">
                                    <Link to="/pricing" className="text-muted">
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                
                    <Col xl="auto" lg={6} xs={12}>
                        <div className="ps-xl-5">
                            <ul className="list-unstyled forMobList">
                                
                                <li className="my-lg-1 my-sm-0">
                                    <Link to={"/privacy"} className="text-muted">
                                        Privacy Policy &nbsp;&nbsp;&nbsp;|
                                    </Link>
                                </li>

                                <li className="my-lg-1 my-sm-0">
                                    <Link to={"/terms"} className="text-muted">
                                        Terms of Service &nbsp;&nbsp;&nbsp;|
                                    </Link>
                                </li>
                                <li className="my-lg--1 my-sm-0">
                                    <Link to={"/refund"} className="text-muted">
                                        Refund &nbsp;&nbsp;&nbsp;
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className="text-md-start text-center">
                    <Col md={8}>
                        <p className="pb-0 mb-0 text-lg-end text-muted">
                            {new Date().getFullYear()} © Eazyposy Infotech Pvt Ltd. All rights reserved.
                        </p>
                    </Col>
                    {/* <Col md={4} className="text-md-end">
                        <div className="align-items-end mt-md-0 mt-4">
                            <ul className="list-unstyled mb-0">
                                <li className="d-inline-block me-4">
                                    <Link to="#">
                                        <FeatherIcon icon="facebook" className="icon icon-xs" />
                                    </Link>
                                </li>
                                <li className="d-inline-block me-4">
                                    <Link to="#">
                                        <FeatherIcon icon="twitter" className="icon icon-xs" />
                                    </Link>
                                </li>
                                <li className="d-inline-block">
                                    <Link to="#">
                                        <FeatherIcon icon="linkedin" className="icon icon-xs" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </section>
    );
};

export default Footer1;
