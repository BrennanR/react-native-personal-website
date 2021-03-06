import React, { Component } from 'react';
import Section from './Section';

export default class JobSection extends Component {
  render() {
    return (
      <Section 
        headingText={this.props.companyName}
        secondaryText={this.props.jobTitle}
      />
    )
  }
}