import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import store from './stores/store';
import history from './helpers/history';

import InstagramSearch from './containers/InstagramSearch';
import About from './containers/About';
import TagSearch from './containers/TagSearch';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ InstagramSearch }>
        <IndexRoute component={ About }/>
        <Route path="/tag(/:tag)" component={ TagSearch }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('view')
);