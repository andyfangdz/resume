/**
 * Created by andy on 9/7/16.
 */
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
export default class Education extends Component {
  getDate = () => {
    let result = `${this.props.startDate} to ${this.props.endDate}`;
    if (this.props.isCurrent) {
      result += ' (expected)';
    }
    return result;
  };

  render() {
    return (
      <section className="education-item item">
        <h3 className="education-name name">{this.props.name}</h3>
        <div className="education-date date">{this.getDate()}</div>
        <ReactMarkdown
          className="education-notes notes markdown-body"
          source={this.props.notes}
        />
      </section>
    );
  }
}
