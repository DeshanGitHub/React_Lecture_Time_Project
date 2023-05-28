import { withStyles } from "@mui/styles";
import React from "react";
import { styleSheet } from "./style";
import Typography from '@mui/material/Typography';

const flexLayout = (props) => {
  let { classes } = props;

  return (
    <div className={classes.container}>
      <div className={classes.title_container}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      </div>
      <div className={classes.form_container}>
        <div className={classes.left_form}></div>
        <div className={classes.right_form}></div>
      </div>
      <div className={classes.btn_container}></div>
    </div>
  );
};

export default withStyles(styleSheet)(flexLayout);
