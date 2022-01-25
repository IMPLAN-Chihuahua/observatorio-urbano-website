import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import Head from 'next/head';
import theme from '../styles/theme';
import '../styles/globals.css';

// Manually generated
import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Observatorio Urbano</title>
        <meta lang='es' name='viewport' content='initial-scale=1, width=device-width' />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </CacheProvider>);
}

export default MyApp;
