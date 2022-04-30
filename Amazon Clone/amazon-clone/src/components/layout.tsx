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
  Badge,
} from "@material-ui/core";
import Head from "next/head";
import React, { useContext } from "react";
import useStyles from "../utils/style";
import NextLink from "next/link";
import { Store } from "../store";
import Cookies from "js-cookie";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Layout({ children, description, title }: any) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;

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

  const classes = useStyles();

  const handleChangeMode = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  return (
    <div>
      <Head>
        <title>{title ? `${title}-Lets Shop` : "Lets Shop"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar className={classes.toolbar}>
            <Box display="flex" alignItems="center">
              <NextLink href="/" passHref>
                <Link>
                  <Typography className={classes.brand}>Lets Shop</Typography>
                </Link>
              </NextLink>
            </Box>
            <div>
              <Switch checked={darkMode} onClick={handleChangeMode}></Switch>
              <NextLink href="/cart" passHref>
                <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={cart?.cartItems?.length}
                    >
                      <ShoppingCartIcon />
                    </Badge>
                  ) : (
                    <ShoppingCartIcon />
                  )}
                </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>
                  <Typography component="span">Login</Typography>
                </Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Lets Shop ©2022-2023</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
