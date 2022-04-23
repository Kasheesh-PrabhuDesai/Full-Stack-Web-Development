import "../styles/globals.css";
import { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../src/theme";

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
