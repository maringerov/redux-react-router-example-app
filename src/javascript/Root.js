import React, { Component, PropTypes } from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux';
import mui from 'material-ui';
import theme from './config/theme';

const ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setTheme(theme);

import Blog from './views/Blog';
import Draft from './views/Draft';
import Login from './views/Login';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  /*
   For more details: https://github.com/callemall/material-ui#usage
   Pass material-ui theme through child context
   We are doing this here so we don't have to do it anywhere else.
   */
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    const { history } = this.props;

    return (
        <Provider store={store}>
          {() =>
            <Router history={history}>
              <Route path='/' component={Blog} />
              <Route path='/post/new' component={Draft} />
              <Route path='/login' component={Login} />
            </Router>
          }
        </Provider>
    );
  }
}
