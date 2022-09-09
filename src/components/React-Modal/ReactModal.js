import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ReactModal.css'

function ReactModal({ product }) {
  const [show, setShow] = useState(false);
  const { category, image, title, id, rating, price, description } = product
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button size='sm' variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modalBody'>
              <div className="modalImg">
                    <img  className='img' src={image} alt=''/>
              </div>
              <div className="modalDescription">
                <p>{description.slice(0,200)}</p>
                <p>Price : ${price}</p>
              </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button size='sm' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button size='sm' variant="primary" onClick={handleClose}>
            Add to card
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReactModal;
