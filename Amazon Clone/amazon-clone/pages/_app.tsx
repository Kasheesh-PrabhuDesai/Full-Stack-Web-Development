import "../styles/globals.css";
import { useEffect } from "react";
import { StoreProvider } from "../src/store";

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement)
      jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
