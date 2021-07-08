/**
 * Created by andy on 3/1/17.
 */
/**
 * Created by andy on 9/7/16.
 */
import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

export default class Press extends Component {
  render() {
    return (
      <section className="press-item item">
        <h3 className="press-title name">
          {this.props.title} [<a href={this.props.link}>article</a>]
        </h3>
        <div className="press-date date">{this.props.date}</div>
        <p className="press-publisher publisher">{this.props.publisher}</p>
        {this.props.quote ? (
          <ReactMarkdown
            className="press-quotes quotes markdown-body"
            children={this.props.quote}
          />
        ) : null}
      </section>
    );
  }
}
