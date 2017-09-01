import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Route from 'route-parser';

import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import FileDownloadIcon from 'material-ui-icons/FileDownload';
import PrintIcon from 'material-ui-icons/Print';

import appState, { history } from '../../../store/appState';

const styles = theme => ({
  button: {
    margin: 0,
    marginBottom: '10px',
  },
  input: {
    display: 'none',
  },
});

class ControlBar extends Component {

  constructor(props) {
    super(props);
    this.routeParser = new Route('/:name');
  }

  componentWillMount() {
    appState.cv.featured = this.routeParser.match(window.location.pathname).name === 'resume';
  }

  onSwitchCVResume = () => {
    if (appState.cv.featured) {
      history.push('/cv');
    } else {
      history.push('/resume')
    }
    appState.cv.featured = !appState.cv.featured;
  };

  onSwitchSeal = () => {
    appState.cv.showSeal = !appState.cv.showSeal;
  };

  render() {
    const classes = this.props.classes;
    return (
      <Paper className="toolbar-paper">
        <div className="should-feature">
          <span>CV</span>
          <Switch
            checked={appState.cv.featured}
            onChange={this.onSwitchCVResume}
          />
          <span>Resume</span>
        </div>
        <FormGroup row={true}>
          <FormControlLabel
            control={
              <Checkbox
                checked={appState.cv.showSeal}
                onChange={this.onSwitchSeal}
              />
            }
            label="Show Seal"
          />
        </FormGroup>
        <Button
          className={classes.button}
          raised={true}
          color="primary"
          onClick={() => {
            window.open(
              `https://s3.andyfang.me/cv/${(appState.cv.featured ? 'resume.pdf' : 'cv.pdf')}`,
              '_blank');
          }}
        >
          <FileDownloadIcon/> PDF
        </Button>
        <Button
          className={classes.button}
          raised={true}
          color="accent"
          onClick={() => {
            window.print();
          }}
        >
          <PrintIcon/> Print
        </Button>

      </Paper>
    );
  }
}

export default observer(withStyles(styles)(observer(ControlBar)));
