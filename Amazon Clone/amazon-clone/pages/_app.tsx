import "../styles/globals.css";
import { useEffect } from "react";
import { StoreProvider } from "../src/store";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement)
      jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
