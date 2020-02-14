import React from "react";
import { Player } from 'video-react';
import {  Container, Row, Col } from 'react-bootstrap';
import "../node_modules/video-react/dist/video-react.css"; // import css
import { List } from "./ListChaptersComponents";

export class Movie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data_loaded: false,
      fields: ["pos", "title"],
      items : [],
      pseudo: "",
      message: "",
      player: null
    };
    this.handleClick = this.handleClick.bind(this);
  }



  componentDidMount() {
    fetch("https://imr3-react.herokuapp.com/backend")
      .then(res => res.json())
      .then(json => {
        this.setState({
          data_loaded: true,
          items: json
        });
      });
  }

  handleClick(evt){
    this.state.player.seek(evt);
    //this.state.player.playbackRate = evt;
  }


  render() {

    const { data_loaded, fields, items } = this.state;
    if (data_loaded) {
      return (
          <Container>
            <Row>
              <h2>{items["Film"]["title"]}</h2>
            </Row>
            <Row>
              <Col>
              <List items={items["Chapters"]} fields={fields} onClick={this.handleClick.bind(this)}/>
              </Col>
              <Col xs={9}>
                <Player ref={(player) => { this.state.player = player }}>
                  <source src={items["Film"]["file_url"]} />
                </Player>
              </Col>
            </Row>
          </Container>
      );
    } else {
      console.log("Error")
      return (
        <div id="movie">
          <p>Erreur de chargement</p>
        </div>
      );
    }
  }
}
