import React from 'react';
import fetch from 'isomorphic-unfetch';
import Typography from 'material-ui/Typography';

import { DisplayTweetComponent, RegisterFormComponent } from '../components';

class IndexPage extends React.Component {
  static async getInitialProps({ req }) {
    const response = await fetch(`${req.protocol}://${req.get('Host')}/api/serve`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        auth: req.signedCookies.auth,
      },
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
    console.log(data);
    return (
      <div>
        {status === 200 && <DisplayTweetComponent data={data} />}
        {status !== 200 && <RegisterFormComponent />}
      </div>
    );
  }
}

export default IndexPage;

