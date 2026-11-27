import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>

            <Navbar className="bg-dark">
                <Container>
                    <Navbar.Brand>
                        <i className="fa-solid fa-video fa-float text-warning me-3"></i>
                        {/* <span style={{ color: 'white' }}> Media Player</span> */}

                        <Link to={'/'} style={{ color: 'white', textDecoration: 'none', fontWeight: '700' }}>
                            Media Player
                        </Link>

                    
                    </Navbar.Brand>
                </Container>
            </Navbar>


        </>
    )
}

export default Header
