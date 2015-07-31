import React, { PropTypes } from 'react';

export default class Sidebar {
  static propTypes = {
    blogpostsPreview: PropTypes.array.isRequired
  }

  render() {
    let { blogpostsPreview } = this.props
    return (
      <div style={styles.sidebar}>
        <ul>
          { blogpostsPreview = blogpostsPreview.map((post, i) =>
            <li key={i}>{post.title}</li>
          ) }
        </ul>
      </div>
    );
  }
}

let styles = {
  sidebar: {
    width: '25%',
    height: '100%',
    float: 'left',
    backgroundColor: 'whitesmoke'
  }
}
