import * as fetch from 'isomorphic-unfetch';
import * as React from 'react';

import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

interface State {
  email: string;
  loginSent: boolean;
}

class RegisterForm extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { email: '', loginSent: false };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleInputChange(event: React.ChangeEvent<{ value: string }>) {
    const { target } = event;
    this.setState(() => ({ email: target.value }));
  }

  public async handleSubmit(event: React.FormEvent<{}>) {
    event.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email: this.state.email }),
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });
    this.setState(() => ({ loginSent: true }));
    setTimeout(() => {
      this.setState(() => ({ email: '', loginSent: false }));
    }, 5000);
  }

  public render() {
    return (
      <Grid container justify='center' alignContent='center'>
        <Grid item xs={10}>
          {!this.state.loginSent &&
            <Grid container>
              <Grid item xs={12}>
                <Typography type='headline'>Sign up to help us label data</Typography>
                <form onSubmit={this.handleSubmit}>
                  <TextField
                    id='email'
                    label='Email Address'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    fullWidth
                  />
                </form>
              </Grid>
            </Grid>
          }
          {this.state.loginSent &&
            <Typography type='body1'>
              An email has been sent to {this.state.email} with a link to login
            </Typography>
          }
        </Grid>
      </Grid>
    );
  }
}

export default RegisterForm;
