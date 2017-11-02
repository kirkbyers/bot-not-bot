import React from 'react';
import fetch from 'isomorphic-unfetch';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', loginSent: false };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    this.setState(() => ({ email: target.value }));
  }

  async handleSubmit(event) {
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

  render() {
    return (
      <Grid container>
        <Grid item xs={10}>
          {!this.state.loginSent &&
            <form onSubmit={this.handleSubmit}>
              <TextField
                id="email"
                label="Email Address"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </form>
          }
          {this.state.loginSent &&
            <Typography type="body1">
              An email has been sent to {this.state.email} with a link to login
            </Typography>
          }
        </Grid>
      </Grid>
    );
  }
}

export default RegisterForm;
