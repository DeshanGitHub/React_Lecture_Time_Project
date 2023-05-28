import { withStyles } from "@mui/styles";
import React from "react";
import { styleSheet } from "./style";


const gridLayout = (props) => {
  let { classes } = props;

  return (
    <div className={classes.container}>
      
    </div>
  );
};

export default withStyles(styleSheet)(gridLayout);
