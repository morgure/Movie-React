import React from "react";
import PropTypes from "prop-types";

export class List extends React.Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        fields: PropTypes.arrayOf(String).isRequired,
        onClick: PropTypes.func.isRequired
    };

    handleClick(index) {
        this.props.onClick(index);
    }

    render() {
        return (
            <ul>
                {this.props.items.map((item, index) => (
                    //item[this.props.fields[0]]
                    <ListItem line_1={index} line_2={item[this.props.fields[1]]} key={index} onClick={this.handleClick.bind(this, index)}
                    />
                ))}
            </ul>
        );
    }
}

export class ListItem extends React.Component {

    static propTypes = {
        line_1: PropTypes.number.isRequired,
        line_2: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    toggle = () => {
        this.props.onClick(this);
    };

    render() {
        return (
              <p onClick={this.toggle}><i>Chapter {this.props.line_1} : </i>{this.props.line_2}</p>
        );
    }
}
