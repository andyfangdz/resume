import React, { Component } from 'react';
import './styles/App.css';

import SectionHeader from './components/SectionHeader';

import Education from './components/Education';
import Experience from './components/Experience';
import cvData from './data';

let featuredOnly = false;

function getListOf(component, dataArray, featured=false) {
  dataArray = featured ? dataArray.filter((e) => e.featured) : dataArray;
  return dataArray.map((e, i) => React.createElement(component, {...e, key: i}));
}

class App extends Component {

  render() {
    return (
      <article className="cv-page">
        <header>
          <h1>{cvData.info.fullName}</h1>
        </header>
        <section className="education">
          <SectionHeader title="Education"/>
          {getListOf(Education, cvData.education, featuredOnly)}
        </section>
        <section className="experience">
          <SectionHeader title="Experience"/>
          {getListOf(Experience, cvData.experience, featuredOnly)}
        </section>
        <section className="publication">

        </section>
        <section className="project">

        </section>
        <section className="skill">

        </section>
        <footer>

        </footer>
      </article>
    );
  }
}

export default App;
