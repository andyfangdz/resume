import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import appState from '../store/appState';

import SectionHeader from '../components/CV/SectionHeader';
import ControlBar from '../components/CV/control/ControlBar';

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

import '../styles/App.scss';
import '../styles/markdown-github.css';

function getListOf(component, dataArray, featured = false) {
  dataArray = featured ? dataArray.filter((e) => e.featured) : dataArray;
  return dataArray.map((e, i) =>
    React.createElement(component, { ...e, key: i })
  );
}

function DesktopOrMobile({ mobile, desktop }) {
  return [
    <span key="desktop" className="show-desktop">
      {desktop}
    </span>,
    <span key="mobile" className="show-mobile">
      {mobile}
    </span>,
  ];
}

function CV() {
  const selectify = (title) => {
    if (appState.cv.featured) {
      return `${title}`;
    }
    return title;
  };

  useEffect(() => {
    if (appState.cv.featured) {
      document.body.classList.add('resume');
      document.documentElement.classList.add('resume');
    } else {
      document.body.classList.remove('resume');
      document.documentElement.classList.add('resume');
    }
  });
  return (
    <main>
      <aside className="toolbar">
        <ControlBar />
      </aside>
      <article
        className={classNames(
          'cv-page',
          {
            resume: appState.cv.featured,
            'font-loaded': appState.cv.fontLoaded,
          },
          'markdown-body'
        )}
      >
        <header>
          <div>
            <h1>{cvData.info.fullName}</h1>
            <p className="info">
              {cvData.info.phone}
              <DesktopOrMobile mobile={<br />} desktop={' · '} />
              <a href={`mailto:${cvData.info.email}`}>{cvData.info.email}</a>
              <DesktopOrMobile mobile={<br />} desktop={' · '} />
              {cvData.info.location}
              <br />
              Full CV: <a href={cvData.info.website}>{cvData.info.website}</a>
              <DesktopOrMobile mobile={<br />} desktop={' · '} />
              {cvData.info.position}
            </p>
          </div>
        </header>
        <section className="education" id="education">
          <SectionHeader title="Education" />
          {getListOf(Education, cvData.education, appState.cv.featured)}
        </section>
        <section className="experience" id="experience">
          <SectionHeader title={selectify('Experience')} />
          {getListOf(Experience, cvData.experience, appState.cv.featured)}
        </section>
        <section className="publication" id="tech-publications">
          <SectionHeader title={selectify('Non Academic Publications')} />
          {getListOf(
            Publication,
            cvData.nonAcademicPublications,
            appState.cv.featured
          )}
        </section>
        <section className="publication" id="publications">
          <SectionHeader title={selectify('Academic Publications')} />
          {getListOf(Publication, cvData.publications, appState.cv.featured)}
        </section>
        <section className="award" id="awards">
          <SectionHeader title={selectify('Awards')} />
          {getListOf(Award, cvData.awards, appState.cv.featured)}
        </section>
        {!appState.cv.featured && (
          <section className="press" id="press">
            <SectionHeader title="Press Coverage" />
            {getListOf(Press, cvData.press, appState.cv.featured)}
          </section>
        )}
        {!appState.cv.featured && (
          <section className="award" id="tech-awards">
            <SectionHeader title="Competitions & Hackathons" />
            {getListOf(
              CompetitionAward,
              cvData.competitionAwards,
              appState.cv.featured
            )}
          </section>
        )}
        {!appState.cv.featured && (
          <section className="project" id="projects">
            <SectionHeader title={selectify('Projects')} />
            {getListOf(Project, cvData.projects, appState.cv.featured)}
          </section>
        )}
        <section className="skill" id="skills">
          <SectionHeader title="Skills" />
          {getListOf(SkillGroup, cvData.skills, false)}
        </section>
        <footer />
      </article>
    </main>
  );
}

CV.defaultProps = { featured: false };

export default observer(CV);
