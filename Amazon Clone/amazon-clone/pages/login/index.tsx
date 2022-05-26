import {
  ListItem,
  TextField,
  Typography,
  List,
  Button,
} from "@material-ui/core";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../src/components/layout";
import useStyles from "../../src/utils/style";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      alert("succss login");
    } catch (err: any) {
      alert(err.response.data ? err.response.data.message : err.message);
    }
  };

  return (
    <Layout title="login">
      <form onSubmit={handleSubmit} className={classes.form}>
        <Typography component="h1" variant="h1">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              inputProps={{ type: "email" }}
              onChange={e => setEmail(e.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              inputProps={{ type: "password" }}
              onChange={e => setPassword(e.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Login
            </Button>
          </ListItem>
          <ListItem>
            Don't have an account? &nbsp;
            <Link href="/register">Register</Link>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
