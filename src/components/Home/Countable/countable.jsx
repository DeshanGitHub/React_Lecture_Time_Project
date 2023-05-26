import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Countable = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Count : {count}
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          console.log("Button Clicked!!");
          increment();
        }}
        
      >
        Increase
      </Button>

      <Button
        variant="outlined"
        color="error"
        onClick={() => {
          decrement();
        }}
        style={{marginLeft:'15px'}}
      >
        Decrease
      </Button>
    </div>
  );
};

export default Countable;
