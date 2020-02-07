import React, { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import ShipmentList from './components/shipment-list/ShipmentList';

function App() {
  return (
    <Fragment>
      <Navbar bg='dark' expand='lg'>
        <Container>
          <Navbar.Brand className="text-light" href='#'>FreightHub Frontend Coding Challenge</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="py-3">
        <Row>
          <Col>
            <ShipmentList />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
