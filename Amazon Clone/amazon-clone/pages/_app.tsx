import "../styles/globals.css";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { StoreProvider } from "../src/store";

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
