/**
 * Created by andy on 2/28/17.
 */
import { observable } from 'mobx';
import { createBrowserHistory } from 'history';

class AppState {
  cv = observable({
    featured: false,
    fontLoaded: false,
  });
}

let appState = new AppState();

export const history = createBrowserHistory();
export default appState;
