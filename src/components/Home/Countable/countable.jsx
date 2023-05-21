import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Countable = () => {
  const [count, setCount] = useState(0);

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
    </div>
  );
};

export default Countable;
