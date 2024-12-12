import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
import "./ModalBoot.css"
function ModalBoot({vdoLink="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N",vdoClass="d-none"}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
               <div className=" d-lg-flex d-none justify-content-start">
<div className="item button-parrot">
<button  className={`hello-btn ${vdoClass}`}style={{fontSize:"13px",fontWeight:550,padding:".7rem 1rem",lineHeight:.9}} onClick={handleShow}>
        View Demo
      </button>
  </div>     

                        </div>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>    <ReactPlayer url={vdoLink} width="70vw" height="80vh" controls={true} playing={true}  />
</Modal.Body>

      </Modal>
    </>
  );
}

export default ModalBoot;