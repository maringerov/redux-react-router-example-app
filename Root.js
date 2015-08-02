import React, { Component, PropTypes } from 'react'
import { Redirect, Router, Route } from 'react-router'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import * as reducers from './reducers';
import BlogApp from './containers/BlogApp';
import Content from './components/Content';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { history } = this.props
    return (
      <Provider store={store}>
        {renderRoutes.bind(null, history)}
      </Provider>
    )
  }
}

function renderRoutes(history) {
  return (
    <Router history={history}>
      <Route component={BlogApp} path='/'>
        <Route component={Content} path='/posts/:postId' />
      </Route>
    </Router>
  )
}

const router = ReactRouter.create({
  routes: routes,
  location: ReactRouter.HistoryLocation
});

router.run(function (Handler, state) {
  React.render(<Handler/>, document.getElementById("app-container"));
});
