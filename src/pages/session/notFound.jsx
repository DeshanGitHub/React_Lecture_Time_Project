import { withStyles } from '@mui/styles';
import React from 'react';
import Not_Found_Image from '../../assets/img/404Image.png'; 
import Button from '@mui/material/Button';

const styleSheet=()=>({
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    image_container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        maxWidth:'10px'
    }
})

const NotFound = (props) => {
    let { classes } = props;

  return (
    <div className={classes.container}>
        <div className={classes.image_container}>
            <img src={Not_Found_Image} alt="Image" />
        </div>
        <Button variant="contained">Back To Home</Button>
    </div>
  )
}

export default withStyles(styleSheet)(NotFound);