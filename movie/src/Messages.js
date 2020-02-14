import React from "react";
import { List } from "./ListMessagesComponents";

const URL = "wss://imr3-react.herokuapp.com";
export class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      fields: ["when", "name", "message"],
      items : [],
      pseudo: "",
      message: ""
    };
    this.ws = new WebSocket(URL);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  componentDidMount() {
    console.log("Mount");
    this.ws.onopen = () => {
      console.log("connected");
      this.setState({
          connected: true
      });
    };
    this.ws.onmessage = evt => {
      let messages = JSON.parse(evt.data)
      messages.map((message)=>
        this.setState({
          items : [ ...this.state.items, message]

        })
      )
    };
    this.ws.onclose = () => {
      console.log("disconnected, reconnect.");
      this.setState({
          connected: false
      });
    this.ws = new WebSocket(URL);
    };
  }


  handleChange(evt){
    let name = evt.target.name;
    this.setState({
      [name]: evt.target.value
    });
  }

  handleSubmit(evt){
    const message = { name: this.state.pseudo, message: this.state.message };
    this.ws.send(JSON.stringify(message));
    this.setState({
      message: ""
    });
    evt.preventDefault();
  }


  render() {

    const { connected, fields, items } = this.state;
    if (connected) {
      return (
          <div id="messenger">
            <List items={items} fields={fields}/>
            <form>
                <div>
                  <input type="text" value={this.state.pseudo} name="pseudo" onChange={this.handleChange} />
                  <input type="text" value={this.state.message} name="message" onChange={this.handleChange}/>
                </div>
              <input type="submit" value="Envoyer" onClick={this.handleSubmit} />
            </form>
          </div>
      );
    } else {
      this.ws = new WebSocket(URL);
      console.log("Error")
      return (
        <div id="messenger">
          <List items={items} fields={fields}/>
          <form>
            <p>Problème de connexion</p>
          </form>
        </div>
      );
    }
  }
}
