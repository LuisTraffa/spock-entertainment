import React from 'react';
// import './App.css';

import Button from "react-bootstrap/Button";
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

// about us
// dienstleistungen 
// kontakt

function App() {
  return (
    
    <Container style={{ width: "max-width"}} fluid>
      
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Spock Entertainment</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#kontakt">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carousel>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://th.bing.com/th/id/R.b6fe8217182afd1cf72154879f389ac7?rik=CmYoU9Y7Olh3Cw&riu=http%3a%2f%2fsilodrome.com%2fwp-content%2fuploads%2f2014%2f02%2f1967-Shelby-GT-500-Fastback-New.jpg&ehk=a2Ydh%2bcKsWiI6YKd8C%2b5w0Fl%2bPzysNJ3nOHCxBqvi1s%3d&risl=&pid=ImgRaw&r=0"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>
          Zu Land21
        </h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://th.bing.com/th/id/OIP.8m_mzhf0akzeJc1g3I2i-gHaE6?pid=ImgDet&rs=1"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://th.bing.com/th/id/R.97bd18f273e683a0164caad8cf52b1d3?rik=anZHIu61hsxg2g&riu=http%3a%2f%2fwww.americanclassicrides.com%2fwp-content%2fuploads%2f2019%2f05%2fDSC_0086-4927x3263.jpg&ehk=x%2fOMOx0rNmOsAdAQUQc8MA8YmnDhAu3GagAop6IY67c%3d&risl=1&pid=ImgRaw&r=0"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>

    <Container fluid>

    <Card className="m-3">
      <Card.Body>
        <Card.Title>
          <Stack direction='horizontal'>
            <Container fluid>
              <h1>First Featurette heading</h1>
              djfgahjfdgajshgfdaihsgdfhasgfjhas
            </Container>
            <Container fluid>
              <Image src='https://www.bing.com/th/id/OGC.7fde37944802d354b31cc1027e01f2c8?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2f7fde37944802d354b31cc1027e01f2c8%2ftenor.gif%3fitemid%3d17060857&ehk=1Evx6C5YmoF%2b2dfQBM1RODvKrkRS4wZIzQl5Xqt%2bAoM%3d'></Image>
            </Container>
          </Stack>
        </Card.Title>
      </Card.Body>
    </Card>

    <Card className="m-3">
      <Card.Body>
        <Card.Title>
          <Stack direction='horizontal'>
            
            <Container fluid>
              <Image src='https://www.bing.com/th/id/OGC.7fde37944802d354b31cc1027e01f2c8?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2f7fde37944802d354b31cc1027e01f2c8%2ftenor.gif%3fitemid%3d17060857&ehk=1Evx6C5YmoF%2b2dfQBM1RODvKrkRS4wZIzQl5Xqt%2bAoM%3d'></Image>
            </Container>

            <Container fluid>
              <h1>First Featurette heading</h1>
              djfgahjfdgajshgfdaihsgdfhasgfjhas
            </Container>
          </Stack>
        </Card.Title>
      </Card.Body>
    </Card>

    <Card className="m-3" id='kontakt'>
      <Card.Body>
        <Card.Title>
          <Stack direction='horizontal'>
            <Container fluid>
              <h1>First Featurette heading</h1>
              djfgahjfdgajshgfdaihsgdfhasgfjhas
            </Container>
            <Container fluid>
              <Image src='https://www.bing.com/th/id/OGC.7fde37944802d354b31cc1027e01f2c8?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2f7fde37944802d354b31cc1027e01f2c8%2ftenor.gif%3fitemid%3d17060857&ehk=1Evx6C5YmoF%2b2dfQBM1RODvKrkRS4wZIzQl5Xqt%2bAoM%3d'></Image>
            </Container>
          </Stack>
        </Card.Title>
      </Card.Body>
    </Card>

    </Container>

    <Container style={{ backgroundColor: "black", width: "max-width", borderRadius: "10px" }} fluid>

      <Card>
        
      </Card>
    

    </Container>

    

    

    </Container>
  );
}

export default App;
