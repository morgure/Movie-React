import React from 'react';
import {  Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (


    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col id="chapters">
            <p>Menu</p>
            </Col>
            <Col id="movie" xs={6}>
            <p>Movie</p>
            </Col>
            <Col id="messenger">
            <p> Messagerie</p>
            </Col>
          </Row>
        </Container>
        </header>

    </div>
  );
}

export default App;
