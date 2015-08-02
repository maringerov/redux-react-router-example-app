import React, { PropTypes } from 'react';

export default class Sidebar {
  static propTypes = {
    blogposts: PropTypes.array.isRequired
  }

  render() {
    let { blogposts } = this.props
    return (
      <div style={styles.sidebar}>
        <ul>
          { blogposts = blogposts.map((post, i) =>
            <li key={i}>
              <h3>{post.title}</h3>
              <span>{post.intro}</span>
            </li>
          ) }
        </ul>
      </div>
    );
  }
}

let styles = {
  sidebar: {
    position: 'fixed',
    width: '25%',
    height: '100%',
    float: 'left',
    backgroundColor: 'whitesmoke',
    marginTop: '80px'
  }
}
