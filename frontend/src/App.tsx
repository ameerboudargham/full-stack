import { useState } from 'react';
import { SampleProducts } from './data';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0);

  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg='dark' variant='dark' expand="lg">
          <Container>
            <Navbar.Brand>mirona</Navbar.Brand>
          </Container>
          <Nav>
            <a href='/cart' className='nav-link '>Cart</a>
            <a href='/signin' className='nav-link'>Sign In</a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
        <Row>
          {SampleProducts.map((product) => (
            <Col key={product.slug} sm={6} md={4} lg={3}>
              <img src={product.image} alt={product.name} className='product-image' />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </Col>
          ))}
        </Row>
        </Container>
       
      </main>
      <footer>
        <div className="text-center">
        All Rights Reserved
        </div>
        
      </footer>
    </div>
  );
}

export default App;
