import React from 'react';
import fetch from 'isomorphic-unfetch';
import Typography from 'material-ui/Typography';

class IndexPage extends React.Component {
  static async getInitialProps({ req }) {
    const response = await fetch(`${req.protocol}://${req.get('Host')}/api/serve`).catch((err) => {
      console.log(err);
      return null;
    });
    const resJson = await response.json();
    const { status } = response;
    return {
      data: resJson,
      status,
    };
  }

  render() {
    const { data, status } = this.props;
    return (
      <div>
        <div>
          <Typography type="title">Hello Next.js</Typography>
        </div>
        <div>
          <Typography type="body1">{data}</Typography>
          <Typography type="body1">{status}</Typography>
        </div>
      </div>
    );
  }
}

export default IndexPage;

