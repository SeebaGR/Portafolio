import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './estilos/style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Seccion_3() {
    return (
      <div id='s3' className='seccion-3'>
        <Container style={{paddingTop:'50px',paddingBottom:'50px' }} fluid>
            <h1 className='h1-sc2'>SERVICIOS</h1>
        <Row style={{paddingTop:'40px'}} >
           
        <Col style={{display:"flex", justifyContent:"center", alignItems:"center"}}>

        <Card className='card-background'  style={{  marginLeft:'15px', marginRight:'15px', width: '18rem' }}>
      <Card.Body >
        <Card.Title className='card-title'>Card Title</Card.Title>
        <Card.Text className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='card-button'>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='card-background'  style={{  marginLeft:'15px', marginRight:'15px', width: '18rem' }}>
      <Card.Body >
        <Card.Title className='card-title'>Card Title</Card.Title>
        <Card.Text className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='card-button'>Go somewhere</Button>
      </Card.Body>
    </Card>

        </Col>

          
        </Row>
        <Row style={{paddingTop:'40px'}} >
        <Col style={{display:"flex", justifyContent:"center", alignItems:"center"}}>

        <Card className='card-background'  style={{  marginLeft:'15px', marginRight:'15px', width: '18rem' }}>
      <Card.Body >
        <Card.Title className='card-title'>Card Title</Card.Title>
        <Card.Text className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='card-button'>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='card-background'  style={{  marginLeft:'15px', marginRight:'15px', width: '18rem' }}>
      <Card.Body >
        <Card.Title className='card-title'>Card Title</Card.Title>
        <Card.Text className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='card-button'>Go somewhere</Button>
      </Card.Body>
    </Card>

        </Col>

          
        </Row>
      </Container>
      </div>
      );
    
}

export default Seccion_3;