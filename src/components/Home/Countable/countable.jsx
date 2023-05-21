import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const countable = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Count : 0
      </Typography>
      <Button variant="contained" onClick={()=>{
        console.log("Button Clicked!!");
      }}>Increase</Button>
    </div>
  );
};

export default countable;
