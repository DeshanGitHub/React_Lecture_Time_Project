import React from "react";
import Typography from "@mui/material/Typography";

export const Greeting = (props) => {
  const obj = {
    profileImage: "https://picsum.photos/400/300",
  };

  return (
    <div>
      <div>
        <Typography variant="h3" gutterBottom>
          His Institute is {props.instituteName}
        </Typography>
      </div>
      <div>
        <img src={obj.profileImage} alt="Image" />
      </div>
    </div>
  );
};
