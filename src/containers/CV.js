import React, { Component } from 'react';
import { observer } from "mobx-react"

import appState from "../store/appState";


import SectionHeader from '../components/CV/SectionHeader';
import ControlBar from '../components/CV/control/ControlBar'

import Education from '../components/CV/Education';
import Experience from '../components/CV/Experience';
import Publication from '../components/CV/Publication';
import Award from '../components/CV/Award';
import CompetitionAward from '../components/CV/CompetitionAward';
import Press from '../components/CV/Press';
import Project from '../components/CV/Project';
import SkillGroup from '../components/CV/SkillGroup';
import cvData from '../data';
import classNames from 'classnames';

import seal from "../gt-seal.svg";

import '../styles/App.css';
import '../styles/markdown-github.css';
import '../styles/sanfrancisco-font.css';

function getListOf(component, dataArray, featured = false) {
  dataArray = featured ? dataArray.filter(e => e.featured) : dataArray;
  return dataArray.map((e, i) => React.createElement(component, { ...e, key: i }));
}

class CV extends Component {


  selectify = (title) => {
    if (appState.cv.featured) {
      return `Selected ${title}`;
    }
    return title;
  };

  render() {
    return (
      <main>
        <aside className="toolbar">
          <ControlBar />
        </aside>
        <article className={classNames('cv-page', { resume: this.props.featured }, 'markdown-body')}>
          <header>
            <div>
              <h1>{cvData.info.fullName}</h1>
              <p className="info">
                {cvData.info.phone} · {cvData.info.email} · {cvData.info.location}<br />
                Full CV: <a href={cvData.info.website}>{cvData.info.website}</a>
                · {cvData.info.position}
              </p>
              {appState.cv.showSeal && <img className="school-seal" src={seal} alt="" />}
            </div>
          </header>
          <section className="education" id="education" >
            <SectionHeader title="Education" />
            {getListOf(Education, cvData.education, appState.cv.featured)}
          </section>
          <section className="experience" id="experience" >
            <SectionHeader title={this.selectify("Experience")} />
            {getListOf(Experience, cvData.experience, appState.cv.featured)}
          </section>
          <section className="publication" id="publications" >
            <SectionHeader title={this.selectify("Publications")} />
            {getListOf(Publication, cvData.publications, appState.cv.featured)}
          </section>
          <section className="publication" id="tech-publications" >
            <SectionHeader title={this.selectify("Non Academic Publications")} />
            {getListOf(Publication, cvData.nonAcademicPublications, appState.cv.featured)}
          </section>
          <section className="award" id="awards" >
            <SectionHeader title={this.selectify("Awards")} />
            {getListOf(Award, cvData.awards, appState.cv.featured)}
          </section>
          {!appState.cv.featured && <section className="press" id="press" >
            <SectionHeader title="Press Coverage" />
            {getListOf(Press, cvData.press, appState.cv.featured)}
          </section>}
          {!appState.cv.featured && <section className="award" id="tech-awards" >
            <SectionHeader title="Competitions & Hackathons" />
            {getListOf(CompetitionAward, cvData.competitionAwards, appState.cv.featured)}
          </section>}
          {!appState.cv.featured && <section className="project" id="projects" >
            <SectionHeader title={this.selectify("Projects")} />
            {getListOf(Project, cvData.projects, appState.cv.featured)}
          </section>}
          <section className="skill" id="skills" >
            <SectionHeader title="Skills" />
            {getListOf(SkillGroup, cvData.skills, false)}
          </section>
          <footer>

          </footer>
        </article>
      </main>
    );
  }
}

CV.defaultProps = { featured: false };

export default observer(CV);
