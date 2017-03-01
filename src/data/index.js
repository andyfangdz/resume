/**
 * Created by andy on 9/6/16.
 */

import info from './000-info';
import education from './010-education';
import experience from './020-experience';
import publications from './030-publications';
import awards from './040-awards';
import competitionAwards from './041-competition-awards';
import projects from './060-projects';
import skills from './070-skills';
import press from './080-press';

let cvData = {
  info: {
    ...info,
    fullName: `${info.firstName} “${info.preferredName}” ${info.lastName}`,
    legalName: `${info.firstName} ${info.lastName}`
  },
  education,
  experience,
  publications,
  awards,
  competitionAwards,
  projects,
  skills,
  press
};

if (window) {
  window.cvData = cvData;
}
export default cvData;