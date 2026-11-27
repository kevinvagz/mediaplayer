
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function VideoCard() {
    return (
        <>
            <Card style={{ width: '18rem' }} bg="white" text="dark" >
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnk_H7v6-HSUmURcKQgrmVbuvLcIAl8GmUcWiuuiSNeY1AtAwGcSYD8zF&s=10" />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>Let it be</Card.Title>
                        <Button variant="danger"><i className="fa-solid fa-trash"></i></Button>
                    </div>

                </Card.Body>
            </Card>
        </>
    )
}

export default VideoCard