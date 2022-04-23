import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import useStyles from "../utils/style";

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Lets Shop</title>
      </Head>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <Typography className={classes.navBarText}>Lets Shop</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography variant="h4">
          All rights reserved. Lets Shop ©2022-2023
        </Typography>
      </footer>
    </div>
  );
}
