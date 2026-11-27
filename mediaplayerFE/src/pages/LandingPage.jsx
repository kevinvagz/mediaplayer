import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {


    return (
        <>
            {/* first section  */}
            <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly'>
                <Row>
                    <Col>
                        <h3 className='textStyle'>WELCOME TO <span className='text-warning'>MEDIA PLAYER</span></h3>
                        <p className='textStyle mt-4' style={{ textAlign: 'justify' }}> lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut lorem ipsum dolor sit amet, consectetur adipisicing elit lorem ipsum dolor sit amet, consectetur adipisicing elit lorem ipsum dolor sit amet, consectetur adipisicing elit lorem ipsum dolor sit amet, consectetur adipisicing elit</p>

                        <Link to={'/home'} >
                            <button className='btn btn-warning mt-4'>GET STARTED <i className="fa-solid fa-arrow-right ms-2"></i></button>
                        </Link>

                    </Col>
                    <Col>
                        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" width={'400px'} className='ms-5' />
                    </Col>
                </Row>
            </Container>

            {/* second section features  */}
            <div className='container'>
                <h3 className='textStyle'>ADD VIDEOS</h3>
                <div className='d-flex align-items-center justify-content-evenly mt-5' >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                        <Card.Body>
                            <Card.Title>VIEW VIDEOS</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                            <Link to={'/home'}>
                                <Button variant="primary">ADD VIDEOS</Button>
                            </Link>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                        <Card.Body>
                            <Card.Title>WATCH VIDEOS</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                            <Link to={'/home'}>
                                <Button variant="primary">VIEW PLAYLIST</Button>
                            </Link>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                        <Card.Body>
                            <Card.Title>HISTORY</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                            <Link to={'/watch'}>
                                <Button variant="primary">WATCH HISTORY</Button>
                            </Link>

                        </Card.Body>
                    </Card>

                </div>
            </div>

            {/* third section  */}
            <div className='container mt-5 mb-5 border border-2 border-secondary rounded p-5'>
                <Row>
                    <Col>
                        <h3 className='textStyle'>SIMPLE AND POWERFUL</h3>
                        <p className='textStyle'><span className='fs-5 fw-bolder'>PLAY EVERYTHING:</span> Lorem ipsum dolor sit amet consectetu</p>
                        <p className='textStyle'><span className='fs-5 fw-bolder'>PLAY EVERYTHING:</span> Lorem ipsum dolor sit amet consectetu</p>
                        <p className='textStyle'><span className='fs-5 fw-bolder'>PLAY EVERYTHING:</span> Lorem ipsum dolor sit amet consectetu</p>


                    </Col>
                    <Col>
                        <div>
                            <iframe
                                width="846"
                                height="476"
                                src="https://www.youtube.com/embed/KzqoSeVMGrQ?list=RDKzqoSeVMGrQ"
                                title="Let It Be - Music Travel Love & Friends (Al Wathba Fossil Dunes in Abu Dhabi)"
                                style={{ border: 0 }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </div>


        </>
    )
}

export default LandingPage

