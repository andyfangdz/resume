/**
 * Created by andy on 2/28/17.
 */
import React, {Component} from 'react';
import {observer} from "mobx-react";
import Route from 'route-parser';

import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import FileDownloadIcon from 'material-ui-icons/FileDownload';
import PrintIcon from 'material-ui-icons/Print';

import appState, {history} from "../../../store/appState";

class ControlBar extends Component {

    constructor(props) {
        super(props);
        this.routeParser = new Route('/:name');
    }

    componentWillMount() {
        appState.cv.featured = this.routeParser.match(window.location.pathname).name === "resume";
    }

    onSwitchCVResume = () => {
        if (appState.cv.featured) {
            history.push("/cv");
        } else {
            history.push("/resume")
        }
        appState.cv.featured = !appState.cv.featured;
    };

    onSwitchSeal = () => {
        appState.cv.showSeal = !appState.cv.showSeal;
    };

    render() {
        return (<Paper className="toolbar-paper" rounded={false}>
            CV
            <Switch
                checked={appState.cv.featured}
                onChange={this.onSwitchCVResume}
            />
            Resume <br />

            <FormGroup row>
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
                raised={true}
                color="primary"
                onClick={() => {
                    window.open(`https://s3.andyfang.me/cv/${(appState.cv.featured ? 'resume.pdf' : 'cv.pdf')}`, '_blank');
                }}
            >
                <FileDownloadIcon /> PDF
            </Button>
            <Button
                raised={true}
                color="accent"
                onClick={() => {
                    window.print();
                }}
            >
                <PrintIcon /> Print
            </Button>

        </Paper>);
    }
}

export default observer(ControlBar);
