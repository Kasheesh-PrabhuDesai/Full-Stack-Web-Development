import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../src/theme";
import { useEffect } from "react";
import { Fragment } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "../src/store";
import { PersistGate } from "redux-persist/integration/react";
import NavBar from "../src/components/navbar";
import Footer from "../src/components/footer";

// Client-side cache, shared for the whole session of the user in the browser.

export default function MyApp(props: any) {
    const { Component, pageProps } = props;

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles && jssStyles.parentElement) jssStyles.parentElement.removeChild(jssStyles);
    }, []);

    return (
        <Fragment>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" title="Wheels On Meals" />
            </Head>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <NavBar />
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <Component {...pageProps} />
                        <Footer />
                    </PersistGate>
                </Provider>
            </ThemeProvider>
        </Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired
};
