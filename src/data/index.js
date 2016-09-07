/**
 * Created by andy on 9/6/16.
 */

import info from './000-info';
import education from './001-education';
import experience from './002-experience';

export default {
  info: {
    ...info,
    fullName: `${info.firstName} “${info.preferredName}” ${info.lastName}`,
    legalName: `${info.firstName} ${info.lastName}`
  },
  education,
  experience
}