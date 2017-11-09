import Document, { Head, Main, NextScript } from 'next/document';
import * as React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { getContext } from '../components';

class MyDocument extends Document {
  public render() {
    return (
      <html lang='en' dir='ltr'>
        <Head>
          <title>My page</title>
          <meta charSet='utf-8' />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name='viewport'
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          <link rel='manifest' href='/static/manifest.json' />
          {/* PWA primary color */}
          <meta name='theme-color' content={this.props.stylesContext.theme.palette.primary[500]} />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

(MyDocument as any).getInitialProps = (ctx: any) => {
  const context = getContext();
  const page = ctx.renderPage((Component: any) => (props: any) => (
    <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
      <Component {...props} />
    </JssProvider>
  ));

  return {
    ...page,
    stylesContext: context,
    styles: (
      <style
        id='jss-server-side'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: context.sheetsRegistry.toString() }}
      />
    ),
  };
};

export default MyDocument;
