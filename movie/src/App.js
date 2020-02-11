import React from 'react';
import logo from './logo.svg';
import {  Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Websocket from 'react-websocket';

function App() {
  return (


    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col id="chapters">
            <p>Menu</p>
            </Col>
            <Col id="movie">
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
