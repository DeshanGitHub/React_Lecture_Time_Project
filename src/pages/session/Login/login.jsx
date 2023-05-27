import React, { useState } from "react";
import { loginPageStyle } from "./style";
import { withStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const LoginPage = (props) => {
  const { classes } = props;

  // SNACK BAR DATA
  const [open, setOpenSnackBar] = useState({isOpen:false, severity:'', text:'abcd'});

  // LOGIN DATA
  const [userName, setUserName] = useState("admin");
  const [password, setPassword] = useState("123");
  const [formData, setFormData] = useState({ userName: "", password: "" });

  // CLOSE SNACK BAR WHEN CLICK CLOSE BUTTON
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar({
      ...open,
      isOpen:false
    });
  };

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

    if(userName==formData.userName && password==formData.password){
      console.log("login successful !");
      // ALERT ON SNACK BAR
      setOpenSnackBar({
        ...open,
        isOpen:true,
        severity:'success',
        text:'login successful !',
      });
    }else{
      console.log("Wrong Password or username!!");
      // ALERT ON SNACK BAR
      setOpenSnackBar({
        ...open,
        isOpen:true,
        severity:'error',
        text:'Wrong Password or username !!',
      });
    }
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
      <Snackbar open={open.isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={open.severity} sx={{ width: '100%' }}>
          {open.text}
        </Alert>
      </Snackbar>
    </>
  );
};

export default withStyles(loginPageStyle)(LoginPage);
