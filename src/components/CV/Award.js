/**
 * Created by andy on 9/7/16.
 */
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
export default class Award extends Component {
  render() {
    return (
      <section className="award-item item">
        <h3 className="award-title name">{this.props.title}</h3>
        <p className="award-awarded-by">{this.props.awardedBy}</p>
        <div className="award-date date">{this.props.date}</div>
        <ReactMarkdown
          className="award-notes notes markdown-body"
          children={this.props.notes}
        />
      </section>
    );
  }
}
