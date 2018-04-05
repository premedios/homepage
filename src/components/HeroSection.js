import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import styles from './HeroSection.css';

const jumbotron = {
  backgroundImage: 'url(' + 'https://images.pexels.com/photos/270694/pexels-photo-270694.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' + ')',
  backgroundColor: 'rgba(0, 0, 0, 0.60)',
  backgroundBlendMode: 'multiply',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100vh',
  padding: '70px 0'
};

export default class HeroSection extends Component {
  render() {
    return (
      <Jumbotron fluid className="text-center d-flex flex-column justify-content-center text-white mb-0" style={jumbotron}>
        <h1 className="display-4 font-weight-normal mb-4">PEDRO REMEDIOS</h1>
        <h4 className="font-weight-light display-sm-4 display-5">Application Development Done Right!</h4>
      </Jumbotron>
    )
  }
}