/**
 * Created by andy on 9/7/16.
 */
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
export default class Experience extends Component {
  getDate = () => {
    let result = `${this.props.startDate} to `;
    if (this.props.endDate) {
      result += this.props.endDate;
    } else {
      result += "current";
    }
    return result;
  };

  render() {
    return (
      <section className="experience-item">
        <h3 className="experience-title">{this.props.title}</h3>
        <h4 className="experience-company"><a href={this.props.companyLink}>{this.props.company}</a></h4>
        <h4 className="experience-location">{this.props.location}</h4>
        <div className="experience-date">{this.getDate()}</div>
        <ReactMarkdown className="experience-notes" source={this.props.notes}/>
      </section>
    );
  }
}