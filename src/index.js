import React, {Component} from 'react';

import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

import {CV} from './containers/CV';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import './styles/index.css';


class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}


render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="resume" component={CV}/>
            <Route path="cv" component={CV}/>
            <IndexRedirect to="/cv" />
        </Route>
    </Router>,
    document.getElementById('root')
);