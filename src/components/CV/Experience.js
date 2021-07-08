/**
 * Created by andy on 9/7/16.
 */
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class Experience extends Component {
  getDate = () =>
    this.props.dates
      .map(
        ({ startDate, endDate = null, note = null }) =>
          `${startDate} to ` +
          (endDate ? endDate : 'current') +
          (note ? ` (${note})` : '')
      )
      .join(', ');

  render() {
    return (
      <section className="experience-item item">
        <h3 className="experience-title name">{this.props.title}</h3>
        <div className="meta-row">
          <h4 className="experience-company company">
            <a href={this.props.companyLink}>{this.props.company}</a>
          </h4>
          <h4 className="experience-location location">
            {this.props.location}
          </h4>
        </div>
        <div className="experience-date date">{this.getDate()}</div>
        <ReactMarkdown
          className="experience-notes notes markdown-body"
          children={this.props.notes}
        />
      </section>
    );
  }
}
