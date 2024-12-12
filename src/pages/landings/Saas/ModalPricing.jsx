import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TableView from '../../../assets/images/Table-View.webp';
import { FaEye } from 'react-icons/fa';

function ModalPricing({feature}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='badge fs-12' onClick={handleShow}>
        {feature[0]}&nbsp;&nbsp; <FaEye/>
      </Button>

      <Modal show={show} size='lg' onHide={handleClose} style={{backgroundColor:'transparent'}} centered>
        <Modal.Body>
            <img src={TableView} alt='Table View' style={{width:'100%'}} />
        </Modal.Body>

      </Modal>

    </>
  );
}

export default ModalPricing;