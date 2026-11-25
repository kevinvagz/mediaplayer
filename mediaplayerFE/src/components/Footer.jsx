
import React from 'react'

function Footer() {
    return (
        <>


            <div className='d-flex justify-content-center align-items-center mt-5 bg-dark'>
                <div className='d-flex align-items-center justify-content-evenly'>

                    <div className='overview' style={{ width: '400px' }}>
                        <h5>
                            <i className="fa-solid fa-video text-warning me-3"></i>
                            <span style={{ color: 'white', fontWeight: '700' }}>MEDIA PLAYER</span>
                        </h5>
                        <p style={{ color: 'white', textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetu</p>

                    </div>

                    <div className='links d-flex flex-column ms-3' style={{ color: 'white' }}>
                        <h4>LINKS</h4>
                        LANDING PAGE
                        <br />
                        HOME
                        <br />
                        WATCH HISTORY
                    </div>

                    <div className='links d-flex flex-column ms-3' style={{ color: 'white' }} >

                        <h4>LINKS</h4>
                        BOOTSTRAP
                        <br />
                        REACT BOOTSTRAP
                        <br />
                        FONT AWESOME
                    </div>

                    <div className='contact_us ms-3' style={{ color: 'white' }}>
                        <h4>CONTACT US</h4>
                        <div className='d-flex'>
                            <input type="text" name="" placeholder='Enter Your Email' className='form-control' />
                            <button className='btn btn-warning ms-3'>SUBSCRIBE</button>
                        </div>
                        <div className='d-flex justify-content-evenly align-items-center mt-3'>
                            <i className="fa-brands fa-instagram fa-2x"></i>
                            <i className="fa-brands fa-x-twitter fa-2x"></i>
                            <i className="fa-brands fa-reddit fa-2x"></i>
                            <i className="fa-brands fa-whatsapp fa-2x"></i>
                        </div>
                    </div>




                </div>
            </div>


            <p className='text-center mt-5'>COPY RIGHT © 2025  MEDIA PLAYER BUILT WITH REACT</p>
        </>
    )
}

export default Footer