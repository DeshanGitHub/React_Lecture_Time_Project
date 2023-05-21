import { Component, Fragment } from "react";
import Greeting from "../../components/Home/Greeting/greeting";
import Countable from "../../components/Home/Countable/countable";
import Divider from '@mui/material/Divider';

class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
               <Greeting instituteName="IJSE"/>
               <Divider light />
               <Countable/>
            </Fragment>
        )
    }
}

export default HomePage;