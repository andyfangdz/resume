/**
 * Created by andy on 2/28/17.
 */
import {extendObservable, observable} from "mobx";

class AppState {
    constructor() {
        extendObservable(this, {
            cv: {
                featured: false,
                showSeal: false
            }
        });
    }
}

let appState = new AppState();

export default new AppState();