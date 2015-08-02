import React, { PropTypes } from 'react';
import RouteHandler from 'react-router';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

export default class Main {
  static propTypes = {
    blogposts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    let { blogposts } = this.props;

    return (
      <div style={styles.main}>
        <Header />
        <Sidebar blogpostsPreview={blogposts}/>
        <RouteHandler />
        <Footer />
      </div>
    );
  }
}

let styles = {
  main: {
    fontFamily: 'Lato',
    clear: 'both'
  }
}
