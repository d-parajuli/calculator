

import React, { Component } from 'react';
import { Button, ButtonToolbar, Row, Col } from 'react-bootstrap';
import './display.css'


class Display extends Component {
    render() {
      return (
      <div className="display">
      <h1> {this.props.input} {this.props.first} {this.props.operator} {this.props.input_two} </h1>


      </div>
  );
    }
  }

  export default Display;
