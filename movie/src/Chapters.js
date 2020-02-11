import React from "react";
import { List } from "./ListComponents";

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
    this.setState({ selected: index });
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

  render() {
    const { data_loaded, items, fields } = this.state;
    if (data_loaded) {
      return (
        <div>
          <aside id="chapters">
            <List
              items={items["Chapters"]}
              fields={fields}
              //onClick={this.handleClick.bind(this)}
            />
          </aside>
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
