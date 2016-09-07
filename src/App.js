import React, { Component } from 'react';
import './styles/App.scss';

import SectionHeader from './components/SectionHeader';

import Education from './components/Education';
import Experience from './components/Experience';
import Publication from './components/Publication';
import Award from './components/Award';
import Project from './components/Project';
import SkillGroup from './components/SkillGroup';
import cvData from './data';

function getListOf(component, dataArray, featured=false) {
  dataArray = featured ? dataArray.filter((e) => e.featured) : dataArray;
  return dataArray.map((e, i) => React.createElement(component, {...e, key: i}));
}

class App extends Component {

  selectify = (title) => {
    if (this.props.featured) {
      return `Selected ${title}`;
    }
    return title;
  };

  render() {
    return (
      <article className="cv-page">
        <header>
          <div>
            <h1>{cvData.info.fullName}</h1>
            <p className="info">
              {cvData.info.phone} · {cvData.info.email} · {cvData.info.location}<br />
              Full CV available at: <a href={cvData.info.website}>{cvData.info.website}</a> · {cvData.info.position}
            </p>
            <img className="school-seal" src="https://upload.wikimedia.org/wikipedia/commons/f/fd/GeorgiaTechSeal.svg" />
          </div>

        </header>
        <section className="education">
          <SectionHeader title="Education"/>
          {getListOf(Education, cvData.education, this.props.featured)}
        </section>
        <section className="experience">
          <SectionHeader title={this.selectify("Experience")}/>
          {getListOf(Experience, cvData.experience, this.props.featured)}
        </section>
        <section className="publication">
          <SectionHeader title={this.selectify("Publications")}/>
          {getListOf(Publication, cvData.publications, this.props.featured)}
        </section>
        <section className="award">
          <SectionHeader title={this.selectify("Awards")}/>
          {getListOf(Award, cvData.awards, this.props.featured)}
        </section>
        <section className="project">
          <SectionHeader title={this.selectify("Projects")}/>
          {getListOf(Project, cvData.projects, this.props.featured)}
        </section>
        <section className="skill">
          <SectionHeader title="Skills"/>
          {getListOf(SkillGroup, cvData.skills, false)}
        </section>
        <footer>

        </footer>
      </article>
    );
  }
}

export default App;
