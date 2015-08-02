import React, { PropTypes } from 'react';
import { fetchOnUpdate } from '../decorators/fetchOnUpdate';

@fetchOnUpdate( 'postId', (params, actions) => {
  const { postId } = params
  actions.getPost(post)
})

export default class Content {

  render() {
    return (
      <div style={styles.content}>
        <h3>Post Body</h3>
        <p>
          {post.body}
        </p>
      </div>
    );
  }
}

let styles = {
  content: {
    width: '75%',
    height: '2000px',
    float: 'right',
    marginTop: '80px'
  }
}
