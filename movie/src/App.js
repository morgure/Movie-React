import React from 'react';
import logo from './logo.svg';
import {  Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (


    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
            <p>Menu</p>
            </Col>
            <Col>
            <p>Movie</p>
            </Col>
            <Col>
            <p> Messagerie
            </p>
            </Col>
          </Row>
        </Container>
        </header>

    </div>
  );
}

export default App;
