import React from "react";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style";

const Greeting = (props) => {
  const { classes } = props;

  const obj = {
    profileImage: "https://picsum.photos/400/300",
  };

  return (
    <div className={classes.container}>
      <div>
        <Typography variant="h3" gutterBottom>
          {props.instituteName}
        </Typography>
      </div>
      <div>
        <img src={obj.profileImage} alt="Image" />
      </div>
    </div>
  );
};

export default withStyles(styleSheet)(Greeting);
