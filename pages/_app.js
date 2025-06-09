import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyles from '../styles/GlobalStyles';
import Container from '@components/Container';
import Background from '@components/Background';
import Nav from '@components/Nav';
import Paper from '@components/Paper';
import Footer from '@components/Footer';

const theme = {
  colors: {
    primary: '#0070f3', // override with your preferred theme colors
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          property='og:image'
          content='https://thescottwedding.co.uk/og-image.jpg'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <title>Natalie And Chris Wedding Invite</title>
        {/* Override meta tags on individual pages as needed */}
        <script
          defer
          data-domain='thescottwedding.co.uk'
          src='https://plausible.io/js/script.tagged-events.js'
        ></script>
        <script
          defer
          data-domain='evening.thescottwedding.co.uk'
          src='https://plausible.io/js/script.js'
        ></script>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Background>
          <Container>
            <Nav />
            <Paper>
              <Component {...pageProps} />
            </Paper>
            <Footer />
          </Container>
        </Background>
      </ThemeProvider>
    </>
  );
}
