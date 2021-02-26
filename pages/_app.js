import React from 'react';
import MUI from 'next-mui';
import App from 'next/app';

import '../styles/globals.css';

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <MUI>
        <Component {...pageProps} />
      </MUI>
    );
  }
}
