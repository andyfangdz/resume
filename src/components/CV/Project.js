/**
 * Created by andy on 9/7/16.
 */
import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
export default class Project extends Component {

  render() {
    return (
      <section className="project-item item">
        <h3 className="project-title name">{this.props.title}</h3>
        <div className="project-date date">{this.props.date}</div>
        <ReactMarkdown className="project-notes notes markdown-body" source={this.props.notes}/>
      </section>
    );
  }
}