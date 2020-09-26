import React,{Component} from 'react';
import cons from "../assets/images/construction.svg";

class Temp extends Component{
    render(){
        return(
            <React.Fragment>
            <div className="container">
            <div className="row middle">
            <div className="col">
            <img src={cons} className="img-fluid"/>
            </div>
            </div>
            </div>
            </React.Fragment>
            );
        }
    }
    
    export default Temp;