import React, {Component} from 'react';
import {CV, Resume} from './containers/CV';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOMServer from 'react-dom/server';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import './styles/index.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      featured: !!props.route.featured,
      seal: false
    };
  }

  onSwitchCVResume = () => {
    if (this.state.featured) {
      browserHistory.push("/");
    } else {
      browserHistory.push("/resume")
    }
    this.setState({featured: !this.state.featured});
  };

  onSwitchSeal = () => {
    this.setState({seal: !this.state.seal});
  };

  render() {
    return (
      <MuiThemeProvider>
        <main>
          <aside className="toolbar">
            <Paper className="toolbar-paper" zDepth={1} rounded={false}>
              CV
              <Toggle
                style={{display: "inline-block", width: "auto"}}
                toggled={this.state.featured}
                defaultToggled={this.props.featured}
                onToggle={this.onSwitchCVResume}
              />
              Resume <br />
              <Checkbox
                label="Show Seal"
                checked={this.state.seal}
                onCheck={this.onSwitchSeal}
              /> <br />
              <RaisedButton
                label="Print"
                fullWidth={true}
                primary={true}
                onTouchTap={() => {print()}}
                icon={<FontIcon className="material-icons">print</FontIcon>}
              />
              <RaisedButton
                label="PDF"
                fullWidth={true}
                secondary={true}
                style={{marginTop: "0.2em"}}
                onTouchTap={() => {window.location = this.state.featured ? '/resume.pdf' : '/cv.pdf'}}
                icon={<FontIcon className="material-icons">file_download</FontIcon>}
              />

            </Paper>
          </aside>
          <CV featured={this.state.featured} seal={this.state.seal}/>
        </main>
      </MuiThemeProvider>
    );
  }
}

if (typeof document !== 'undefined') {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={App} featured={false}/>
      <Route path="/resume" component={App} featured={true}/>
      <Route path="*" component={App} featured={false}/>
    </Router>,
    // <App route={{featured:false}} />,
    document.getElementById('root')
  );
} else {
  console.log(ReactDOMServer.renderToString(<App route={{featured:false}} />));
}