import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './estilos/style.css'
import Form from "react-bootstrap/Form";

function SectionContacto() {
    return (
        <div id='s5'  className='seccion-5'>
        <Container fluid>
        <Row >
        <Col ><h1 className='title-contacto' style={{marginBottom:"60px", textAlign:"center"}}>Contacto</h1>
        <div className='contenedor-formulario'>
            
            <Form id='contact-form'   className="formulario-contacto"
                
                >
                  <input type='hidden' name='contact_number'  />
                  <Form.Group className="mb-3">
    
                    <Form.Control name="user_name" required maxLength="30"  type="text" placeholder="Nombre" />
                   
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name="user_apellido" required maxLength="30" type="text" placeholder="Apellido" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name="user_empresa" required maxLength="40"  type="text" placeholder="Empresa" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      required maxLength="12"
                      name="user_telefono"
                      type="number"
                      placeholder="Número de celular. Ej: +56922222222"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      
                      name='user_email'
                      
                      type="email"
                      placeholder="Correo electrónico. Ej: example@empresa.com"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Text style={{ fontSize: "20px", color: "#FFF" }}>
                      Servicio a Cotizar
                   
                    </Form.Text>
               
                    <select name="user_select" class="form-control customDropdown">
                      <option value="Desarrollo Web y Ecommerce">Desarrollo Web y Ecommerce</option>
                      <option value="Marketing Digital">Marketing Digital</option>
                      <option value="Analitica y Performance">Analitica y Performance</option>
                      <option value="Otros">Otros</option>
                      </select>
              
    
     
    
      
  
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name='message' required   placeholder="Mensaje" as="textarea" className="textareaa" rows={8} />
                  </Form.Group>
                  
                  <Button
                 
                  id="btnContact"
                    type="submit"
                    className='card-button'
                  >
                    Enviar Mensaje{" "}
                    <i
                      className="bi bi-arrow-right"
                      style={{ marginTop:"2px", paddingLeft: "10px", position:"absolute" }}
                    ></i>
                  </Button>
           
                </Form></div>
        </Col>
                
        </Row>
      </Container>
      </div>
      );
    
}

export default SectionContacto;