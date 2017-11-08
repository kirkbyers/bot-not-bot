import React from 'react';
import fetch from 'isomorphic-unfetch';

import { DisplayTweetComponent, RegisterFormComponent } from '../components';

class IndexPage extends React.Component {
  static async getInitialProps({ req }) {
    const query = req.query.auth ? `?auth=${req.query.auth}` : '';
    const response = await fetch(`${req.protocol}://${req.get('Host')}/api/serve${query}`, {
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

  constructor(props) {
    super(props);
    this.state = { data: props.data };
    this.handleClassification = this.handleClassification.bind(this);
  }

  handleClassification(classificationString) {
    return async () => {
      const result = await fetch(`/api/${this.state.data.processedId}`, {
        method: 'POST',
        body: JSON.stringify({ response: classificationString }),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
      const resultJson = await result.json();
      this.setState(() => ({ data: resultJson }));
    };
  }

  render() {
    const { status } = this.props;
    const { data } = this.state;
    return (
      <div>
        {status === 200 && <DisplayTweetComponent data={data} handleButtonClick={this.handleClassification} />}
        {status !== 200 && <RegisterFormComponent />}
      </div>
    );
  }
}

export default IndexPage;

