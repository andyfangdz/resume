/**
 * Created by andy on 2/28/17.
 */
import {observable} from "mobx";
import createHistory from 'history/createBrowserHistory'

class AppState {
  cv = observable({
    featured: false,
    showSeal: false,
    fontLoaded: false
  });
}

let appState = new AppState();

export const history = createHistory();
export default appState;
