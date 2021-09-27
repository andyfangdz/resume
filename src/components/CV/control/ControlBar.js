import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Route from 'route-parser';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FileDownloadIcon from '@material-ui/icons/SaveAlt';
import PrintIcon from '@material-ui/icons/Print';

import appState, { history } from '../../../store/appState';

const styles = (theme) => ({
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
    appState.cv.featured =
      this.routeParser.match(window.location.pathname).name === 'resume';
  }

  onSwitchCVResume = () => {
    if (appState.cv.featured) {
      history.push('/cv');
    } else {
      history.push('/resume');
    }
    appState.cv.featured = !appState.cv.featured;
  };

  render() {
    const classes = this.props.classes;
    return (
      <Paper className="toolbar-paper">
        <FormGroup row={true}>
          <div className="should-feature">
            <span>CV</span>
            <Switch
              checked={appState.cv.featured}
              onChange={this.onSwitchCVResume}
            />
            <span>Resume</span>
          </div>
        </FormGroup>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => {
            window.open(
              `${
                appState.cv.featured
                  ? 'https://s3.andyfang.me/cv/andy-fang-resume.pdf'
                  : 'https://s3.andyfang.me/cv/andy-fang-cv.pdf'
              }`,
              '_blank'
            );
          }}
        >
          <FileDownloadIcon /> PDF
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => {
            window.print();
          }}
        >
          <PrintIcon /> Print
        </Button>
      </Paper>
    );
  }
}

export default observer(withStyles(styles)(observer(ControlBar)));
