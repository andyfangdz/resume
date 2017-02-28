import React, {Component} from 'react';
import {observer} from "mobx-react"

import appState from "../store/appState";


import SectionHeader from '../components/CV/SectionHeader';
import ControlBar from '../components/CV/control/ControlBar'

import Education from '../components/CV/Education';
import Experience from '../components/CV/Experience';
import Publication from '../components/CV/Publication';
import Award from '../components/CV/Award';
import Project from '../components/CV/Project';
import SkillGroup from '../components/CV/SkillGroup';
import cvData from '../data';
import classNames from 'classnames';



import '../styles/App.scss';
import '../styles/markdown-github.css';
import '../styles/sanfrancisco-font.css';

function getListOf(component, dataArray, featured = false) {
    dataArray = featured ? dataArray.filter((e) => e.featured) : dataArray;
    return dataArray.map((e, i) => React.createElement(component, {...e, key: i}));
}

@observer
class CV extends Component {


    selectify = (title) => {
        if (appState.cv.featured) {
            return `Selected ${title}`;
        }
        return title;
    };

    componentWillMount() {

    }

    render() {
        return (
            <main>
                <aside className="toolbar">
                    <ControlBar />
                </aside>
                <article className={classNames('cv-page', {resume: this.props.featured})}>
                    <header>
                        <div>
                            <h1>{cvData.info.fullName}</h1>
                            <p className="info">
                                {cvData.info.phone} · {cvData.info.email} · {cvData.info.location}<br />
                                Full CV available at: <a href={cvData.info.website}>{cvData.info.website}</a>
                                · {cvData.info.position}
                            </p>
                            {this.props.seal ?
                                <img className="school-seal"
                                     src={cvData.info.seal}
                                     role="presentation"
                                /> : null}

                        </div>

                    </header>
                    <section className="education">
                        <SectionHeader title="Education"/>
                        {getListOf(Education, cvData.education, appState.cv.featured)}
                    </section>
                    <section className="experience">
                        <SectionHeader title={this.selectify("Experience")}/>
                        {getListOf(Experience, cvData.experience, appState.cv.featured)}
                    </section>
                    <section className="publication">
                        <SectionHeader title={this.selectify("Publications")}/>
                        {getListOf(Publication, cvData.publications, appState.cv.featured)}
                    </section>
                    <section className="award">
                        <SectionHeader title={this.selectify("Awards")}/>
                        {getListOf(Award, cvData.awards, appState.cv.featured)}
                    </section>
                    <section className="project">
                        <SectionHeader title={this.selectify("Projects")}/>
                        {getListOf(Project, cvData.projects, appState.cv.featured)}
                    </section>
                    <section className="skill">
                        <SectionHeader title="Skills"/>
                        {getListOf(SkillGroup, cvData.skills, false)}
                    </section>
                    <footer>

                    </footer>
                </article>
            </main>
        );
    }
}

CV.defaultProps = {featured: false};

let Resume = () => <CV />;


export {Resume, CV};
