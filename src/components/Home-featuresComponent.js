import React,{Component} from 'react';
import { Button} from 'reactstrap';
import a1 from "../assets/images/a1.svg";
import a2 from "../assets/images/a2.svg";
import a3 from "../assets/images/a3.svg";
import a4 from "../assets/images/a4.svg";
import '../css/Home-featuresComponent.css';

class Homefeatures extends Component{
    render(){
        return(
            <React.Fragment>
        <div className="particlebg">
        <div className="row" >
        <div className="col-12 col-md-6">
        <div className="row">
        <div className="col-6 offset-3 a1i">
        <img src={a1} className="img-fluid d-none d-md-block"/>
        </div>
        </div>
        <div className="row a2">
        <div className="col col-md-8 offset-md-1">
        <h2>For the students who wants
        to crack <span className="green" >JEE</span>, we offer our
        <span className="green" > MENTORSHIP PROGRAMME</span></h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button>Know More..</Button>
        </div>
        </div>
        <div className="row">
        <div className="col-6 offset-3 a3i">
        <img src={a3} className="img-fluid d-none d-md-block"/>
        </div>
        </div>
        <div className="row a4">
        <div className="col col-md-8 offset-md-1">
        <h2>For the students who wants
        to crack <span className="green" >JEE</span>, we offer our
        <span className="green" > MENTORSHIP PROGRAMME</span></h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
        </div>
        </div>
        <div className="col-12 col-md-6">
        <div className="row a1">
        <div className="col col-md-8 offset-md-3">
        <h2>For the students who wants
        to crack <span className="green" >JEE</span>, we offer our
        <span className="green" > MENTORSHIP PROGRAMME</span></h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button>Know More..</Button>
        </div>
        </div>
        <div className="row">
        <div className="col-6 offset-3 a2i">
        <img src={a2} className="img-fluid d-none d-md-block"/>
        </div>
        </div>
        <div className="row a3">
        <div className="col col-md-8 offset-md-3">
        <h2>For the students who wants
        to crack <span className="green" >JEE</span>, we offer our
        <span className="green" > MENTORSHIP PROGRAMME</span></h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
        </div>
        <div className="row">
        <div className="col-6 offset-3 a4i">
        <img src={a4} className="img-fluid d-none d-md-block"/>
        </div>
        </div>
        </div>
        </div>
   
        </div>
           </React.Fragment>
        );
    }
}

export default Homefeatures;
