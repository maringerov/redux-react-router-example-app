import React, { PropTypes } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default class Main {
  static propTypes = {
    blogposts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    children: PropTypes.any
  }

  render() {
    let { blogposts } = this.props;

    return (
      <div style={styles.main}>
        <Header />
        <Sidebar blogposts={blogposts}/>
        <div>
          {this.props.children}
        </div>
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
