import React, { PropTypes } from 'react';

export default class Content {
  static propTypes = {
    blogposts: React.PropTypes.array.isRequired
  }

  // componentDidMount() {
  //   let postId = this.props.routeParams.postId;
  //   console.log(postId);
  // }

  render() {
    let { blogposts } = this.props;
    return (
      <div style={styles.content}>
        { blogposts.map((post, i) =>
          <div key={i}>
            <p>{post.title}</p>
            <small>{post.body}</small>
          </div>
        ) }
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
