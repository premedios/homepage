import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import MediaQuery from 'react-responsive';
import HeaderBackground from '../cover.jpg';
import Typed from 'react-typed';

import './HeroSection.css';

const jumbotronStyle = {
  backgroundImage: 'url(' + HeaderBackground + ')',
  backgroundColor: 'rgba(0, 0, 0, 0.65)',
  backgroundBlendMode: 'multiply',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100vh',
  padding: '120px 0px 70px 90px'
};
export default class HeroSection extends Component {
  render() {
    return (
      <Jumbotron fluid className="d-flex flex-column justify-content-center text-white mb-0" style={jumbotronStyle}>
        <MediaQuery query="(max-device-width: 900px)">
          {
            // <h1 className="display-4 font-weight-bold mb-4">PEDRO REMEDIOS</h1>
          }
          <p className="font-weight-bold" style={{fontSize: '25px'}}>Mobile and Web Developer based in Lisbon, Portugal</p>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 901px)">
          {/* <h1 className="display-2 font-weight-bold mb-4">PEDRO REMEDIOS</h1> */}
          <p className="font-weight-bold display-3">
            I am a&nbsp;
            <Typed 
              typedRef={(typed) => {this.typed = typed; }}
              strings={["web", "mobile"]}
              typeSpeed={60}
              backSpeed={70}
              smartBackspace={true}
              loop={true}
            />
            &nbsp;developer
          </p>
          <p className="font-weight-bold display-3">based in Lisbon, Portugal</p>
          <span className="learnMore">Learn More</span>
        </MediaQuery>
      </Jumbotron>
    )
  }
}