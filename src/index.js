import React, { Component } from 'react';
import { render } from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';

import CV from './containers/CV';
import './styles/index.css';
import appState from './store/appState';

class App extends Component {
  render() {
    return <CV />;
  }
}

render(<App />, document.getElementById('root'));

const font = new FontFaceObserver('Lato');

font.load().then(() => (appState.cv.fontLoaded = true));
