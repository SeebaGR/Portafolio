import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './estilos/style.css'
import Av from '../images/lllr.png'
function Seccion_2() {
    return (
      <div id='s2' className='seccion-2'>
        <Container fluid>
        <Row>
        <Col className='flex-g2'><h1 className='h1-sc2'>Sobre Mi</h1></Col>
          <Col style={{paddingRight:"100px"}} >
          <div className='primer_col'>
          <p className='parrf-sc2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className='parrf-sc2'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.</p>
          </div>


          </Col>
          
        </Row>
      </Container>
      </div>
      );
    
}

export default Seccion_2;