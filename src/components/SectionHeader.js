import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
export default class SectionHeader extends Component {
  render() {
    return (
      <ScrollableAnchor id={this.props.sectionId}>
        <section className="bg-dark py-5 text-center text-white">
          <div className="container">
            <div className="row">
                <div className="col py-5">
                    <h1 className="mb-4">{this.props.title}</h1>
                    <p className="lead">{this.props.description}</p>
                </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}