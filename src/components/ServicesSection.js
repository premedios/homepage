import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faMobileAlt from '@fortawesome/fontawesome-free-solid/faMobileAlt';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe';
import { CardDeck, Card, CardBody, CardTitle, CardText } from 'reactstrap'; 

export default class ServicesSection extends Component {
  render() {
    return (
      <section id="services-section" className="bg-light py-5">
        <div className="container">
          <CardDeck>
            <Card className="text-center">
              <CardBody>
                <FontAwesomeIcon icon={faMobileAlt} size="4x" className="mb-3" />
                <CardTitle>Mobile Development</CardTitle>
                <CardText className="text-muted">
                  Delivering mobile solutions that meet your needs on-time and on-budget. I take care of all logistics from wireframe to deployment.
                </CardText>
              </CardBody>
            </Card>
            <Card className="text-center">
              <CardBody>
                <FontAwesomeIcon icon={faGlobe} size="4x" className="mb-3" />
                <CardTitle>Web Development</CardTitle>
                <CardText className="text-muted">
                  Delivering web solutions for your business or personal needs on-time and on-budget. From wireframe to deployment.
                </CardText>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
      </section>
    )
  }
}