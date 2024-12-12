import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import classNames from 'classnames';
import MenuButton from '../../pages/landings/Saas/Hamburger/MenuButton';
import Menu from '../../pages/landings/Saas/Hamburger/Menu';
import MenuItem from '../../pages/landings/Saas/Hamburger/MenuItem';
import './Navbar.css'


// images
import logo from '../../assets/images/Black-Main.webp';
import { Link } from 'react-router-dom';
import Dropdown from 'pages/landings/Saas/Dropdown';

type Navbar3Props = {
    isSticky?: boolean;
    navClass?: string;
    buttonClass?: string;
    fixedWidth?: boolean;
};

const Navbar3 = ({ isSticky, navClass, buttonClass, fixedWidth }: Navbar3Props) => {

    // on scroll add navbar class and back to top button
    useEffect(() => {
        const btnTop = document.getElementById('btn-back-to-top');
        const navbar = document.getElementById('sticky');
        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            if (btnTop) {
                if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                    btnTop.classList.add('show');
                } else {
                    btnTop.classList.remove('show');
                }
            }
            if (navbar) {
                if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                    navbar.classList.add('navbar-sticky');
                    navbar.classList.remove('d-none');
                } else {
                    navbar.classList.remove('navbar-sticky');
                    navbar.classList.add('d-none');
                }
            }
        });
    }, []);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
    };
  
    const handleLinkClick = () => {
      setMenuOpen(false);
    };
  
    const styles = {
     
      logo: {
        margin: '0 auto',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        filter: menuOpen ? 'blur(2px)' : null,
        transition: 'filter 0.5s ease',
      },
    };
  
    const menu = [['Resources',"/blogs"],['Pricing',"/pricing"],['Ordering',"/ordering"], ['Sales',"/sales"], ['Billing',"/billing"],['Management',"/management"]];
    const menuItems = menu.map(([val,loc], index) => (
      <MenuItem
        key={index}
        delay={`${index * 0.1}s`}
        onClick={handleLinkClick}
      >
        <Link to={loc}>
        {val}
        </Link>
      </MenuItem>
    ));
    return (
        <header>
            
            <Navbar
                id={isSticky ? 'sticky' : ''}
                collapseOnSelect
                expand="lg"
                className={classNames('topnav-menu', navClass,'d-none')}
            >
                 <div className='d-lg-none d-flex' style={{
        top: 0,
        left: 0,
        zIndex: '99',
        opacity: 0.9,
        alignItems: 'center',
        background: 'fff',
        width: '100%',
        color: 'white',
        fontFamily: 'Lobster',
        height:"60px",
        justifyContent:"space-between",
        padding:"0 10px",
        boxShadow:"0 7px 14px 0 rgba(52,58,64,.06)"
      }}>
        <MenuButton open={menuOpen} onClick={handleMenuClick} color="black" />
        <Link to="/" style={{marginBottom:"0!important",padding:0}}>
                        <img src={logo} height="60" className="d-inline-block align-top" alt="Eazyposy Logo" loading='lazy' />
                    </Link>
      </div>
      <Menu open={menuOpen}>{menuItems}</Menu>
                <Container fluid={!fixedWidth} className='justify-content-center d-none d-lg-flex'>
                  
        
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-between' style={{maxWidth:"100%"}}>
                 
                      <Link to="/">
                        <img src={logo} height="60" className="d-inline-block align-top" alt="Eazyposy Logo" loading='lazy' />
                    </Link>
                    <div className='d-flex justify-content-end align-items-center'>
                    <Nav as="ul" className="align-items-lg-center">
                          
                          <Nav.Item as="li">
                              <Dropdown/>
                          </Nav.Item>
                      </Nav>
                      
                      <Nav as="ul" className="align-items-lg-center">
                          
                          <Nav.Item as="li">
                              <Link
                              style={{minWidth:"200px"}}

                                  to="/blogs"
                                  className={classNames('btn btn-anonymous', buttonClass ? buttonClass : 'btn-soft-primary')}
                              >
                                 Resources
                              </Link>
                          </Nav.Item>
                      </Nav>
                    <Nav as="ul" className="align-items-lg-center">
                          
                          <Nav.Item as="li">
                              <Link
                              style={{minWidth:"200px"}}
                                  to="/pricing"
                                  className={classNames('btn btn-anonymous', buttonClass ? buttonClass : 'btn-soft-primary')}
                              >
                                 Pricing
                              </Link>
                          </Nav.Item>
                      </Nav>

                      
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navbar3;
