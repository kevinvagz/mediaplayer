import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function WatchHistory() {


    return (
        <>
            <div className='container mt-5 d-flex justify-content-between'>
                <h3 className='textStyle'>WATCH HISTORY</h3>
                <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}><i className="fa-solid fa-arrow-left me-3"></i> BACK TO HOME</Link>
            </div>
            <table className='textStyle table mt-5 mb-5 container' data-bs-theme='dark' >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>CAPTION</th>
                        <th>URL</th>
                        <th>TIME</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Heeriye</td>
                        <td>www.youtube.com/heeriye</td>
                        <td>2025-03-05 12:45</td>
                        <td><Button variant="danger"><i className="fa-solid fa-trash"></i></Button></td>
                    </tr>
                </tbody>
            </table>
            
        </>
    )
}

export default WatchHistory

