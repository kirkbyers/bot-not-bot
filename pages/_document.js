import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import orange from 'material-ui/colors/orange';

const theme = createMuiTheme({
  pallete: {
    primary: blue,
    accent: green,
    error: orange,
  },
});

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const {
      html, head, errorHtml, chunks,
    } = renderPage();
    const styles = flush();
    return {
      html, head, errorHtml, chunks, styles,
    };
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body className="custom_class">
          {this.props.customValue}
          <MuiThemeProvider theme={theme}>
            <Main />
          </MuiThemeProvider>
          <NextScript />
        </body>
      </html>
    );
  }
}
