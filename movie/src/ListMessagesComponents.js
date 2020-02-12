import React from "react";
import PropTypes from "prop-types";
import { Toast } from 'react-bootstrap';

export class List extends React.Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        items: PropTypes.array.isRequired,
        fields: PropTypes.arrayOf(String).isRequired,
    };

    render() {
        return (
            <ul>
                {this.props.items.map((item, index) => (
                    //item[this.props.fields[0]]
                    <ListItem line_1={item[this.props.fields[0]]} line_2={item[this.props.fields[1]]} line_3={item[this.props.fields[2]]} key={index}/>
                ))}
            </ul>
        );
    }
}

export class ListItem extends React.Component {

    static defaultProps = {
        selected : false,
        line_2: "default value for Line 2"
    };
    static propTypes = {
        line_1: PropTypes.number.isRequired,
        line_2: PropTypes.string.isRequired,
        line_3: PropTypes.string.isRequired
    };


    render() {
        return (
          <div>
            <Toast>
              <Toast.Header>
                <strong className="mr-auto">{this.props.line_2}</strong>
                <small>{new Intl.DateTimeFormat('fr-FR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(this.props.line_1)}</small>
              </Toast.Header>
              <Toast.Body>{this.props.line_3}</Toast.Body>
              </Toast>
            </div>
        );
    }
}
