import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Category() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div>
                <button className='btn btn-warning' onClick={handleShow}>
                    ADD NEW CATEGORY
                </button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                contentClassName="bg-dark text-light"
            >

                <Modal.Header closeButton>
                    <Modal.Title><i className="fa-solid fa-list  text-warning me-3"></i>ADD CATEGORY</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form className='border border-secondary p-3 rounded' >

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="CATEGORY NAME" />
                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Canel
                    </Button>
                    <Button variant="primary">Add Category</Button>
                </Modal.Footer>
            </Modal>


        </>
    )
}

export default Category
