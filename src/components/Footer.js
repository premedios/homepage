import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer-section" className="py-4 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="mb-4 font-weight-light">About Me</h5>
              <p className="font-weight-light about-text">iOS and Web developer with over 20 years professional development experience. Hobbies include: AI, Car Tuning, World of Warcraft, Bodybuilding and Cinema.</p>
            </div>
            <div className="col-md-4">
              <h5 className="mb-4 font-weight-light">Contact Information</h5>
              <div className="row mb-3">
                <div className="col-1"><FontAwesomeIcon icon={faEnvelope} fixedWidth /></div>
                <div className="col-11">pedro.remedios@gmail.com</div>
              </div>
              <div className="row">
                <div className="col-1"><FontAwesomeIcon icon={faMapMarker} fixedWidth /></div>
                <div className="col-11">
                  <address>
                    Rua Abel Manta, 14 R/C Esq. <br/>
                    Figueirinha <br/>
                    2780-174 Oeiras <br/>
                    PORTUGAL <br/>
                  </address>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-1"><FontAwesomeIcon icon={faPhone} fixedWidth /></div>
                <div className="col-11">+351912140773</div>
              </div>
              <ul className="nav social">
                <li className="nav-item">
                  <a href="https://www.facebook.com/pedroremedios" target="_blank" rel='noopener noreferrer' className="nav-link"><FontAwesomeIcon icon={faFacebookSquare} size="2x" fixedWidth /></a>
                </li>
                <li className="nav-item">
                  <a href="https://www.github.com/premedios" target="_blank" rel='noopener noreferrer' className="nav-link"><FontAwesomeIcon icon={faGithub} size="2x" fixedWidth/></a>
                </li>
                <li className="nav-item">
                  <a href="https://www.twitter.com/prmobiledev" rel='noopener noreferrer' className="nav-link"><FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth /></a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="mb-4 font-weight-light">Drop me a message:</h5>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <input type="text" className="form-control" placeholder="First name" />
                  </div>
                  <div className="col-md-6 mb-2">
                    <input type="text" className="form-control" placeholder="Last name" />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <input type="text" class="form-control" placeholder="Subject" />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <textarea className="form-control" rows="10" placeholder="Message"></textarea>
                  </div>
                </div>

                <input type="button" value="Submit" className="btn btn-primary btn-block" />
              </form>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}