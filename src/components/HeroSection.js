import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import HeaderBackground from '../cover.jpg';

const jumbotronStyle = {
  backgroundImage: 'url(' + HeaderBackground + ')',
  backgroundColor: 'rgba(0, 0, 0, 0.55)',
  backgroundBlendMode: 'multiply',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100vh',
  padding: '70px 0'
};
export default class HeroSection extends Component {
  render() {
    return (
      <Jumbotron fluid className="text-center d-flex flex-column justify-content-center text-white mb-0" style={jumbotronStyle}>
        <h1 className="display-3 font-weight-bold mb-4">PEDRO REMEDIOS</h1>
        <h4 className="font-weight-light display-sm-4 display-4">Application Development Done Right!</h4>
      </Jumbotron>
    )
  }
}