import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './estilos/style.css'
import Av from '../images/lllr.png'
function Seccion_1() {
    return (
      <div id='s1' className='seccion-1'>
        <Container  >
        <Row >
          <Col className='flex-g' >
          <div>
            <h1 className='h1-sc1'>Hola</h1>
            <h2 className='h2-sc2'>Soy Sebastian G.</h2>
            <h3 className='h3-sc3'>Freelance web Designer & Developer</h3>
            </div>
          </Col>
          <Col><img width="50%" src={Av}></img></Col>
        </Row>
      </Container>
      </div>
      );
    
}

export default Seccion_1;