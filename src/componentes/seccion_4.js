import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './estilos/style.css'
import Slider from './slider/slider-conocimientos'





function Seccion_4() {
    return (
        <div id='s4' className='seccion-4'>
        <Container fluid>
        <Row >
        <Col ><h1 className='slider-title' style={{marginBottom:"60px", textAlign:"center"}}>Conocimientos</h1>
        <div className='cont-slider'><Slider/></div>
        </Col>
                
        </Row>
      </Container>
      </div>
      );
    
}

export default Seccion_4;