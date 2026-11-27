import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Add() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className='d-flex align-items-center'>
                <h5 className='textStyle'>UPLOAD NEW VIDEO</h5>
                <button className='btn' onClick={handleShow} ><i className="fa-solid fa-cloud-arrow-up textStyle fs-5"></i></button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                contentClassName="bg-dark text-light"
            >

                <Modal.Header closeButton>
                    <Modal.Title><i className="fa-solid fa-film text-warning me-3"></i>UPLOAD VIDEO</Modal.Title>
                </Modal.Header>
              
                <Modal.Body>

                    <Form className='border border-secondary p-3 rounded' >

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="VIDEO TITLE" />
                        </Form.Group>
                       
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="VIDEO THUMBNAIL" />
                        </Form.Group>
                      
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="VIDEO LINK" />
                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Canel
                    </Button>
                    <Button variant="primary">Upload to Playlist</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add