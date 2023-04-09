

import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import {Row, Col, Button} from 'react-bootstrap';
import imageFondo from '../../Images/logoSuperior.jpg';
import './titleSection.scss';


const TitleSection = () => {
  return (
    <>
    <div className="logo-container">
      <img className='image-logo' src={imageFondo} alt='Logo'></img>
      <Container fluid className="container-all">
        <Row>
          <Col xs={12} sm={12} md={12} lg xl={12} xxl={12}  className='text-all-container'>
          <div className="texto-en-imagen-superior">
        Si lo puedes IMAGINAR, lo puedes PROGRAMAR <br />

      </div>

      {/* <div className="texto-en-imagen-medio">
      <span className='imaginar-text'>Aprende</span>, 
      <span className='programar-text'> innova</span>, 
      <span className='imaginar-text'> contruye</span> y 
      <span className='programar-text'> mejora</span> tus habilidades.

      </div>
      <div className="texto-en-imagen-inferior">
         <div className='titulo-colores'>PMFOX TECHNOLOGIES</div>
      </div> */}

      <div className="buttons-section">
      <Button variant="danger" className='learn-more me-4'>Learn More</Button>

      <Button variant="info" className='read-more'>Read More</Button>
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