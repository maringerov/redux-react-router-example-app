import React, { PropTypes } from 'react';

export default class Content {
  render() {
    return (
      <div style={styles.content}>
        main post content
      </div>
    );
  }
}

let styles = {
  content: {
    width: '75%',
    float: 'right'
  }
}
