import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './HeroSection.css';

export default class HeroSection extends Component {
  render() {
    return (
      <Jumbotron fluid className="text-center d-flex flex-column justify-content-center text-white mb-0">
        <h1 className="display-4 font-weight-normal mb-4">PEDRO REMEDIOS</h1>
        <h4 className="font-weight-light display-sm-4 display-5">Application Development Done Right!</h4>
      </Jumbotron>
    )
  }
}