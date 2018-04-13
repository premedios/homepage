import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

export default class PortfolioSection extends Component {
  render() {
    return (
      <section id="portfolio-section" className="bg-light p-5">
        <div className="container">
          <Card className="flex-md-row border-0 bg-light">
            <CardBody>
              <h5 className="text-primary mb-4">Mobile</h5>
              <h1 className="mt-0 mb-4 font-weight-bold">E.T.A.</h1>
              <h5>Purpose:</h5>
              <p className="lead mb-5">The purpose of this app was to facilitate the SMS service of the bus timetables of the Portuguese public transport company Carris.</p>
              <h5>Technologies Used:</h5>
              <p className="lead mb-4">Xcode, iOS, Swift 4, Core Data, UIKit</p>
              <img src="assets/Download_on_the_App_Store_Badge.svg" alt="Download on the Apple Store"/>
            </CardBody>
            <img className="d-block" src="assets/ETA.svg" width="200" height="402" alt="E.T.A. screenshot"/>
          </Card>
        </div>
      </section>
    )
  }
}