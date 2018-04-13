import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faMapMarker from '@fortawesome/fontawesome-free-solid/faMapMarker';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer-section" class="py-4 bg-dark text-white">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h5 class="mb-4 font-weight-light">About Me</h5>
              <p class="font-weight-light about-text">iOS and Web developer with over 20 years professional development experience. Hobbies include: AI, Car Tuning, World of Warcraft, Bodybuilding and Cinema.</p>
            </div>
            <div class="col-md-4">
              <h5 class="mb-4 font-weight-light">Contact Information</h5>
              <div class="row mb-3">
                <div class="col-1"><FontAwesomeIcon icon={faEnvelope} fixedWidth /></div>
                <div class="col-11">pedro.remedios@gmail.com</div>
              </div>
              <div class="row">
                <div class="col-1"><FontAwesomeIcon icon={faMapMarker} fixedWidth /></div>
                <div class="col-11">
                  <address>
                    Rua Abel Manta, 14 R/C Esq. <br/>
                    Figueirinha <br/>
                    2780-174 Oeiras <br/>
                    PORTUGAL <br/>
                  </address>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-1"><FontAwesomeIcon icon={faPhone} fixedWidth /></div>
                <div class="col-11">+351912140773</div>
              </div>
              <ul class="nav social">
                <li class="nav-item">
                  <a href="https://www.facebook.com/pedroremedios" target="_blank" rel='noopener noreferrer' class="nav-link"><FontAwesomeIcon icon={faFacebookSquare} size="2x" fixedWidth /></a>
                </li>
                <li class="nav-item">
                  <a href="https://www.github.com/premedios" target="_blank" rel='noopener noreferrer' class="nav-link"><FontAwesomeIcon icon={faGithub} size="2x" fixedWidth/></a>
                </li>
                <li class="nav-item">
                  <a href="https://www.twitter.com/prmobiledev" rel='noopener noreferrer' class="nav-link"><FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth /></a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5 class="mb-4 font-weight-light">Drop me a message:</h5>
              <form>
                <div class="row">
                  <div class="col-md-6 mb-2">
                    <input type="text" class="form-control" placeholder="First name" />
                  </div>
                  <div class="col-md-6 mb-2">
                    <input type="text" class="form-control" placeholder="Last name" />
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Subject" />
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col">
                    <textarea class="form-control" rows="10" placeholder="Message"></textarea>
                  </div>
                </div>

                <input type="button" value="Submit" class="btn btn-primary btn-block" />
              </form>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}