import React, { useState } from "react";
import { loginPageStyle } from "./style";
import { withStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = (props) => {
  const { classes } = props;

  // LOGIN DATA
  const [userName, setUserName] = useState("admin");
  const [password, setPassword] = useState("123");
  const [formData, setFormData] = useState({ userName: "", password: "" });

  const updateFormDataUserName = (props) => {
    setFormData({
      ...formData,
      userName: props.target.value,
    });
  };

  const updateFormDataPassword = (props) => {
    setFormData({
      ...formData,
      password: props.target.value,
    });
  };

  const checkValidity = () => {
    console.log("Login button clicked!");
    console.log("User Name : " + formData.userName);
    console.log("User Name : " + formData.password);
  };

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
              onChange={(e) => {
                updateFormDataUserName(e);
              }}
            />
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              variant="outlined"
              onChange={(e) => {
                updateFormDataPassword(e);
              }}
            />
          </div>
          <div className={classes.btn_container}>
            <Button
              variant="contained"
              onClick={() => {
                checkValidity();
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withStyles(loginPageStyle)(LoginPage);
