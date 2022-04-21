import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import PropTypes from "prop-types";


function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentElement) jssStyles.parentElement.removeChild(jssStyles);
  }, []);
  
  return <Component {...pageProps} />
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
};