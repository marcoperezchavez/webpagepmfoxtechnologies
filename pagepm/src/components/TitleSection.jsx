

import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import {Row, Col, Button} from 'react-bootstrap';
import imageFondo from '../Images/fondo4.jpg';
import logo from '../Images/PMFOXTECHNOLOGIESLOGO.png';
import './titleSection.css';


const TitleSection = () => {
  return (
    <>
    <div className="logo-container">
      <img className='image-logo' src={imageFondo} alt='Logo'></img>
      <Container fluid className="container-all">
        <Row>
          <Col xs={12} sm={12} md={12} lg xl={10} xxl={9}  className='text-all-container'>
          <div className="texto-en-imagen-superior">
        Si lo puedes IMAGINAR, lo puedes PROGRAMAR <br />

      </div>
      <div className="texto-en-imagen-medio">
        Aprende, innova, contruye mejora tus habilidades.

      </div>
      <div className="texto-en-imagen-inferior">
         PMFOX TECHNOLOGIES
      </div>
      <div className="buttons-section">
      <Button variant="outline-danger" className='learn-more me-4'>Learn More</Button>

      <Button variant="outline-info" className='read-more'>Read More</Button>
      </div>
          </Col>
          {/* <Col sm={12}>
          <div className="image-logo-arriba">
        <img src={logo} alt='PMFOXTECHNOLOGIES Logo'></img>
      </div>
          </Col> */}
        </Row>
      </Container>
      
      
    </div>
    </>
    )
};

export default TitleSection;