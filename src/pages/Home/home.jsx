import { Component } from "react";

class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Hello Im {this.props.name} and my status is {this.props.status}</h1>
            </div>
        )
    }
}

export default HomePage;