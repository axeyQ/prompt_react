import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import TableView from '../../../assets/images/Hero-Section-Banner.webp';
import TimeCounter from './TimeCounter';
import "./BlackFriday.css"

function HeroModal() {
  const targetDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>


      <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='bg-black border-radius-25'>
        <Link to={"/blackfriday"}>
          <img src={TableView} alt='Table View' style={{width:'100%'}} />
        </Link>
        </Modal.Body>
      </Modal>
      {
        !show?
        <TimeCounter targetDate={targetDate} background={"linear-gradient(180deg, #1c1c1c -11.24%, #22222200)"} />:
      <div style={{background:"green",color:"black",position:"fixed",left:0,bottom:"100px",display:"none"}}>Hello</div>
      }

    </>
  );
    }

export default HeroModal;