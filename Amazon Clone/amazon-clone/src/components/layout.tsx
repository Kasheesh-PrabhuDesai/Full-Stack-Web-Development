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
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Head from "next/head";
import React, { useContext, useState } from "react";
import useStyles from "../utils/style";
import NextLink from "next/link";
import { Store } from "../store";
import Cookies from "js-cookie";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

function Layout({ children, description, title }: any) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo } = state;

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

  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);

  const loginClickHandler = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const loginMenuCloseHandler = () => {
    setAnchorEl(null);
  };

  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    Cookies.remove("cartItems");
    router.push("/");
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
            <div style={{ display: "inline-flex" }}>
              <Switch checked={darkMode} onClick={handleChangeMode}></Switch>
              <NextLink href="/cart" passHref>
                <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={cart?.cartItems?.length}
                    >
                      <ShoppingCartIcon style={{ width: 32, height: 32 }} />
                    </Badge>
                  ) : (
                    <ShoppingCartIcon style={{ width: 32, height: 32 }} />
                  )}
                </Link>
              </NextLink>
              {userInfo ? (
                <>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={loginClickHandler}
                    className={classes.navbarButton}
                  >
                    {userInfo.name}
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                  >
                    <MenuItem onClick={loginMenuCloseHandler}>Profile</MenuItem>
                    <MenuItem onClick={loginMenuCloseHandler}>
                      My account
                    </MenuItem>
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <NextLink href="/login" passHref>
                  <Link>
                    <Typography
                      component="span"
                      style={{ marginLeft: 15, fontSize: 20 }}
                    >
                      Login
                    </Typography>
                  </Link>
                </NextLink>
              )}
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

export default dynamic(() => Promise.resolve(Layout), { ssr: false });
