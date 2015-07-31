import React from 'react';

export default class Footer {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.footerText}>
          Contribute to the <a href='https://github.com/knowbody/redux-react-router-example-app' target='_blank'>project on GitHub</a>.
        </div>
      </div>
    );
  }
}

let styles = {
  layout: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center'
  },
  footerText: {
    padding: '10px',
    fontSize: '10px'
  }
}
