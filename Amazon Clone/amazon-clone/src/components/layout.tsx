import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Link,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
} from "@material-ui/core";
import Head from "next/head";
import React, { useContext, useState } from "react";
import useStyles from "../utils/style";
import NextLink from "next/link";
import { Store } from "../store";
import Cookies from "js-cookie";

export default function Layout({ children, description, title }: any) {
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;

  console.log(darkMode);

  const [pageMode, setPageMode] = useState(false);

  const handleChangeMode = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      body1: {
        fontWeight: "normal",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  return (
    <Box>
      <Head>
        <title>{title ? `${title}-Lets Shop` : "Lets Shop"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link className={classes.grow}>
                <Typography className={classes.brand}>Lets Shop</Typography>
              </Link>
            </NextLink>
            <Switch checked={darkMode} onClick={handleChangeMode}></Switch>
            <NextLink href="/cart" passHref>
              <Link>
                <Typography>Cart</Typography>
              </Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>
                <Typography>Login</Typography>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography variant="h4">
            All rights reserved. Lets Shop ©2022-2023
          </Typography>
        </footer>
      </ThemeProvider>
    </Box>
  );
}
