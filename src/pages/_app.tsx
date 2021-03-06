import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import { GlobalStyles, variables as theme } from 'css';
import 'css/tailwind.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>NextJS Template</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
        </Head>
        <StyleSheetManager disableVendorPrefixes>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </StyleSheetManager>
        <GlobalStyles />
      </>
    );
  }
}
