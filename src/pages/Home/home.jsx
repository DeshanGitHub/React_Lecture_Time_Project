import { Component } from "react";
import Greeting from "../../components/Home/Greeting/greeting";

class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                
               <Greeting instituteName="IJSE"/>
            </div>
        )
    }
}

export default HomePage;