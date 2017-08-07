/**
 * Created by andy on 2/28/17.
 */
import {observable} from "mobx";

class AppState {
  cv = observable({
    featured: false,
    showSeal: false
  });
}

let appState = new AppState();

export default appState;
