import { Component } from "react";
import { Greeting } from "../../components/Home/Greeting/greeting";

class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Hello Im {this.props.name} and my status is {this.props.status}</h1>
                <Greeting instituteName="IJSE"/>
            </div>
        )
    }
}

export default HomePage;