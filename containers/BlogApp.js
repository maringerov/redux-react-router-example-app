import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import Main from '../components/Main';
import * as BlogActions from '../actions/BlogActions';

function select(state) {
  return { blogposts: state.blogposts}
}

export default class BlogApp extends Component {
  render() {
    return (
      <Connector select={select}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ blogposts, dispatch }) {
    const actions = bindActionCreators(BlogActions, dispatch);
    return (
      <div>
        <Main blogposts={blogposts} actions={actions} />
      </div>
    );
  }
}
