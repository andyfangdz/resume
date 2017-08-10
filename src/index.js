import React, {Component} from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import CV from './containers/CV';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <CV />
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
registerServiceWorker();
