import * as fetch from 'isomorphic-unfetch';
import * as React from 'react';

import { DisplayTweetComponent, RegisterFormComponent } from '../components';

interface Props {
  data: any;
  status: number;
}

interface State {
  data: any;
}

class IndexPage extends React.Component<Props, State> {
  public static async getInitialProps({ req }: { req: any }) {
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

  constructor(props: Props) {
    super(props);
    this.state = { data: props.data };
    this.handleClassification = this.handleClassification.bind(this);
  }

  public handleClassification(classificationString: string) {
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

  public render() {
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
