import React, {Component} from 'react';
import {CV, Resume} from './CV';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Switch from 'react-toggle-switch';
import './styles/index.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      featured: props.featured ? true : false
    };
  }

  render() {
    return (
      <main>
        <aside>
          <Switch onClick={() => this.setState({featured: !this.state.featured})}/>
        </aside>
        <CV featured={this.state.featured} />
      </main>
    );
  }
}

render(
  // <Router history={browserHistory}>
  //   <Route path="/" component={App} >
  //     <IndexRoute component={CV}/>
  //     <Route path="/resume" component={Resume}/>
  //     <Route path="*" component={CV}/>
  //   </Route>
  // </Router>,
  <App />,
  document.getElementById('root')
);
