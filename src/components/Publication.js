/**
 * Created by andy on 9/7/16.
 */
import React, {Component} from 'react';

import authors from '../data/meta/authors';

export default class Publication extends Component {

  getLinks = () => {
    return Object.keys(this.props.links).map((key) => (
      <span key={key}>[<a href={this.props.links[key]}>{key}</a>]</span>
    ));
  };

  getAuthor = (name) => {
    let author = authors.find((author) => {
      return author.names.findIndex((e) => e === name) !== -1;
    });
    if (author === undefined) {
      author = {
        link: `https://www.google.com/search?q=${name}`
      };
    }
    return author;
  };

  getAuthors = () => {
    return this.props.authors.map((key, i) => {
      let author = this.getAuthor(key);
      return (<span key={i}><a href={author.link} className={'me' in author ? 'publication-me' : null}>{key}</a>
        {i === this.props.authors.length - 1 ? null : ', '}</span>);
      });
  };

  render() {
    return (
      <section className="publication-item item">
        <h3 className="publication-title name">{this.props.title} {this.getLinks()}</h3>
        <div className="publication-date date">{this.props.date}</div>
        <p className="publication-authors authors">{this.getAuthors()}</p>
        <p className="publication-venue venue">{this.props.venue}</p>
      </section>
    );
  }
}