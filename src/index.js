import React, {Component} from 'react';
import {render} from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import FontFaceObserver from 'fontfaceobserver';

import CV from './containers/CV';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import appState from './store/appState';

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

const font = new FontFaceObserver('Lato');

font.load().then(() => appState.cv.fontLoaded = true);
