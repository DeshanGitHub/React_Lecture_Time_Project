import React from "react";
import { loginPageStyle } from "./style";
import { withStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const LoginPage = (props) => {
  const { classes } = props;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.login_cover}>
          <div className={classes.title_container}>
            <Typography variant="h4" gutterBottom>
              Login Form
            </Typography>
          </div>
          <div className={classes.form_container}>
            <TextField
              id="outlined-basic"
              label="User name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              variant="outlined"
            />
          </div>
          <div className={classes.btn_container}>
            <Button variant="contained">Login</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withStyles(loginPageStyle)(LoginPage);
