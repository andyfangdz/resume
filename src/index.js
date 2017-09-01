import React, {Component} from 'react';
import {render} from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import CV from './containers/CV';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

const MuiTheme = createMuiTheme();

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={MuiTheme}>
        <CV />
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
registerServiceWorker();
