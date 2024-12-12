import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
import "./ModalBoot.css"
import PlaySvg from "../assets/images/play.svg"
function ModalBoot({imgLink="../assets/images/Expenses.webp",vdoLink="https://www.youtube.com/embed/Yn65AjlAOKI?si=tqAL3SIKYR-yHm1N"}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="modal-div">
    <img className='modal-img' src={imgLink} alt="Feature" />
      <button  className="modal-btn" onClick={handleShow}>
        <img src={PlaySvg} width="100px" alt='Play Button'/>
      </button>
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