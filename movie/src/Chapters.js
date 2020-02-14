import React from "react";
import { List } from "./ListChaptersComponents";
import {Movie} from "./Movie";

export class Chapters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_loaded: false,
      selected: -1,
      items: [],
      fields: ["pos", "title"]
    };
  }

  handleClick(index) {
    Movie.handleClick(index)
      console.log("Chapite : " + index)
  }

  componentDidMount() {
    fetch("https://imr3-react.herokuapp.com/backend")
      .then(res => res.json())
      .then(json => {
        this.setState({
          data_loaded: true,
          items: json["Chapters"]
        });
      });
  }

  render() {
    const { data_loaded, items, fields } = this.state;
    if (data_loaded) {
      return (
        <div>
            <List
              items={items}
              fields={fields}
              onClick={this.handleClick.bind(this)}
            />
        </div>
      );
    } else {
      return (
        <div>
          <p>Loading data</p>
        </div>
      );
    }
  }
}
